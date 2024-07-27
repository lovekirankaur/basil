import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "basil",
  description: "lovekiran's assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-50">
      <div className="flex flex-row">
      <Sidebar/>
        <div className="flex flex-col w-screen">
        <Header/>
        {children}
        </div>
        </div>
        </body>
    </html>
  );
}
