import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const buttonClasses = `${classes.button} ${
    props.className ? props.className : ""
  }`;

  return (
    <button
      className={buttonClasses}
      disabled={props.disabled}
      type={props.type}
      onClick={props.onClick}
      style={{
        backgroundColor: props.color || "",
        borderColor: props.color || "",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
