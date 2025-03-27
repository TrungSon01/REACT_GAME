import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ActionLuaChonEO, Even, Odd } from "./redux/xucXacEOSlice";
export default function xucXacEO() {
  let { mangXucXacEO, luaChon } = useSelector((state) => {
    return state.xucXacEOSlice;
  });
  console.log("luaChon:", luaChon);
  let dispatch = useDispatch();
  console.log("mangXucXacEO:", mangXucXacEO);
  let renderMangXucXacEO = () => {
    return mangXucXacEO.map((xucXac, index) => {
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

  let handleLuaChonEO = (luaChon) => {
    console.log("luaChon:", luaChon);
    let action = ActionLuaChonEO(luaChon);
    dispatch(action);
  };
  return (
    <div className=" d-flex justify-content-center">
      <button
        className="btn btn-danger p-5"
        onClick={() => {
          handleLuaChonEO(Odd);
        }}
        style={{
          transitionDuration: "3s",
          transform: luaChon === Odd ? "scale(1.5)" : "scale(1)",
        }}
      >
        Odd
      </button>
      <div className="d-flex justify-content-center mx-5 items-center ">
        {renderMangXucXacEO()}
      </div>
      <button
        onClick={() => {
          handleLuaChonEO(Even);
        }}
        className="btn btn-dark p-5"
        style={{
          transitionDuration: "3s",
          transform: luaChon === Even ? "scale(1.5)" : "scale(1)",
        }}
      >
        Even
      </button>
    </div>
  );
}
