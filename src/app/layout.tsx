import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import DefaultHeader from "@/components/default-header";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "takino.",
  description: "useful tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <DefaultHeader />
          {children}
          <footer className="flex justify-center text-center text-xs py-10">
            <span>by <a href="https://github.com/crashunix" target="_blank" className="text-primary underline">crashunix</a></span>
          </footer>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
