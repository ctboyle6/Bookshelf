import React from "react";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import classes from "./SearchResults.module.css";
import Button from "../UI/Button";

const SearchResults = (props) => {
  const onCloseModal = () => {
    props.onCloseModal();
  };

  const addBookHandler = (event) => {
    const bookId = event.target.parentElement.attributes.bookid.value;
    props.onAddToBookshelf(bookId);
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      {props.searchBooks.map((book) => {
        return (
          <Card key={book.id} className={classes.result}>
            <div className={classes.left} bookid={book.id}>
              <img src={book.bookCover} alt={`book cover for ${book.title}`} />
              <Button onClick={addBookHandler} disabled={book.isBookAdded}>
                {book.isBookAdded ? "Added" : "Add to Bookshelf"}
              </Button>
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
