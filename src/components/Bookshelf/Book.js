import { useState } from 'react';
import Button from '../UI/Button';
import classes from './Book.module.css'

const Book = (props) => {
  const pageWidthControl = props.pages * 0.2;

  const [bookWidth, setBookWidth] = useState(`${pageWidthControl}px`);
  const [bookFocused, setBookFocused] = useState(false);

  const expandedWidth = Math.max(120, pageWidthControl)

  const mouseEnterHandler = (event) => {
    if (event.target.parentElement.getAttribute('draggable') === false) {
      return
    };

    setBookWidth(`${expandedWidth}px`);
    setBookFocused(true);
  };

  const mouseLeaveHandler = () => {
    setBookWidth(`${pageWidthControl}px`);
    setBookFocused(false);
  };

  // const dragoverHandler = event => {
  //   console.log("Dragover: " + event)
  // };

  const clickHandler = event => {
    props.onOpenBook(event.target.parentElement.attributes.bookid.value);
  };

  const dropHandler = event => {
    props.onBookDrop();
  };

  const removeBookClickHandler = event => {
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
      // onDragOver={dragoverHandler}
      onClick={clickHandler}
      onDrop={dropHandler}
    >
      <img src={props.bookCover} alt="book cover" />
      {bookFocused && <Button className={classes.button} onClick={removeBookClickHandler}>Remove</Button>}
    </div>
  );
};

export default Book;
