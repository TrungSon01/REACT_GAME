import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { luaChonAction, TAI, XIU } from "./redux/xucXacSlice";

export default function XucXac() {
  let { mangXuxXac, luaChon } = useSelector((state) => {
    return state.xucXacSlice;
  });
  console.log("luaChon:", luaChon);
  let dispatch = useDispatch();
  let renderMangXucXac = () => {
    return mangXuxXac.map((xucXac, index) => {
      return (
        <img
          key={index}
          src={`./public/XucXac/${xucXac}.png`}
          alt=""
          style={{ width: 100, margin: "0 20px" }}
        />
      );
    });
  };
  let handleLuaChon = (luaChon) => {
    console.log("luaChon:", luaChon);
    let action = luaChonAction(luaChon);
    dispatch(action);
  };
  return (
    <div className=" d-flex justify-content-center">
      <button
        className="btn btn-danger p-5"
        onClick={() => {
          handleLuaChon(TAI);
        }}
        style={{
          transitionDuration: "3s",
          transform: luaChon === TAI ? "scale(1.5)" : "scale(1)",
        }}
      >
        Tài
      </button>
      <div className="d-flex justify-content-center mx-5 items-center ">
        {renderMangXucXac()}
      </div>
      <button
        onClick={() => {
          handleLuaChon(XIU);
        }}
        className="btn btn-dark p-5"
        style={{
          transitionDuration: "3s",
          transform: luaChon === XIU ? "scale(1.5)" : "scale(1)",
        }}
      >
        Xỉu
      </button>
    </div>
  );
}
