import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playGameAction } from "./redux/xucXacSlice";

export default function KetQua() {
  let dispatch = useDispatch();
  let { ketQua } = useSelector((state) => {
    return state.xucXacSlice;
  });
  let handlePlayGame = () => {
    let action = playGameAction();
    dispatch(action);
  };
  return (
    <div className="pt-5">
      <button onClick={handlePlayGame} className="btn btn-warning px-5 py-2">
        Play Game
      </button>
      <h1 className=" display-1 pt-5 text-center">{ketQua}</h1>
    </div>
  );
}

// luật chơi game tài xỉu
