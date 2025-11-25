import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adnan Hlwnji - Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my portfolio of projects including e-commerce platforms, web applications, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
