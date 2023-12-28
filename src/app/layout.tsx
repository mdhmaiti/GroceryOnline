import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "../components/AuthQueryProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

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
      <body className={` ${inter.className}`}>
        <div className=" min-w-full h-72 -z-50 absolute inset-0 bg-gradient-to-b from-cyan-500 to-transparent opacity-50 blur-2xl"/ >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <AuthProvider> 
            <div className="flex flex-col min-h-screen relative">
              <Navbar />

              <div className="flex-1"> {children}
               </div>
              
               <Toaster />
              
              <Footer />
              <div className="min-w-full h-72 -z-50 absolute bottom-10 bg-gradient-to-b to-cyan-500 from-transparent opacity-50 blur-2xl" />
            </div>
            </AuthProvider>  
        </ThemeProvider>
      </body>
    </html>
  );
}
