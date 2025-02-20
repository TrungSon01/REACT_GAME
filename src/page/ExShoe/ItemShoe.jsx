import React from "react";
import { useDispatch } from "react-redux";
import { addToCartAction, changeDetailAction } from "./redux/shoeSlice";

export default function ItemShoe({ dataShoe }) {
  let dispatch = useDispatch();
  let handleAdd = (shoe) => {
    let action = addToCartAction(shoe);
    dispatch(action);
  };
  let handleChangeShoe = (shoe) => {
    let action = changeDetailAction(shoe);
    dispatch(action);
  };
  return (
    <div className="p-3 border-2 border-black rounded">
      <img src={dataShoe.image} className="w-2/3 mx-auto" alt="" />
      <h2 className="text-xl font-bold">{dataShoe.name}</h2>
      <h3 className="font-bold">
        {dataShoe.price} $
        <button
          onClick={() => {
            handleChangeShoe(dataShoe);
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded block"
        >
          View detail
        </button>
        <button
          onClick={() => {
            handleAdd(dataShoe);
          }}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded block"
        >
          Add to cart
        </button>
      </h3>
    </div>
  );
}
