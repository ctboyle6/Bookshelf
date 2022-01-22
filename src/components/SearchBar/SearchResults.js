import React from 'react';
import Modal from '../UI/Modal';
import Book from '../Bookshelf/Book';

const SearchResults = (props) => {
  const onCloseModal = () => {
    props.onCloseModal();
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      {props.searchBooks.map((book) => {
        return <Book key={book.id} name={book.title} pages={book.pageCount} />;
      })}
    </Modal>
  );
};

export default SearchResults;
