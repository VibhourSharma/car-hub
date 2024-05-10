import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "../components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
