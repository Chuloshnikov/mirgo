import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import LayoutProvider from "@/components/LayoutProvider";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mirago | Home",
  description: "GShop Smarter, Live Better - Your One-Stop E-Commerce Destination!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutProvider>
          <Header/>
          {children}
          <Sidebar/>
          <Footer/>
          <Toaster position="bottom-right" toastOptions={{
            style: {
              background: "#000000",
              color: "#ffffff"
            }
          }}/>
        </LayoutProvider>
      </body>
    </html>
  );
}
