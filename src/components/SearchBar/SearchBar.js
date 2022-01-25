import { useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredTextTouched, setEnteredTextTouched] = useState(false);

  const enteredTextValid = enteredText.trim() !== "";
  const textHasErrors = !enteredTextValid && enteredTextTouched;

  const searchChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const searchBlurHandler = () => {
    setEnteredTextTouched(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSubmitSearch(enteredText); //submit

    setEnteredText(""); // reset
    setEnteredTextTouched(false)
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="search-bar">Search books, authors, whatever</label>
      <div>
        <input
          id="search-bar"
          type="text"
          onChange={searchChangeHandler}
          onBlur={searchBlurHandler}
          value={enteredText}
        />
        <button disabled={!enteredTextValid} type="submit">Enter</button>
        {textHasErrors && <p className={classes["error-text"]}>Search term cannot be empty, cmon!</p>}
      </div>
    </form>
  );
};

export default SearchBar;
