import { createSlice } from "@reduxjs/toolkit";
import { listShoe } from "../dataShoe";

const initialState = {
  detailShoe: {},
  listShoe: listShoe,
  cart: [],
};

const shoeSlice = createSlice({
  name: "shoeSlice",
  initialState,
  reducers: {
    deleteCartAction: (state, action) => {
      // action.payload ~ id gửi từ component Cart
      let id = action.payload;
      let newCart = state.cart.filter((shoe) => shoe.id !== id);
      // cập state => render lại layout
      state.cart = newCart;
    },
    addToCartAction: (state, action) => {
      // action.payload ~ shoe gửi từ component ItemShoe
      console.log("action.payload:", action.payload);
      let newCart = [...state.cart];
      // kiểm tra xem sản phẩm đã có trong giỏ hàng chưa dựa vào function findIndex
      let shoe = action.payload;
      let index = state.cart.findIndex((item) => {
        return item.id == shoe.id;
      });
      console.log("index:", index);

      if (index == -1) {
        let newShoe = { ...shoe, total: 1 };

        newCart.push(newShoe);
      } else {
        newCart[index].total++;
      }
      // setCart(newCart);
      state.cart = newCart;
    },
    changeDetailAction: (state, action) => {
      // action.payload ~ shoe gửi từ component ItemShoe
      state.detailShoe = action.payload;
    },
  },
});

export const { deleteCartAction, addToCartAction, changeDetailAction } =
  shoeSlice.actions;

export default shoeSlice.reducer;

// rxslice

// useSelector ~ lầy về DetailShoe

// useDispatch ~ đẩy từ itemShoe
