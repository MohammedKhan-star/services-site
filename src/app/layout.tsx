import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://stackratechnologies.com"),

  title: {
    default:
      "STACKRA TECHNOLOGIES | Top Software Development & AI Company in India",
    template: "%s | STACKRA TECHNOLOGIES",
  },

  description:
    "STACKRA TECHNOLOGIES is a modern software and AI solutions company helping startups and businesses build scalable, high-performance websites, SaaS platforms, AI applications, and custom software solutions.",

  keywords: [
    "STACKRA TECHNOLOGIES",
    "Software Development Company",
    "Web Development Company",
    "AI Solutions Company",
    "Custom Software Development",
    "Full Stack Development",
    "Next.js",
    "React.js",
    "Node.js",
    "MERN Stack",
    "AI Development",
    "SaaS Development",
    "India Software Company",
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
    title: "STACKRA TECHNOLOGIES | Software & AI Development Company",
    description:
      "We build scalable websites, SaaS platforms, AI applications, and custom software solutions.",
    url: "https://stackratechnologies.com",
    siteName: "STACKRA TECHNOLOGIES",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://stackratechnologies.com/logo/logo5.png",
        width: 1200,
        height: 630,
        alt: "STACKRA TECHNOLOGIES",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "STACKRA TECHNOLOGIES",
    description: "Software & AI Development Company in India",
    images: ["https://stackratechnologies.com/logo/logo5.png"],
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
        {/* 🔥 Organization Schema (SEO POWER BOOST) */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "STACKRA TECHNOLOGIES",
              url: "https://stackratechnologies.com",
              logo: "https://stackratechnologies.com/logo/logo5.png",
              founder: {
                "@type": "Person",
                name: "Mohammed Khan",
              },
              sameAs: [
                "https://www.instagram.com/stackra_technologies",
                "https://www.linkedin.com/company/stackra-technologies",
                "https://github.com/MohammedKhan-star",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />

        <Navbar />

        <main className="min-h-screen pt-4">{children}</main>
      </body>
    </html>
  );
}