import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ActionPlayEO } from "./redux/xucXacEOSlice";

export default function ketQuaEO() {
  let dispatch = useDispatch();
  let { ketQuaEO } = useSelector((state) => {
    return state.xucXacEOSlice;
  });
  let handlePlayGameEO = () => {
    let action = ActionPlayEO();
    dispatch(action);
  };
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <button onClick={handlePlayGameEO} className="btn btn-warning px-5 py-2 ">
        Play Game
      </button>
      <h1 className=" display-1 pt-5 text-center">{ketQuaEO}</h1>
    </div>
  );
}
