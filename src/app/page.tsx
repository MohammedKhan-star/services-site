"use client";

import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  Rocket,
  Users,
  Globe,
  Mail,
  Store,
  GraduationCap,
  ShoppingCart,
  Utensils,
  Code,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
          >
            ProjectWorks Studio
          </motion.h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Professional websites, eCommerce platforms & full-stack solutions
            for businesses, institutes & startups.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="#pricing"
              className="bg-white text-indigo-700 px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
            >
              View Pricing
            </Link>
            <Link
              href="#contact"
              className="border border-white/40 px-10 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Our Core Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6">
                  {service.desc}
                </p>

                <ul className="space-y-3">
                  {service.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check size={18} className="text-emerald-400 mt-1" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WEBSITE TYPES / BUSINESS LIST ================= */}
      <section className="py-28 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-400">
            Website Types & Business Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
            {websiteTypes.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
              >
                <div className="rounded-3xl bg-slate-950 p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon size={28} className="text-indigo-400" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>

                  <p className="text-slate-400 mb-4 text-sm">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 text-sm">
                    {item.businesses.map((biz, idx) => (
                      <li key={idx} className="flex gap-2">
                        <Check size={15} className="text-emerald-400" />
                        {biz}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Website Pricing
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-16">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`rounded-3xl p-6 bg-white/5 backdrop-blur border border-white/10 text-center ${
                  plan.popular && "ring-2 ring-indigo-500"
                }`}
              >
                {plan.popular && (
                  <span className="inline-block mb-3 text-xs bg-indigo-600 px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <p className="text-sm text-slate-400 uppercase">
                  {plan.type}
                </p>

                <h3 className="text-xl font-semibold mt-2">
                  {plan.name}
                </h3>

                <p className="mt-3 text-3xl font-bold text-indigo-400">
                  ₹{plan.price}
                </p>

                <p className="text-sm text-emerald-400 mt-2">
                  Best for: {plan.bestFor}
                </p>

                <Link
                  href="https://wa.me/919542355897"
                  className="block mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold"
                >
                  Get This Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        id="contact"
        className="py-28 bg-gradient-to-r from-indigo-600 to-cyan-500 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Ready to Build Your Website?
        </h2>

        <p className="mt-4 text-white/90">
          Free consultation • Clear pricing • Fast delivery
        </p>

        <p className="mt-3 flex justify-center gap-2">
          <Mail /> contact@mohammedkhandeveloper.com
        </p>

        <Link
          href="https://wa.me/919542355897"
          className="inline-block mt-8 bg-white text-indigo-700 px-12 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
        >
          Chat on WhatsApp
        </Link>
      </section>
    </main>
  );
}

/* ================= DATA ================= */

const services = [
  {
    title: "Business Websites",
    desc: "High-conversion websites designed to generate leads and sales.",
    points: [
      "Custom UI/UX Design",
      "SEO & Google Indexing",
      "Fast Performance",
      "WhatsApp Integration",
      "Mobile Responsive",
    ],
  },
  {
    title: "E-Commerce Platforms",
    desc: "Sell online with secure, scalable eCommerce solutions.",
    points: [
      "Product & Order Management",
      "Payment Gateway",
      "Admin Dashboard",
      "User Authentication",
      "Deployment Setup",
    ],
  },
  {
    title: "Full-Stack Applications",
    desc: "Advanced web apps for startups and growing businesses.",
    points: [
      "Custom APIs",
      "Role-Based Access",
      "Dashboards",
      "Cloud Hosting",
      "Scalable Architecture",
    ],
  },
];

const websiteTypes = [
  {
    title: "Portfolio / Personal Website",
    icon: Users,
    desc: "Personal branding and online presence.",
    businesses: ["Developers", "Designers", "Freelancers", "Photographers"],
  },
  {
    title: "Small Business / Shop Website",
    icon: Store,
    desc: "Local & service-based businesses.",
    businesses: ["Shops", "Salons", "Consultants", "Agencies"],
  },
  {
    title: "School / Institute Website",
    icon: GraduationCap,
    desc: "Educational institutions online.",
    businesses: ["Schools", "Colleges", "Coaching Centers"],
  },
  {
    title: "E-Commerce Website",
    icon: ShoppingCart,
    desc: "Online selling platforms.",
    businesses: ["Clothing", "Electronics", "Groceries", "D2C Brands"],
  },
  {
    title: "Food Delivery Website",
    icon: Utensils,
    desc: "Online food ordering systems.",
    businesses: ["Restaurants", "Cafes", "Cloud Kitchens"],
  },
  {
    title: "Full-Stack Custom Website",
    icon: Code,
    desc: "Advanced & custom solutions.",
    businesses: ["Startups", "SaaS", "ERP / CRM", "Booking Apps"],
  },
];

const pricing = [
  { type: "Static", name: "Basic", price: "5,000", bestFor: "Portfolios" },
  { type: "Dynamic", name: "Starter", price: "12,000", bestFor: "Small Business" },
  {
    type: "Business",
    name: "Business Pro",
    price: "25,000",
    bestFor: "Growing Companies",
    popular: true,
  },
  { type: "Full-Stack", name: "Advanced", price: "45,000", bestFor: "Custom Apps" },
  { type: "Enterprise", name: "Enterprise", price: "1,00,000+", bestFor: "Startups" },
];
