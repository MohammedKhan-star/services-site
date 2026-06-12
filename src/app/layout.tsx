import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://stackratechnologies.com"),

  title: {
    default:
      "STACKRA TECHNOLOGIES | Software, Web Development & AI Solutions",
    template: "%s | STACKRA TECHNOLOGIES",
  },

  description:
    "STACKRA TECHNOLOGIES is a modern software and AI solutions company helping startups and businesses build scalable, high-performance websites, SaaS platforms, AI applications, and custom software solutions.",

  keywords: [
    "STACKRA TECHNOLOGIES",
    "Stackra Technologies",
    "stackra technologies",
    "Mohammed Khan",
    "Mohammed Khan Software Engineer",
    "Mohammed Khan Full Stack Developer",

    "Software Development Company",
    "Web Development Company",
    "AI Solutions Company",
    "Custom Software Development",
    "Full Stack Development",
    "Website Design and Development",
    "Enterprise Software Solutions",
    "SaaS Development",
    "Cloud Application Development",
    "API Development",
    "Business Website Development",

    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MERN Stack",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",

    "AI Development",
    "AI Powered Applications",
    "AI Automation",
    "Chatbot Development",
    "Generative AI",
    "Machine Learning Solutions",

    "Hire Full Stack Developer",
    "Hire MERN Stack Developer",
    "Hire Next.js Developer",
    "Hire React Developer",
    "Professional Website Development",
    "Custom Web Application Development",
    "Startup Technology Partner",

    "Software Company India",
    "Web Development Company India",
    "AI Company India",
    "IT Services Company",
  ],

  authors: [
    {
      name: "Mohammed Khan",
      url: "https://stackratechnologies.com",
    },
  ],

  creator: "Mohammed Khan",
  publisher: "STACKRA TECHNOLOGIES",
  applicationName: "STACKRA TECHNOLOGIES",
  category: "Technology",

  alternates: {
    canonical: "https://stackratechnologies.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "STACKRA TECHNOLOGIES | Software, Web Development & AI Solutions",
    description:
      "Building scalable websites, AI applications, SaaS products, and custom software solutions.",
    url: "https://stackratechnologies.com",
    siteName: "STACKRA TECHNOLOGIES",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "STACKRA TECHNOLOGIES",
    description:
      "Software, Web Development & AI Solutions Company",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4f46e5",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-slate-50 text-slate-900 antialiased"
      >
        <Navbar />
        <main className="min-h-screen pt-4">
          {children}
        </main>
      </body>
    </html>
  );
}