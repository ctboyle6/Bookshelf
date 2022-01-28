import { useState, useEffect, Fragment } from "react";

import classes from "./App.module.css";

import Bookshelf from "./components/Bookshelf/Bookshelf";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchBar/SearchResults";
import Sidebar from "./components/UI/Sidebar";

function App() {
  const [searchBooks, setSearchBooks] = useState([]);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [bookshelfBooks, setBookshelfBooks] = useState([]);
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
        throw new Error();
      }

      const dataResponse = await searchResponse.json();

      const transformedBooks = dataResponse.items.map((bookData) => {
        return {
          id: bookData.id,
          title: bookData.volumeInfo.title,
          authors: bookData.volumeInfo.authors,
          description: bookData.volumeInfo.description,
          pageCount: bookData.volumeInfo.pageCount,
          bookCover: bookData.volumeInfo.imageLinks.thumbnail,
        };
      });
      setSearchBooks(transformedBooks);

      setIsSearchModalOpen(true);
    } catch (err) {
      // setError(err);
      alert(err.message + " \nPlease try another search query.");
    }
  };

  useEffect(() => {
    if (JSON.stringify(localStorage.getItem("bookshelfBooks")) === "null") {
      return;
    }
    setBookshelfBooks(JSON.parse(localStorage.getItem("bookshelfBooks"))); // initial local storage load
  }, []);

  const searchSubmitHandler = (enteredText) => {
    fetchBooks(enteredText);
  };

  const closeModalHandler = () => {
    setIsSearchModalOpen(false);
  };

  const AddToBookshelfHandler = (bookId) => {
    const selectedBook = searchBooks.find((book) => book.id === bookId);

    setBookshelfBooks((prevBooks) => {
      const updatedBooks = [...prevBooks, selectedBook];
      localStorage.setItem("bookshelfBooks", JSON.stringify(updatedBooks)); // update local storage
      return updatedBooks;
    });

    setIsSearchModalOpen(false);
  };

  const removeBookHandler = (removeBookId) => {
    const postRemoveBooks = bookshelfBooks.filter(
      (book) => book.id !== removeBookId
    );

    setBookshelfBooks(postRemoveBooks);

    localStorage.setItem("bookshelfBooks", JSON.stringify(postRemoveBooks)); // update local storage
  };

  const reorderBookshelfBooks = () => {
    const booksDiv = document.getElementById("bookshelf-sortable");
    const newBookIdOrder = [...booksDiv.children].map(
      (book) => book.attributes.bookid.value
    );

    const sortedBooks = bookshelfBooks.slice().sort(function (a, b) {
      return newBookIdOrder.indexOf(a.id) - newBookIdOrder.indexOf(b.id);
    });

    setBookshelfBooks(sortedBooks);

    localStorage.setItem("bookshelfBooks", JSON.stringify(sortedBooks)); // update local storage
  };;

  return (
    <Fragment>
      <Sidebar width={300} height={"100vh"}>
        <h3>Rearrange Books</h3>
        <h3>Filter Books</h3>
        <h3>Where Are My Books?</h3>
      </Sidebar>
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
        <Bookshelf
          books={bookshelfBooks}
          onRemoveBook={removeBookHandler}
          onBookReorder={reorderBookshelfBooks}
        />
      </div>
    </Fragment>
  );
}

export default App;
