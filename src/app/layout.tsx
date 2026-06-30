import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://stackratechnologies.com"),

  title: {
    default: "STACKRA TECHNOLOGIES | Top Software Development & AI Company in India",
    template: "%s | STACKRA TECHNOLOGIES",
  },

  description:
    "STACKRA TECHNOLOGIES is a premium software development & AI company in India. We build high-performance websites, SaaS platforms, AI solutions, and custom enterprise software.",

  keywords: [
    "STACKRA TECHNOLOGIES",
    "Software Development Company in India",
    "AI Development Company in India",
    "stackra technologies",
    "stackra technologies.com",
    "stackratechnologies.com",
    "Software Development Company",
    "Software Development Company",
    "AI Development Company",
    "Web Development Company in India",
    "Next.js Development",
    "React.js Development",
    "MERN Stack Development",
    "SaaS Development",
    "Custom Software Development",
    "Artificial Intelligence Solutions",
    "Mobile App Development",
    "Full Stack Development",
    "Top Software Company India",
  ],

  authors: [{ name: "Mohammed Khan", url: "https://stackratechnologies.com" }],
  creator: "Mohammed Khan",
  publisher: "STACKRA TECHNOLOGIES",

  category: "technology",
  applicationName: "STACKRA TECHNOLOGIES",

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

  // Enhanced Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stackratechnologies.com",
    title: "STACKRA TECHNOLOGIES | Software & AI Development Company",
    description:
      "Premium software development & AI solutions company in India. Building scalable digital products for startups and enterprises.",
    siteName: "STACKRA TECHNOLOGIES",
    images: [
      {
        url: "https://stackratechnologies.com/logo/logo6.png",
        width: 1200,
        height: 630,
        alt: "STACKRA TECHNOLOGIES - Software & AI Company",
        type: "image/png",
      },
    ],
  },

  // Enhanced Twitter
  twitter: {
    card: "summary_large_image",
    title: "STACKRA TECHNOLOGIES",
    description: "Top Software & AI Development Company in India",
    images: ["https://stackratechnologies.com/logo/logo6.png"],
    creator: "@stackra_technologies",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4f46e5" },
    { media: "(prefers-color-scheme: dark)", color: "#6366f1" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-slate-50 text-slate-900 antialiased"
      >
        {/* Organization + WebSite Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "STACKRA TECHNOLOGIES",
                  url: "https://stackratechnologies.com",
                  logo: "https://stackratechnologies.com/logo/logo6.png",
                  founder: {
                    "@type": "Person",
                    name: "Mohammed Khan",
                  },
                  sameAs: [
                    "https://www.instagram.com/stackra_technologies",
                    "https://www.linkedin.com/company/stackra-technologies",
                    "https://github.com/MohammedKhan-star",
                    "https://www.facebook.com/stackratechnologies",
                    "https://twitter.com/stackra_technologies",
                    "https://www.youtube.com/@stackratechnologies",
                    "https://www.tiktok.com/@stackratechnologies",
                    "https://www.pinterest.com/stackratechnologies/",
                    "https://www.tumblr.com/stackratechnologies",
                    "https://www.snapchat.com/add/stackratechnologies",
                    "https://www.mohammedkhan.dev/"
                
                  ],
                  contactPoints: [
                    {
                      "@type": "ContactPoint",
                      contactType: "customer support",
                      availableLanguage: ["en", "hi"],
                      email: "stackratechnologies@gmail.com", // Add real email
                    },
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer support",
                    availableLanguage: ["en", "hi"],
                    email: "stackratechnologies@gmail.com", // Add real email
                  },
                  areaServed: "IN",
                  serviceType: "Software Development, AI Solutions, Web Development",
                },
                {
                  "@type": "WebSite",
                  name: "Stackra Technologies",
                  url: "https://stackratechnologies.com",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://stackratechnologies.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />

        <Navbar />
        <main className="min-h-screen pt-4">{children}</main>
      </body>
    </html>
  );
}