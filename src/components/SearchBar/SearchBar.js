import { useState } from "react";

const SearchBar = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const searchInputChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSubmitSearch(enteredText);
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="search-bar">Search books, authors, whatever</label>
      <input
        id="search-bar"
        type="text"
        onChange={searchInputChangeHandler}
        value={enteredText}
      />
    </form>
  );
};

export default SearchBar;
