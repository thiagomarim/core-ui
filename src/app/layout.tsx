import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Clean UI",
  description: "The best UI components for your aplication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={GeistSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
