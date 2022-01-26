import React from "react";
import Book from "./Book";
import classes from "./Bookshelf.module.css";

const Bookshelf = (props) => {
  const removeBookHandler = (removeBookId) => {
    props.onRemoveBook(removeBookId);
  };

  return (
    <div className={classes.bookshelf}>
      <div className={classes.row}>
        {props.books.map((book) => {
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
        })}
      </div>
      <div className={classes.row}>THIS IS A ROW</div>
    </div>
  );
};

export default Bookshelf;
