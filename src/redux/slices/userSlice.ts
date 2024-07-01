import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    currentEvent: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    changeCurrentEvent: (state, action) => {
      state.currentEvent = action.payload;
    },
  },
});

export const {
  loginSuccess,
  logout,
  changeCurrentEvent,
} = userSlice.actions;
export default userSlice.reducer;
