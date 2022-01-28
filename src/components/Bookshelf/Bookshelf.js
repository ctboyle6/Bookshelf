import { useState, useEffect } from "react";
import Book from "./Book";
import classes from "./Bookshelf.module.css";

const Bookshelf = (props) => {
  const removeBookHandler = (removeBookId) => {
    props.onRemoveBook(removeBookId);
  };

  const buildRows = (books) => {
    return books.map((book) => {
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
  };

  let renderRows;
  if (props.books.length === 0) {
    renderRows = <p className={classes["empty-row"]}>Try adding some books!</p>;
  } else {
    renderRows = buildRows(props.books)
  }

  return (
    <div className={classes.bookshelf}>
      {renderRows}
    </div>
  );
};

export default Bookshelf;
