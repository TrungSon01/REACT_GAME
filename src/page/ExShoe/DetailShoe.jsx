import React from "react";
import { useSelector } from "react-redux";

export default function DetailShoe() {
  let { detailShoe } = useSelector((state) => state.shoeSlice);
  return <div>{<img className="w-96" src={detailShoe.image} alt="" />}</div>;
}
