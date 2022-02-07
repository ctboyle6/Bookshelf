import { useState, useEffect } from "react";

import classes from "./Bookshelf.module.css";

import Sortable from "sortablejs";

import Book from "./Book";
import OpenBook from "./OpenBook";

const Bookshelf = (props) => {
  const [openBook, setOpenBook] = useState();

  useEffect(() => {
    const shelfSortable = document.getElementById("bookshelf-sortable");

    Sortable.create(shelfSortable, {
      animation: 300,
    });
  }, []);

  const removeBookHandler = (removeBookId) => {
    props.onRemoveBook(removeBookId);
  };

  const bookDropHandler = () => {
    props.onBookReorder();
  };

  const openBookHandler = (bookId) => {
    const selectedBook = props.books.find((book) => book.id === bookId);
    console.log(selectedBook);

    setOpenBook(selectedBook);
  };

  const closeBookHandler = () => {
    setOpenBook(null);
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
          onBookDrop={bookDropHandler}
          onOpenBook={openBookHandler}
        />
      );
    });
  };

  let renderRows;
  if (props.books.length === 0) {
    renderRows = <p className={classes["empty-row"]}>Try adding some books!</p>;
  } else {
    renderRows = buildRows(props.books);
  }

  return (
    <div id="bookshelf-sortable" className={classes.bookshelf}>
      {renderRows}
      {openBook && (
        <OpenBook
          openBook={openBook}
          onCloseBook={closeBookHandler}
        ></OpenBook>
      )}
    </div>
  );
};

export default Bookshelf;
