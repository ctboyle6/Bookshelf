import { useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const searchInputChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSubmitSearch(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="search-bar">Search books, authors, whatever</label>
      <div>
        <input
          id="search-bar"
          type="text"
          onChange={searchInputChangeHandler}
          value={enteredText}
        />
        <button type="submit">Enter</button>
      </div>
    </form>
  );
};

export default SearchBar;
