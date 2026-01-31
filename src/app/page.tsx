"use client";

import { motion } from "framer-motion";
import { Check, Mail, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            ProjectWorks Studio
          </motion.h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-sm">
            Launch your professional website in <b>7–10 days</b>.  
            Save up to <span className="text-emerald-200 font-semibold">₹50,000</span>.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="#pricing"
              className="bg-white text-indigo-700 px-10 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
            >
              View Pricing
            </Link>
            <Link
              href="#lead-form"
              className="border border-white px-10 py-4 rounded-2xl font-semibold hover:bg-white/20 transition"
            >
              Get Free Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Our Core Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="rounded-3xl bg-white/30 backdrop-blur-lg border border-white/20 p-8 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-slate-700 mb-6">{service.desc}</p>

                <ul className="space-y-3">
                  {service.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-slate-800">
                      <Check size={18} className="text-emerald-500 mt-1" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="py-28 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-600 mb-12">
            Transparent Pricing 💰
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`rounded-3xl bg-white/40 backdrop-blur-lg border border-white/20 shadow-lg p-6 text-center ${
                  plan.popular && "ring-2 ring-indigo-500 scale-105"
                }`}
              >
                {plan.popular && (
                  <span className="inline-block mb-3 text-xs bg-indigo-600 text-white px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <p className="text-sm uppercase text-slate-500">{plan.type}</p>
                <h3 className="text-xl font-semibold mt-2">{plan.name}</h3>

                <p className="text-sm text-slate-400 line-through mt-3">
                  Market ₹{plan.marketPrice}
                </p>

                <p className="text-3xl font-bold text-indigo-600 mt-1">
                  ₹{plan.price}
                </p>

                <p className="text-sm text-emerald-600 font-semibold mt-2">
                  Save ₹{plan.save}
                </p>

                <p className="text-xs text-slate-500 mt-2">
                  Best for: {plan.bestFor}
                </p>

                <Link
                  href="#lead-form"
                  className="mt-6 flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
                >
                  Get Proposal <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-8 text-sm">
            ⚠️ Domain & hosting charged separately
          </p>
        </div>
      </section>

      {/* ================= DOMAIN ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-600 mb-12">
            Domain Pricing (Yearly)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {domains.map((d, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg p-6 text-center"
              >
                <Globe className="mx-auto mb-4 text-indigo-500" />
                <h3 className="text-xl font-semibold">{d.name}</h3>
                <p className="text-2xl font-bold text-emerald-600 mt-2">
                  ₹{d.price}/yr
                </p>
                <p className="text-sm text-slate-500 mt-2">{d.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section id="lead-form" className="py-28 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-4">
            Get Free Proposal PDF 📄
          </h2>

          <p className="text-slate-700 mb-12">
            Submit the form & get instant WhatsApp support.
          </p>

          <div className="rounded-3xl overflow-hidden border shadow-lg bg-white">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSebe1iZL2ixmwghyEXrnnESejV3_cGa-0pGFiL0CHbQZJt2ig/viewform?usp=header"
              width="100%"
              height="750"
              frameBorder="0"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-gradient-to-r from-indigo-600 to-cyan-500 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Talk to Us on WhatsApp
        </h2>

        <p className="text-white/90 mb-3">
          Fast reply • Real developer • No sales pressure
        </p>

        <p className="flex justify-center gap-2 mb-6">
          <Mail /> contact@mohammedkhandeveloper.com
        </p>

        <Link
          href="https://wa.me/919542355897"
          className="inline-block bg-white text-indigo-700 px-12 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
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
    desc: "High-conversion websites for lead generation.",
    points: ["Custom UI/UX", "SEO Optimized", "WhatsApp Integration", "Responsive", "Fast Loading"],
  },
  {
    title: "E-Commerce Platforms",
    desc: "Secure online stores with payments.",
    points: ["Product Management", "Payments", "Admin Panel", "User Accounts", "Deployment"],
  },
  {
    title: "Full-Stack Applications",
    desc: "Custom apps for startups & enterprises.",
    points: ["Custom APIs", "Role Management", "Dashboards", "Cloud Hosting", "Scalable Code"],
  },
];

const pricing = [
  { type: "Static", name: "Basic", marketPrice: "8,000", price: "5,000", save: "3,000", bestFor: "Portfolios" },
  { type: "Dynamic", name: "Starter", marketPrice: "18,000", price: "12,000", save: "6,000", bestFor: "Small Business" },
  { type: "Business", name: "Business Pro", marketPrice: "40,000", price: "25,000", save: "15,000", bestFor: "Growing Companies", popular: true },
  { type: "Full-Stack", name: "Advanced", marketPrice: "70,000", price: "45,000", save: "25,000", bestFor: "Custom Apps" },
  { type: "Enterprise", name: "Enterprise", marketPrice: "1,50,000+", price: "1,00,000+", save: "50,000+", bestFor: "Startups" },
];

const domains = [
  { name: ".in", price: "699", note: "Best for Indian businesses" },
  { name: ".com", price: "999", note: "Global brand trust" },
  { name: ".org", price: "899", note: "Organizations & NGOs" },
];
