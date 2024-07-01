"use client";

import { SessionProvider } from "next-auth/react";
import ThemeProvider from "theme/theme-provider";
// PRODUCT CART PROVIDER

import CartProvider from "contexts/CartContext";
// SITE SETTINGS PROVIDER

import SettingsProvider from "contexts/SettingContext";
// GLOBAL CUSTOM COMPONENTS
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CartProvider>
          <SettingsProvider>
            <ThemeProvider>
              <SessionProvider>{children}</SessionProvider>
            </ThemeProvider>
          </SettingsProvider>
        </CartProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
