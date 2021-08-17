import React, { useState } from "react";

const CardForm = ({ addColumn }) => {
  const [cardName, setCardName] = useState("");
  const [cardDesc, setCardDesc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addColumn(cardName, cardDesc);
    setCardDesc("");
    setCardName("");
  };

  return (
    <div className="add__card__form__parent">
      <form className="add__card__form" onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="Type Card Title"
          onChange={(e) => setCardName(e.target.value)}
          value={cardName}
        />
        <textarea
          onChange={(e) => setCardDesc(e.target.value)}
          placeholder="Type Description"
          value={cardDesc}
          rows="2"
        ></textarea>
        <button className="btn btn__submit">Submit</button>
      </form>
    </div>
  );
};

export default CardForm;
