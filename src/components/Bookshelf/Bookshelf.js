import React from 'react';
import Book from './Book';
import classes from './Bookshelf.module.css'

const Bookshelf = (props) => {
  return (
    <div className={classes.bookshelf}>
      <div className={classes.row}>
        {props.books.map((book) => {
          return <Book key={book.id} name={book.title} pages={book.pageCount}/> ;
        })}
      </div>
      <div className={classes.row}>THIS IS A ROW</div>
    </div>
  );
};

export default Bookshelf;
