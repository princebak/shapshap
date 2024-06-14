import { Open_Sans } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
export const openSans = Open_Sans({
  subsets: ["latin"]
}); 
// THEME PROVIDER

import ThemeProvider from "theme/theme-provider"; 
// PRODUCT CART PROVIDER

import CartProvider from "contexts/CartContext"; 
// SITE SETTINGS PROVIDER

import SettingsProvider from "contexts/SettingContext"; 
// GLOBAL CUSTOM COMPONENTS

import RTL from "components/rtl";
import ProgressBar from "components/progress"; 
// IMPORT i18n SUPPORT FILE

import "i18n";

export default function RootLayout({
  children
}) {
  
  return <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
        <CartProvider>
          <SettingsProvider>
            <ThemeProvider>
              <ProgressBar />
              <RTL>{children}</RTL>
            </ThemeProvider>
          </SettingsProvider>
        </CartProvider>
        <GoogleAnalytics gaId="G-XKPD36JXY0" />
      </body>
    </html>;
}