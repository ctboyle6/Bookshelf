import React from 'react';
import classes from './Book.module.css'

const Book = (props) => {
  return (
    <div className={classes.book} style={{ width: `${props.pages * 0.3}px` }}>
      <div>{props.name}</div>
    </div>
  );
};

export default Book;
