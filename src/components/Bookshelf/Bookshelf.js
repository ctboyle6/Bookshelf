import { useState, useEffect } from "react";
import Book from "./Book";
import classes from "./Bookshelf.module.css";

const Bookshelf = (props) => {
  const [bookRows, setBookRows] = useState([]);

  const removeBookHandler = (removeBookId) => {
    props.onRemoveBook(removeBookId);
  };

  useEffect(() => {
    const perChunk = 5; // items per row

    const result = props.books.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new row
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    setBookRows(result);
  }, [props.books]);

  const buildRow = (row) => {
    const rowContents = row.map((book) => {
      return (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          pages={book.pageCount}
          bookCover={book.bookCover}
          onRemoveBook={removeBookHandler}
        />
      );
    });

    return (
      <div key={Math.random()} className={classes.row}>
        {rowContents}
      </div>
    );
  };

  let renderRows;
  if (bookRows.length === 0) {
    renderRows = <p className={classes["empty-row"]}>Try adding some books!</p>;
  } else {
    renderRows = bookRows.map((row) => {
      return buildRow(row);
    });
  }

  return (
    <div className={classes.bookshelf}>
      <div>{renderRows}</div>
    </div>
  );
};

export default Bookshelf;
