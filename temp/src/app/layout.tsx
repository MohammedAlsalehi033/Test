import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Landing/header";
import Footer from "@/components/Landing/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devsinc Hackathon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
