import type { Metadata } from "next";
import { Inter,  } from "next/font/google";
import "./globals.css";
import React from "react";

const inter  = Inter({
  weight:['100','200','300','400','600','700'],
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Dehvice Portfolio",
  description: "Hire me portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
