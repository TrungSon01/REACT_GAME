import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartAction } from "./redux/shoeSlice";

export default function CartShoe() {
  // let { cart } = props;
  let { cart } = useSelector((state) => state.shoeSlice);
  let dispatch = useDispatch();
  let renderCart = () => {
    return cart.map((shoe, index) => {
      return (
        <tr key={index}>
          <td>{shoe.name}</td>
          <td>{shoe.name}</td>
          <td>
            <img className="w-20" src={shoe.image} alt="" />
          </td>
          <td>{shoe.total}</td>
          <td>
            <button
              onClick={() => {
                // props.handleDelete(shoe.id);
                dispatch(deleteCartAction(shoe.id));
              }}
              className="bg-red-500 text-white p-1"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="flex-grow p-5  border-2 border-black ml-5">
      <table className="w-full text-xl">
        <thead className="bg-gray-400">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderCart()}</tbody>
      </table>
      {cart.length == 0 && (
        <p className="text-red-500 text-sm">No item in cart</p>
      )}
    </div>
  );
}
