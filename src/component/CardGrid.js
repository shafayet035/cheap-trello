import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Card from "./Card";
import CardForm from "./CardForm";

const CardGrid = ({ id, index, tempData, el }) => {
  const [element, setElement] = useState(null);

  const actionHandler = (docId, data, direction, i) => {
    const arr = [...tempData];
    if (direction === "right") {
      const fromid = tempData[index].id;
      const toId = tempData[index + 1].id;

      db.collection("columns")
        .doc(fromid)
        .collection("cards")
        .doc(docId)
        .delete();

      db.collection("columns").doc(toId).collection("cards").add(data);
    }
    if (direction === "left") {
      const fromid = tempData[index].id;
      const toId = tempData[index - 1].id;
      console.log(toId);

      db.collection("columns")
        .doc(fromid)
        .collection("cards")
        .doc(docId)
        .delete();

      db.collection("columns").doc(toId).collection("cards").add(data);
    }
  };

  useEffect(() => {
    db.collection("columns")
      .doc(id)
      .collection("cards")
      .onSnapshot((snap) => {
        const arr = [];
        snap.docs.map((el) => arr.push({ id: el.id, data: el.data() }));
        setElement(arr);
      });
  }, []);

  const addCardHandler = (title, desc) => {
    db.collection("columns")
      .doc(id)
      .collection("cards")
      .add({ name: title, desc: desc });
  };

  return (
    <div>
      {element &&
        element.map((doc, i) => (
          <Card
            key={doc.id}
            element={doc.data}
            id={doc.id}
            i={i}
            tempData={tempData}
            index={index}
            actionHandler={(index, i, direction) =>
              actionHandler(index, i, direction)
            }
            el={element}
          />
        ))}
      <CardForm
        addColumn={(title, description) => addCardHandler(title, description)}
      />
    </div>
  );
};

export default CardGrid;
