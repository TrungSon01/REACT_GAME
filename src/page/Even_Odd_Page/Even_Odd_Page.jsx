import React from "react";
import XucXacEO from "./xucXacEO";
import KetQuaEO from "./ketQuaEO";

export default function Even_Odd_Page() {
  return (
    <div
      style={{
        background:
          "url('https://gstatic.gvn360.com/2023/07/Bau-troi-dem-huyen-ao_-1-1920x1080.jpg')",
        height: "100vh",
        width: "100vw ",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <XucXacEO />
      <KetQuaEO />
    </div>
  );
}
