import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavBar from "@/components/MainNavBar";
import { signout } from "./signin/actions";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TSport",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavBar signout={signout} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
