import React from "react";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import classes from "./SearchResults.module.css";

const SearchResults = (props) => {
  const onCloseModal = () => {
    props.onCloseModal();
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      {props.searchBooks.map((book) => {
        return (
          <Card key={book.id} className={classes.result}>
            <div className={classes.left}>
              <img src={book.bookCover} alt={`book cover for ${book.title}`} />
              <button>Add to bookshelf</button>
            </div>
            <div className={classes.right}>
              <h2>{book.title}</h2>
              <p>{book.description}</p>
              <div>Page Count: {book.pageCount}</div>
            </div>
          </Card>
        );
      })}
    </Modal>
  );
};

export default SearchResults;