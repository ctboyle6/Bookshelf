import { useState } from "react";

import classes from "./App.module.css";

import Bookshelf from "./components/Bookshelf/Bookshelf";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchBar/SearchResults";

// const DUMMY_BOOKS = [
//   {
//     id: 1,
//     title: "book1",
//     pageCount: 100,
//     bookCover: "../public/logo512.png",
//   },
//   {
//     id: 2,
//     title: "book2",
//     pageCount: 200,
//     bookCover: "../public/logo512.png",
//   },
//   {
//     id: 3,
//     title: "book3",
//     pageCount: 300,
//     bookCover: "../public/logo512.png",
//   },
//   {
//     id: 4,
//     title: "book4",
//     pageCount: 400,
//     bookCover: "../public/logo512.png",
//   },
// ];

function App() {
  const [searchBooks, setSearchBooks] = useState([]);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [bookshelfBooks, setBookshelfBooks] = useState([
    {
      id: 1,
      title: "book1",
      pageCount: 300,
      bookCover:
        "http://books.google.com/books/content?id=XiAYDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
  ]);
  // const [error, setError] = useState(null);

  const fetchBooks = async (searchInput) => {
    // setError(null);
    try {
      const searchResponse = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          searchInput
        )}`
      );
      if (!searchResponse.ok) {
        throw new Error()
      }

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
    } catch (err) {
      // setError(err);
      alert(err.message + ' \nPlease try another search query.');
    }
  };

  const searchSubmitHandler = (enteredText) => {
    fetchBooks(enteredText);
  };

  const closeModalHandler = () => {
    setIsSearchModalOpen(false);
  };

  const AddToBookshelfHandler = (bookId) => {
    const selectedBook = searchBooks.find(book => book.id === bookId);

    setBookshelfBooks(prevBooks => [...prevBooks, selectedBook]);
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
          onAddToBookshelf={AddToBookshelfHandler}
        />
      )}
      <Bookshelf books={bookshelfBooks} />
    </div>
  );
}

export default App;
