import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/modules/Navbar";
import ClyraFooter from "./components/modules/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clyra – Build Smarter, Work Easier",
  description: "I build product for decreasing the time limit of manual work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <ClyraFooter />
      </body>
    </html>
  );
}
