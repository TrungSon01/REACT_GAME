import React from "react";
import DetailShoe from "./DetailShoe";
import ListShoe from "./ListShoe";
import CartShoe from "./CartShoe";
export default function ExShoe() {
  return (
    <div>
      <DetailShoe />
      <div className="flex">
        <div className="w-1/2">
          <ListShoe />
        </div>
        <CartShoe />
      </div>
    </div>
  );
}
