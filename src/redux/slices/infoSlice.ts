import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registrationSucceeded: false,
  message: "",
  event: {},
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    toggleRegistrationSucceeded: (state) => {
      state.registrationSucceeded = !state.registrationSucceeded;
    },
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
    updateCurrentEvent: (state, action) => {
      state.event = action.payload;
    },
  },
});

export const {
  toggleRegistrationSucceeded,
  updateMessage,
  updateCurrentEvent,
} = infoSlice.actions;
export default infoSlice.reducer;
