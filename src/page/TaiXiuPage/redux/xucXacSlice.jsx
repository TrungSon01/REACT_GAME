import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mangXuxXac: [1, 1, 3],
  luaChon: null,
  ketQua: null,
};

export const TAI = "tài";
export const XIU = "xỉu";

// xỉu < 11
// tài >= 11

const xucXacSlice = createSlice({
  name: "xucXacSlice",
  initialState,
  reducers: {
    playGameAction: (state, action) => {
      // console.log(" action:", action.payload);
      let tongDiem = 0;
      let newMangXucXac = [];
      // tạo mảng xúc xắc mới

      for (let i = 0; i < 3; i++) {
        let max = 6;
        let min = 1;
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        newMangXucXac.push(random);
        tongDiem += random;
      }

      let luaChonNguoiChoi = state.luaChon;
      let ketQua = tongDiem >= 11 ? TAI : XIU;
      if (luaChonNguoiChoi === ketQua) {
        // trường hợp thắng
        state.ketQua = <p className="text-success">Bạn đã thắng</p>;
      } else {
        // trường hợp thua
        state.ketQua = <p className="text-danger">Bạn đã thua</p>;
      }
      state.mangXuxXac = newMangXucXac;

      // xử lý kết quả
    },
    luaChonAction: (state, action) => {
      console.log(" action:", action);

      // action.payload = "tài" hoặc "xỉu" gửi từ component lên
      state.luaChon = action.payload;
    },
  },
});

export const { playGameAction, luaChonAction } = xucXacSlice.actions;

export default xucXacSlice.reducer;

// Math.floor(Math.random() * (max - min + 1) + min);
