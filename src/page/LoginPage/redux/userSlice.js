// rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserAction: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUserAction } = userSlice.actions;

export default userSlice.reducer;
