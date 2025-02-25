import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./components/provider";
import Footer from "./components/Footer";
import Header from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>  <Provider>
          <Header /> {/* Header placed inside the body */}
          <main>{children}</main> {/* Main content wrapped in semantic <main> */}
          <Footer /> {/* Footer also placed inside the body */}
        </Provider></body>
    </html>
  );
}
