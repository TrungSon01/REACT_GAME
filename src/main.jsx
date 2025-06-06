import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import numberSlice from "./page/LearnReduxPage/redux/numberSlice";
import userSlice from "./page/LoginPage/redux/userSlice";

import shoeSlice from "./page/ExShoe/redux/shoeSlice";
import xucXacSlice from "./page/TaiXiuPage/redux/xucXacSlice";
import xucXacEOSlice from "./page/Even_Odd_Page/redux/xucXacEOSlice.jsx";
let store = configureStore({
  reducer: {
    numberSlice: numberSlice,
    // movieSlice: numberSlice,
    userSlice: userSlice,
    shoeSlice: shoeSlice,
    xucXacSlice: xucXacSlice,
    xucXacEOSlice: xucXacEOSlice,
  },
});
createRoot(document.getElementById("root")).render(
  // tạo store chứa các slice
  <Provider store={store}>
    <App />
  </Provider>
);
