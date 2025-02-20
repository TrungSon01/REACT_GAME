import React from "react";
// import { listShoe } from "./dataShoe";
import ItemShoe from "./ItemShoe";
import { useSelector } from "react-redux";
export default function ListShoe(props) {
  let { listShoe } = useSelector((state) => {
    return state.shoeSlice;
  });
  let renderListShoe = () => {
    return listShoe.map((shoe, index) => {
      return <ItemShoe key={index} dataShoe={shoe} />;
    });
  };
  return <div className="grid grid-cols-4 gap-5">{renderListShoe()}</div>;
}
