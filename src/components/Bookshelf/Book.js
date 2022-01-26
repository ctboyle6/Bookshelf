import { useState } from 'react';
import classes from './Book.module.css'

const Book = (props) => {
  const [bookWidth, setBookWidth] = useState(`${props.pages * 0.3}px`);

  const expandedWidth = Math.max(120, props.pages * 0.3)

  const mouseEnterHandler = () => {
    setBookWidth(`${expandedWidth}px`);
  };

  const mouseLeaveHandler = () => {
    setBookWidth(`${props.pages * 0.3}px`);
  };

  return (
    <div
      className={classes.book}
      style={{
        width: bookWidth,
      }}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <img src={props.bookCover} alt="book cover" />
    </div>
  );
};

export default Book;
