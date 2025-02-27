import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import "./globals.css";

const fotoSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Halal holiday check",
  description: "Site for halal tour operator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fotoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
