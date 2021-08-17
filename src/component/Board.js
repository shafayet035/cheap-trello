import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import CardGrid from "./CardGrid";

const Board = () => {
  const [tempData, settempData] = useState(null);
  const [columnName, setColumnName] = useState("");
  const [updateState, setUpdateState] = useState(false);

  useEffect(() => {
    getData();
  }, [updateState]);

  const getData = () => {
    settempData([]);
    db.collection("columns").onSnapshot((snapshot) => {
      const arr = [];
      snapshot.docs.map((doc) => {
        return arr.push({
          id: doc.id,
          colName: doc.data().colName,
        });
      });
      settempData(arr);
    });
  };

  const removeCol = async (id) => {
    await db.collection("columns").doc(id).delete();
    setUpdateState(!updateState);
  };

  const addColumn = async (e) => {
    e.preventDefault();
    await db.collection("columns").add({ colName: columnName });
    setColumnName("");
    setUpdateState(!updateState);
  };

  return (
    <div className="kanban__board">
      <h1>Kanban board</h1>
      <div className="board__grid">
        {tempData &&
          tempData.map((el, index) => (
            <div key={index} className="board__column">
              <div className="col__head">
                <h5>{el.colName}</h5>
                <button
                  onClick={() => removeCol(el.id)}
                  className="btn btn__remove"
                >
                  Remove Column
                </button>
              </div>
              <CardGrid id={el.id} index={index} tempData={tempData} el={el} />
            </div>
          ))}
        <div className="board__column col__add">
          <form onSubmit={(e) => addColumn(e)}>
            <input
              type="text"
              className="form__control"
              placeholder="Type Column Name"
              onChange={(e) => setColumnName(e.target.value)}
              value={columnName}
            />
            <button type="submit" className="btn btn__submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Board;
