"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="pw-gradient text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold"
          >
            ProjectWorks Web Agency
          </motion.h1>
          <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
            High-conversion websites, SaaS platforms & scalable products for startups, founders & businesses.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="#pricing"
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold shadow-lg"
            >
              View Pricing
            </Link>
            <Link
              href="#contact"
              className="border border-white/40 px-8 py-4 rounded-xl font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="pw-glass p-8 rounded-3xl shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="text-green-400" size={18} /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`pw-glass p-10 rounded-3xl shadow-xl ${plan.popular && "ring-2 ring-indigo-500"}`}
              >
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-4 text-4xl font-bold">{plan.price}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Star className="text-yellow-400" size={18} /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="block mt-8 text-center bg-indigo-600 text-white py-3 rounded-xl font-semibold"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Let’s Build Your Product</h2>
          <form className="mt-12 pw-glass p-10 rounded-3xl grid gap-6">
            <input placeholder="Name" className="px-4 py-3 rounded-xl bg-transparent border" />
            <input placeholder="Email" className="px-4 py-3 rounded-xl bg-transparent border" />
            <textarea placeholder="Project Details" rows={5} className="px-4 py-3 rounded-xl bg-transparent border" />
            <button className="bg-indigo-600 text-white py-4 rounded-xl font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <Link
        href="https://wa.me/919542355897"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-xl"
      >
        WhatsApp
      </Link>
    </main>
  );
}

const services = [
  {
    title: "Business Websites & Landing Pages",
    desc: "High‑conversion, SEO‑optimized business websites designed to generate real leads and sales.",
    points: [
      "Custom UI/UX (Figma → Code)",
      "SEO + Google Indexing",
      "Fast Performance (Core Web Vitals)",
      "WhatsApp & Contact Form Leads",
      "Mobile‑First Responsive Design",
    ],
  },
  {
    title: "E‑Commerce Applications",
    desc: "Scalable MERN & Next.js e‑commerce platforms built for real‑world businesses.",
    points: [
      "Product & Order Management",
      "Cart, Checkout & Payments",
      "Admin Dashboard",
      "Authentication & Security",
      "Deployment + Domain Setup",
    ],
  },
  {
    title: "LMS, SaaS & Full‑Stack Apps",
    desc: "Advanced platforms for startups, creators, and growing companies.",
    points: [
      "Role‑Based Authentication",
      "Dashboards & Analytics",
      "API Integrations",
      "Cloud Deployment",
      "Scalable Architecture",
    ],
  },
];

const pricing = [
  {
    name: "Starter",
    price: "₹19,999",
    features: [
      "1‑Page Business / Portfolio Website",
      "Responsive Design",
      "WhatsApp Lead Button",
      "Basic SEO Setup",
      "Free Domain (1 Year) – ₹1,000 value",
      "Free Hosting Setup",
      "Market Price: ₹30,000",
      "Limited‑Time Discount Applied",
    ],
  },
  {
    name: "Pro",
    price: "₹49,999",
    popular: true,
    features: [
      "Multi‑Page Business Website",
      "Advanced Animations (Framer Motion)",
      "SEO + Google Search Console",
      "Contact Form + Email Integration",
      "Free Domain (1 Year) – ₹1,000 value",
      "Free Hosting & Deployment",
      "Market Price: ₹75,000",
      "Save ₹25,000 (Discounted)",
    ],
  },
  {
    name: "Enterprise",
    price: "₹1,20,000+",
    features: [
      "Full‑Stack Web App (MERN / Next.js)",
      "Admin Dashboard",
      "Authentication & Roles",
      "Payment Gateway Integration",
      "SEO, Performance & Security",
      "Free Domain + Hosting (1 Year)",
      "Market Price: ₹1.8L – ₹2.5L",
      "Custom Quote with Discount",
    ],
  },
];
