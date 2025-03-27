import React from "react";

import imgGame from "./img/bgGame.png";
import XucXac from "./XucXac";
import KetQua from "./KetQua";

export default function TaiXiuPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${imgGame})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <XucXac />
      <KetQua />
    </div>
  );
}
