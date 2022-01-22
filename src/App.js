import { useState } from "react";

import classes from "./App.module.css";

import Bookshelf from "./components/Bookshelf/Bookshelf";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchBar/SearchResults";

const DUMMY_BOOKS = [
  {
    id: 1,
    title: "book1",
    pageCount: 100,
  },
  {
    id: 2,
    title: "book2",
    pageCount: 200,
  },
  {
    id: 3,
    title: "book3",
    pageCount: 300,
  },
  {
    id: 4,
    title: "book4",
    pageCount: 400,
  },
];

function App() {
  const [searchBooks, setSearchBooks] = useState([]);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const fetchBooks = async (searchInput) => {
    const searchResponse = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        searchInput
      )}`
    );

    const dataResponse = await searchResponse.json();
    const transformedBooks = dataResponse.items.map((bookData) => {
      return {
        id: bookData.id,
        title: bookData.volumeInfo.title,
        authors: bookData.volumeInfo.authors,
        description: bookData.volumeInfo.description,
        pageCount: bookData.volumeInfo.pageCount,
        bookCover: bookData.volumeInfo.imageLinks.thumbnail
      };
    });
    setSearchBooks(transformedBooks);

    setIsSearchModalOpen(true);
  };

  const searchSubmitHandler = (enteredText) => {
    fetchBooks(enteredText);
  };

  const closeModalHandler = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <div className={classes.app}>
      <h1>Bookshelf</h1>
      <SearchBar onSubmitSearch={searchSubmitHandler} />
      {isSearchModalOpen && (
        <SearchResults
          searchBooks={searchBooks}
          onCloseModal={closeModalHandler}
        />
      )}
      <Bookshelf books={DUMMY_BOOKS} />
    </div>
  );
}

export default App;
