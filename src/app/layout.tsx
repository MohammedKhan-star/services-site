import "./globals.css";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Works Studio | Web Development & SaaS Solutions",
  description:
    "ProjectWorks Studio is a founder-led web development studio by Mohammed Khan building modern websites, web applications, and SaaS platforms for businesses.",
  keywords: [
    "ProjectWorksStudio",
    "Web Development",
    "Next.js Developer",
    "MERN Stack Developer",
    "SaaS Development",
    "Mohammed Khan Developer",
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
