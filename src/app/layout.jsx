import { Open_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
export const openSans = Open_Sans({
  subsets: ["latin"],
});

import RTL from "components/rtl";
import ProgressBar from "components/progress";
// IMPORT i18n SUPPORT FILE

import "i18n";
import Providers from "components/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
        <Providers>
          <ProgressBar />
          <RTL>{children}</RTL>
        </Providers>
        <GoogleAnalytics gaId="G-XKPD36JXY0" />
      </body>
    </html>
  );
}
