import React from "react";
import classes from "./Sidebar.module.css";

const Sidebar = ({ width, height, children }) => {
  const [xPosition, setXPosition] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setXPosition(0);
    } else {
      setXPosition(-width);
    }
  };

  return (
    <React.Fragment>
      <div
        className={classes["side-bar"]}
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <button
          onClick={toggleMenu}
          className={classes["toggle-menu"]}
          style={{
            transform: `translate(${width}px, 20vh)`,
          }}
        ></button>
        <div className="content">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
