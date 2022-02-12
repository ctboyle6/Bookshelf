import React, { useRef, useState } from "react";

import Modal from "../UI/Modal";
import Card from "../UI/Card";

import classes from "./OpenBook.module.css";
import Button from "../UI/Button";

const OpenBook = (props) => {
  const [formLocked, setFormLocked] = useState(true);
  const ratingValue = useRef();

  const closeBookHandler = () => {
    props.onCloseBook();
  };

  const changeRatingHandler = (event) => {
    const rating = event.target.value;
    ratingValue.current.innerHTML = rating;
  };

  const clickSaveHandler = (event) => {
    event.preventDefault();
    setFormLocked((prevState) => !prevState);
  };

  const removeBookClickHandler = (event) => {
    event.preventDefault();
    const removeBookId = props.openBook.id;
    props.onRemoveBook(removeBookId);
    props.onCloseBook();
  };

  let formData;
  if (formLocked === false) {
    formData = (
        <form className={classes.bottom}>
          <div className={classes["form-controls"]}>
            <label htmlFor="date-finished">Date Finished: </label>
            <input type="date" id="date-finished" disabled={formLocked} />
            <label htmlFor="rating">
              Rating: <span ref={ratingValue}></span>
            </label>
            <input
              type="range"
              id="rating"
              min="0.5"
              max="5"
              step="0.5"
              onChange={changeRatingHandler}
              disabled={formLocked}
            />
            <label htmlFor="shared-with">Shared With: </label>
            <input type="text" id="shared-with" disabled={formLocked} />
          </div>
          <div className={classes["form-actions"]}>
            <Button onClick={clickSaveHandler}>
              {formLocked ? "Edit" : "Save"}
            </Button>
            <Button onClick={removeBookClickHandler} color="#b91313">
              Remove
            </Button>
          </div>
        </form>
    );
  } else {
    formData = (
      <div className={classes.bottom}>
        <div className={classes["form-controls"]}>
          <label htmlFor="date-finished">Date Finished: {props.userDateRead}</label>
          <label htmlFor="rating">
            Rating: <span ref={ratingValue}>{props.userRating}</span>
          </label>
          <label htmlFor="shared-with">Shared With: {props.userSharedWith}</label>
        </div>
        <div className={classes["form-actions"]}>
          <Button onClick={clickSaveHandler}>
            {formLocked ? "Edit" : "Save"}
          </Button>
          <Button onClick={removeBookClickHandler} color="#b91313">
            Remove
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Modal onCloseModal={closeBookHandler}>
      <Card className={classes.result}>
        <h2>{props.openBook.title}</h2>
        <div className={classes.top} bookid={props.openBook.id}>
          <img
            src={props.openBook.bookCover}
            alt={`book cover for ${props.openBook.title}`}
          />
          <div>
            <p>{props.openBook.description}</p>
            <div>Page Count: {props.openBook.pageCount}</div>
          </div>
        </div>
        <form className={classes.bottom}>
          <div className={classes["form-controls"]}>
            <label htmlFor="date-finished">Date Finished: </label>
            <input type="date" id="date-finished" disabled={formLocked} />
            <label htmlFor="rating">
              Rating: <span ref={ratingValue}></span>
            </label>
            <input
              type="range"
              id="rating"
              min="0.5"
              max="5"
              step="0.5"
              onChange={changeRatingHandler}
              disabled={formLocked}
            />
            <label htmlFor="shared-with">Shared With: </label>
            <input type="text" id="shared-with" disabled={formLocked} />
          </div>
          <div className={classes["form-actions"]}>
            <Button onClick={clickSaveHandler}>
              {formLocked ? "Edit" : "Save"}
            </Button>
            <Button onClick={removeBookClickHandler} color="#b91313">
              Remove
            </Button>
          </div>
        </form>
      </Card>
    </Modal>
  );
};

export default OpenBook;
