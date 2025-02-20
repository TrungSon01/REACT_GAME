import { createSlice } from "@reduxjs/toolkit";

// initialState => giá trị ban đầu của state trong redux
const initialState = {
  number: 10,
};

const numberSlice = createSlice({
  name: "numberSlice",
  initialState: initialState,
  reducers: {
    // định nghĩa action
    upNumberAction: (state, action) => {
      console.log("action", action.payload);
      state.number = state.number + action.payload;
    },
    downNumberAction: (state, action) => {
      console.log("action", action.payload);
      state.number = state.number - action.payload;
    },
  },
});

// reducer => xử lý data để thay đổi state mới

export const { upNumberAction, downNumberAction } = numberSlice.actions; // dùng để dispatch tại component
// numberSlice.actions trả về action
// action => đưa data từ component lên redux

export default numberSlice.reducer; // dùng để tạo store

// rxslice
