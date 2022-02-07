import React from 'react';

import Modal from '../UI/Modal';
import Card from '../UI/Card';

import classes from './OpenBook.module.css'
import Button from '../UI/Button';

const OpenBook = (props) => {
  const ratingValue = document.getElementById('rating-value');

  const closeBookHandler = () => {
    props.onCloseBook()
  };

  const changeRatingHandler = (event) => {
    ratingValue.innerHTML = event.target.value;
  };

  return (
    <Modal onCloseModal={closeBookHandler}>
      <Card className={classes.result}>
        <div className={classes.left} bookid={props.openBook.id}>
          <img
            src={props.openBook.bookCover}
            alt={`book cover for ${props.openBook.title}`}
          />
        </div>
        <div className={classes.right}>
          <h2>{props.openBook.title}</h2>
          <p>{props.openBook.description}</p>
          <div>Page Count: {props.openBook.pageCount}</div>
          <form>
            <div className={classes['form-controls']}>
              <label htmlFor='date-finished'>Date Finished: </label>
              <input type="date" id='date-finished'/>
              <label htmlFor='rating'>Rating: <span id='rating-value'></span></label>
              <input type='range' id='rating' min='0.5' max='5' step='0.5' onChange={changeRatingHandler}/>
              <label htmlFor='shared-with'>Shared With: </label>
              <input type='text' id='shared-with'/>
            </div>
            <div className='form-actions'>
              <Button type='submit'>Save</Button>
            </div>
          </form>
        </div>
      </Card>
    </Modal>
  );
};

export default OpenBook;
