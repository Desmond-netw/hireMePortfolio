import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100","300","400","500","700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${roboto.className} flex flex-row gap-2 antialiased`}
      >
        {/* default setup */}
        {/* ------- left-side-mini-menu--- */}
        <div className="w-13 bg-slate-600 h-[100vh] fixed px-1 py-20">
          
        </div>

        {/* ---MAIN BODY--------- */}
        <div className="px-1">
           {children}
        </div>
      </body>
    </html>
  );
}
