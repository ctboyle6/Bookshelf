import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <Button onClick={props.onCloseModal}>Close</Button>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onCloseModal={props.onCloseModal}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
