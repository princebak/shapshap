import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    currentEvent: null,
    justRegisteredUser: null,
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
    updateJustRegisteredUser: (state, action) => {
      state.justRegisteredUser = action.payload;
    },
  },
});

export const {
  loginSuccess,
  logout,
  changeCurrentEvent,
  updateJustRegisteredUser,
} = userSlice.actions;
export default userSlice.reducer;
