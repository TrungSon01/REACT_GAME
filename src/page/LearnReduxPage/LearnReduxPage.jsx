import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { downNumberAction, upNumberAction } from "./redux/numberSlice";

export default function LearnReduxPage() {
  // dùng useSelector để lấy state từ redux
  // dùng useDispatch để gửi action lên redux

  let { number } = useSelector((state) => {
    return state.numberSlice;
  });
  /**
   let state = useSelector((state) => {
    return state.numberSlice;
  }
  let number = state.number;
   */
  console.log("numberState:", number);

  // đẩy action lên redux
  let dispatch = useDispatch();
  let handleUpNumber = () => {
    dispatch(upNumberAction(1));
  };

  return (
    <div className="container">
      <h2>LearnReduxPage</h2>
      <h3>Number: {number}</h3>
      <button className="btn btn-danger" onClick={handleUpNumber}>
        Up
      </button>

      <button
        className="btn btn-success"
        onClick={() => {
          dispatch(downNumberAction(10));
        }}
      >
        Down
      </button>
    </div>
  );
}
