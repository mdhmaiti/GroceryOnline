import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "../components/AuthProvider";
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
      <body className={`bg-gradient-to-b from-transparent to-teal-600  ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <AuthProvider> 
            <div className="flex flex-col min-h-screen ">
              <Navbar />

              <div className="flex-1"> {children}
              <Toaster /> </div>
              
             
              <Footer />
            </div>
            </AuthProvider>  
        </ThemeProvider>
      </body>
    </html>
  );
}
