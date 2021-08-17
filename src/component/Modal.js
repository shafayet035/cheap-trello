import React from "react";

const Modal = ({ title, description, closeModal }) => {
  return (
    <div className="card__modal">
      <div className="card__modal__body">
        <div className="card__modal__head">
          <h2>{title}</h2>
          <i
            onClick={() => closeModal(false)}
            className="fas fa-times-circle"
          ></i>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Modal;
