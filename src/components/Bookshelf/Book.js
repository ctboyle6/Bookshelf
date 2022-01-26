import { useState } from 'react';
import Button from '../UI/Button';
import classes from './Book.module.css'

const Book = (props) => {
  const [bookWidth, setBookWidth] = useState(`${props.pages * 0.3}px`);
  const [bookFocused, setBookFocused] = useState(false);

  const expandedWidth = Math.max(120, props.pages * 0.3)

  const mouseEnterHandler = () => {
    setBookWidth(`${expandedWidth}px`);
    setBookFocused(true);
  };

  const mouseLeaveHandler = () => {
    setBookWidth(`${props.pages * 0.3}px`);
    setBookFocused(false);
  };

  const removeClickHandler = event => {
    const removeBookId = event.target.parentElement.attributes.bookid.value;
    props.onRemoveBook(removeBookId);
  };

  return (
    <div
      className={classes.book}
      style={{
        width: bookWidth,
      }}
      bookid={props.id}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <img src={props.bookCover} alt="book cover" />
      {bookFocused && <Button className={classes.button} onClick={removeClickHandler}>Remove</Button>}
    </div>
  );
};

export default Book;
