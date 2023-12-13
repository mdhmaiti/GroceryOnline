import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "../components/AuthProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "grocery online",
  description: " shop for healthy foods online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex flex-col justify-between  w-full h-screen py-2 ">
            <div className=" ">
              <Navbar />
            </div>
            
            <div className="flex-grow">
              {children}
            </div>
           
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
