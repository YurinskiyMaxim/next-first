import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Мой сайт",
  description: "Описание моего сайта",
};

//export const myFont = localFont({
//src: "./my-font.woff2",
//});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru" //className={myFont.className}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
