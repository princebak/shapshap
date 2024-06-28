"use client";

import { createContext, useMemo, useReducer } from "react";
// =================================================================================

// =================================================================================
const INITIAL_STATE = {
  user: null,
};
// ==============================================================

// ==============================================================
export const UserContext = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      let currentUser = action.payload;
      return { ...state, user: currentUser };

    case "LOGOUT":
      return { ...state, user: null };

    default: {
      return state;
    }
  }
};

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
