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
      <img src={"http://books.google.com/books/content?id=XiAYDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"} alt="book cover" />
    </div>
  );
};

export default Book;
