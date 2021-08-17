import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ element, i, tempData, index, actionHandler, el, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {tempData && (
        <div key={i} className="column__card">
          <div
            className="column__card__content"
            onClick={() => setIsModalOpen(true)}
          >
            <h3 className="column__card__title">{element?.name}</h3>
          </div>

          <div className="direction__btn__group">
            {index > 0 && index <= tempData?.length - 1 ? (
              <i
                className="fas fa-arrow-circle-left arrow__left"
                onClick={() => actionHandler(id, element, "left")}
              ></i>
            ) : (
              ""
            )}
            {index >= 0 && index < tempData?.length - 1 ? (
              <i
                className="fas fa-arrow-circle-right arrow__right"
                onClick={() => actionHandler(id, element, "right")}
              ></i>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
      {isModalOpen && (
        <Modal
          title={element.name}
          description={element.desc}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Card;
