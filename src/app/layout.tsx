import "./globals.css";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevCore Agency | Web Development & SaaS Solutions",
  description:
    "DevCore Agency is a leading web development company specializing in Next.js and MERN stack solutions. We create high-performance websites and SaaS applications tailored to your business needs.", 
  keywords: [
    "DevCore Agency",
    "Web Development",
    "Next.js Developer",
    "MERN Stack Developer",
    "SaaS Development",
    "Mohammed Khan Software Developer",
  ],
  authors: [{ name: "Mohammed Khan" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Navbar />

        <main className="min-h-screen pt-4">
          {children}
        </main>
      </body>
    </html>
  );
}
