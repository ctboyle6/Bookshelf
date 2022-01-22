import { useState } from 'react';
import './App.css';
import Bookshelf from './components/Bookshelf/Bookshelf';
import SearchBar from './components/SearchBar/SearchBar';

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

function App() {
  const [books, setBooks] = useState([]);

  const searchBooks = async (searchInput) => {
    const searchResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchInput)}`);

    const dataResponse = await searchResponse.json();
    const transformedBooks = dataResponse.items.map(bookData => {
      return {
        id: bookData.id,
        title: bookData.volumeInfo.title,
        authors: bookData.volumeInfo.authors,
        description: bookData.volumeInfo.description,
        pageCount: bookData.volumeInfo.pageCount
      }
    })
    setBooks(transformedBooks)
  };

  const searchSubmitHandler = (enteredText) => {
    searchBooks(enteredText)
  };


  return (
    <div className="App">
      <h1>Bookshelf</h1>
      <hr></hr>
      <SearchBar onSubmitSearch={searchSubmitHandler} />
      <Bookshelf books={books} />
    </div>
  );
}

export default App;
