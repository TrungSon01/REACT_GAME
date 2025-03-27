import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mangXucXacEO: [1, 1],
  luaChon: null,
  ketQuaEO: null,
};

export const Even = "chẵn";
export const Odd = "lẻ";
const xucXacEOSlice = createSlice({
  name: "xucXacEOSlice",
  initialState,
  reducers: {
    ActionPlayEO: (state, action) => {
      let tongDiem = 0;
      let newArrEO = [];
      for (let i = 0; i < 2; i++) {
        let max = 6;
        let min = 1;
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        newArrEO.push(random);
        tongDiem += random;
      }
      let KetQua = tongDiem % 2 === 0 ? Even : Odd;
      let luaChonNguoiChoi = state.luaChon;
      if (luaChonNguoiChoi === KetQua) {
        state.ketQuaEO = (
          <p
            className="text-success font-bold text-2xl uppercase shadow-md p-2 bg-green-100 rounded-lg"
            id="result-message"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            Bạn đã thắng 🎉
          </p>
        );
      } else {
        state.ketQuaEO = (
          <p
            className="text-danger font-bold text-2xl uppercase shadow-md p-2 bg-green-100 rounded-lg"
            id="result-message"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            Bạn đã thua 💔
          </p>
        );
      }

      state.mangXucXacEO = newArrEO;
    },
    ActionLuaChonEO: (state, action) => {
      console.log(" action:", action);
      state.luaChon = action.payload;
    },
  },
});

export const { ActionLuaChonEO, ActionPlayEO } = xucXacEOSlice.actions;

export default xucXacEOSlice.reducer;
