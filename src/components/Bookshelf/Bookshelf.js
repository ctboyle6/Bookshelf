import React from 'react';
import Book from './Book';
import classes from './Bookshelf.module.css'

const DUMMY_BOOKS = [
  {
    id: 1,
    name: "book1",
    pages: 100,
  },
  {
    id: 2,
    name: "book2",
    pages: 200,
  },
  {
    id: 3,
    name: "book3",
    pages: 300,
  },
  {
    id: 4,
    name: "book4",
    pages: 400,
  },
];

const Bookshelf = () => {
  return (
    <div className={classes.bookshelf}>
      <div className={classes.row}>
        {DUMMY_BOOKS.map((book) => {
          return <Book name={book.name} pages={book.pages}/> ;
        })}
      </div>
      <div className={classes.row}>THIS IS A ROW</div>
    </div>
  );
};

export default Bookshelf;
