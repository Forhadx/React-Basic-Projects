import React, { useState } from "react";

import Modal from "../UI/Modal/Modal";

import "./Message.css";

const Message = () => {
  const [show, setShow] = useState(false);

  const showModalHandler = () => {
    setShow(true);
  };

  const yesButtonHandler = () => {
    setShow(false);
    setTimeout(() => {
      alert("You are in right path !!");
    }, 500);
  };

  const noButtonHandler = () => {
    setShow(false);
  };

  const messageCloseHandler = () => {
    setShow(false);
  };

  return (
    <div>
      <Modal show={show} modalClosed={messageCloseHandler}>
        <div>
          <h1>I LOVE CODING !</h1>
          <button onClick={yesButtonHandler} className="yes">
            Yes
          </button>
          <button onClick={noButtonHandler} className="no">
            No
          </button>
        </div>
      </Modal>
      <h3>If You Want to show a Message then click the button</h3>
      <button onClick={showModalHandler} className="messagebtn">
        Click for Message
      </button>
    </div>
  );
};

export default Message;
