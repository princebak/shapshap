"use client";

import { SessionProvider } from "next-auth/react";
import ThemeProvider from "theme/theme-provider";
// PRODUCT CART PROVIDER

import CartProvider from "contexts/CartContext";
// SITE SETTINGS PROVIDER

import SettingsProvider from "contexts/SettingContext";
// GLOBAL CUSTOM COMPONENTS
import React from "react";

const Providers = ({ children }) => {
  return (
    <CartProvider>
      <SettingsProvider>
        <ThemeProvider>
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </SettingsProvider>
    </CartProvider>
  );
};

export default Providers;
