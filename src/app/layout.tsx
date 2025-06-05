import { clsx } from "clsx";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { memo, ReactNode } from "react";

const notoSans = Noto_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const APP_NAME = "appName";
const TITLE = "title";
const DESCRIPTION = "description";

export const metadata: Metadata = {
  metadataBase: new URL("https://placeholder.example.com"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html className={notoSans.variable} lang="en-US">
      <body
        className={clsx(
          "min-h-screen px-[1.09375rem] py-50",
          "bg-linear-148 from-[#F9FAFB] from-[8.89%] to-[#D2D6DB] to-[100.48%]",
          "font-sans text-base font-normal not-italic",
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default memo(RootLayout);
