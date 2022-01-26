import React from 'react';
import classes from './Book.module.css'

const Book = (props) => {
  return (
    <div
      className={classes.book}
      style={{
        width: `${props.pages * 0.3}px`,
      }}
    >
      <img src={props.bookCover} alt="book cover" />
    </div>
  );
};

export default Book;
