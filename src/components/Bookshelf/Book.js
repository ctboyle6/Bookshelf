import { useState } from 'react';
import classes from './Book.module.css'

const Book = (props) => {
  const pageWidthControl = props.pages * 0.2;

  const [bookWidth, setBookWidth] = useState(`${pageWidthControl}px`);

  const expandedWidth = Math.max(120, pageWidthControl)

  const mouseEnterHandler = (event) => {
    if (event.target.parentElement.getAttribute('draggable') === false) {
      return
    };

    setBookWidth(`${expandedWidth}px`);
  };

  const mouseLeaveHandler = () => {
    setBookWidth(`${pageWidthControl}px`);
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
    </div>
  );
};

export default Book;
