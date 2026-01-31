"use client";

import Link from "next/link";
import {
  Check,
  Mail,
  ShoppingCart,
  Code,
  Users,
  GraduationCap,
  Utensils,
  Store,
  Globe,
} from "lucide-react";

/* ================= SERVICES ================= */

const SERVICES = [
  {
    title: "Portfolio & Personal Websites",
    desc: "Professional websites to showcase your skills and personal brand.",
    points: [
      "Custom Portfolio Design",
      "Project Showcase",
      "Resume Download",
      "Contact Forms",
      "Social Media Links",
    ],
    icon: <Store size={36} />,
  },
  {
    title: "Business Websites",
    desc: "High-conversion websites for companies & brands.",
    points: [
      "Custom UI/UX",
      "SEO Optimization",
      "WhatsApp Integration",
      "Mobile Responsive",
      "Fast Performance",
    ],
    icon: <Users size={36} />,
  },
  {
    title: "Education Websites",
    desc: "Websites for schools, colleges & institutes.",
    points: [
      "Course Listings",
      "Faculty Profiles",
      "Online Admissions",
      "Student Notifications",
      "Online Classes",
    ],
    icon: <GraduationCap size={36} />,
  },
  {
    title: "Food & Restaurant Websites",
    desc: "Websites for cafes, restaurants & food delivery.",
    points: [
      "Menu Display",
      "Online Ordering",
      "Table Reservations",
      "Delivery Integration",
      "Gallery & Reviews",
    ],
    icon: <Utensils size={36} />,
  },
  {
    title: "E-Commerce Websites",
    desc: "Secure online stores with payments.",
    points: [
      "Product Management",
      "Payment Gateway",
      "User Accounts",
      "Admin Dashboard",
      "Deployment & Hosting",
    ],
    icon: <ShoppingCart size={36} />,
  },
  {
    title: "Full-Stack & SaaS Applications",
    desc: "Custom apps for startups & enterprises.",
    points: [
      "Custom APIs",
      "Role-Based Access",
      "Dashboards & Analytics",
      "Cloud Deployment",
      "Scalable Architecture",
    ],
    icon: <Code size={36} />,
  },
];

/* ================= PRICING ================= */

const PRICING = [
  { name: "Starter Static", marketPrice: "8,000", price: "5,000", save: "3,000", bestFor: "Personal / One Page" },
  { name: "Portfolio Pro", marketPrice: "12,000", price: "7,000", save: "5,000", bestFor: "Freelancers" },
  { name: "Business Starter", marketPrice: "18,000", price: "12,000", save: "6,000", bestFor: "Small Business" },
  { name: "Business Pro", marketPrice: "40,000", price: "25,000", save: "15,000", bestFor: "Growing Companies", popular: true },
  { name: "Advanced Web App", marketPrice: "70,000", price: "45,000", save: "25,000", bestFor: "E-Commerce / SaaS" },
  { name: "Enterprise Solution", marketPrice: "1,50,000+", price: "1,00,000", save: "50,000+", bestFor: "Large Systems" },
];

/* ================= FEATURE COMPARISON ================= */

const FEATURES = [
  { name: "Custom Design", values: [false, true, true, true, true, true] },
  { name: "Mobile Responsive", values: [true, true, true, true, true, true] },
  { name: "SEO Optimization", values: [false, false, true, true, true, true] },
  { name: "WhatsApp Integration", values: [false, true, true, true, true, true] },
  { name: "Admin Panel", values: [false, false, false, true, true, true] },
  { name: "Payment Gateway", values: [false, false, false, false, true, true] },
  { name: "Login / Signup", values: [false, false, false, false, true, true] },
  { name: "Maintenance Support", values: [false, false, false, false, true, true] },
];

/* ================= DOMAIN PRICING ================= */

const DOMAINS = [
  { name: ".in", price: "₹699 / year", note: "Indian businesses" },
  { name: ".com", price: "₹999 / year", note: "Global trust" },
  { name: ".org", price: "₹899 / year", note: "Organizations" },
  { name: ".net", price: "₹1,199 / year", note: "Tech services" },
  { name: ".dev", price: "₹3,499 / year", note: "Developers" },
  { name: ".tech", price: "₹2,999 / year", note: "Startups" },
  { name: ".store", price: "₹2,499 / year", note: "E-Commerce" },
  { name: ".co", price: "₹1,499 / year", note: "Brandable" },
  { name: ".app", price: "₹3,499 / year", note: "Apps" },
  { name: ".online", price: "₹1,199 / year", note: "Modern brands" },
];
const featureComparison = [
  { feature: "Custom Design", basic: false, portfolio: true, business: true, pro: true, advanced: true, enterprise: true },
  { feature: "Mobile Responsive", basic: true, portfolio: true, business: true, pro: true, advanced: true, enterprise: true },
  { feature: "SEO Optimization", basic: false, portfolio: false, business: true, pro: true, advanced: true, enterprise: true },
  { feature: "WhatsApp Integration", basic: false, portfolio: true, business: true, pro: true, advanced: true, enterprise: true },
  { feature: "Contact / Lead Forms", basic: true, portfolio: true, business: true, pro: true, advanced: true, enterprise: true },
  { feature: "Admin Panel", basic: false, portfolio: false, business: false, pro: true, advanced: true, enterprise: true },
  { feature: "Payment Gateway", basic: false, portfolio: false, business: false, pro: false, advanced: true, enterprise: true },
  { feature: "Login / Signup", basic: false, portfolio: false, business: false, pro: false, advanced: true, enterprise: true },
  { feature: "Dashboard & Analytics", basic: false, portfolio: false, business: false, pro: false, advanced: true, enterprise: true },
  { feature: "Hosting & Deployment", basic: false, portfolio: false, business: false, pro: true, advanced: true, enterprise: true },
  { feature: "Maintenance Support", basic: false, portfolio: false, business: false, pro: false, advanced: true, enterprise: true },
];

/* ================= COMPONENT ================= */

export default function LandingPage() {
  return (
    <main className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 py-32 text-center text-white">
        <h1 className="text-5xl font-extrabold">ProjectWorks Studio</h1>
        <p className="mt-6 text-lg">
          Launch your website in <b>7–10 days</b> & save up to <b>₹50,000</b>
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="#pricing" className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold">
            View Pricing
          </Link>
          <Link href="#lead-form" className="border border-white px-8 py-3 rounded-xl font-semibold">
            Get Free Proposal
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex justify-center text-indigo-600 mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-center">{s.title}</h3>
              <p className="text-slate-600 text-center mt-2">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p, idx) => (
                  <li key={idx} className="flex gap-2">
                    <Check size={18} className="text-emerald-500" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
          <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
      Feature Comparison 📊
    </h2>

    <table className="min-w-full border rounded-xl overflow-hidden text-center">
      <thead className="bg-indigo-600 text-white">
        <tr>
          <th className="p-4 text-left">Features</th>
          <th>Basic</th>
          <th>Portfolio</th>
          <th>Business</th>
          <th>Pro</th>
          <th>Advanced</th>
          <th>Enterprise</th>
        </tr>
      </thead>

      <tbody>
        {featureComparison.map((row, i) => (
          <tr key={i} className="border-b">
            <td className="p-4 text-left font-medium">{row.feature}</td>
            {["basic", "portfolio", "business", "pro", "advanced", "enterprise"].map(
              (key) => (
                <td key={key}>
                  {row[key] ? "✅" : "❌"}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

      {/* PRICING */}
      <section id="pricing" className="bg-indigo-50 py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
          Pricing Plans
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {PRICING.map((p, i) => (
            <div key={i} className={`bg-white rounded-3xl p-6 shadow-lg text-center ${p.popular ? "ring-2 ring-indigo-500" : ""}`}>
              {p.popular && (
                <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="mt-3 font-semibold">{p.name}</h3>
              <p className="line-through text-sm">₹{p.marketPrice}</p>
              <p className="text-3xl font-bold text-indigo-600">₹{p.price}</p>
              <p className="text-emerald-600 text-sm">Save ₹{p.save}</p>
              <p className="text-xs mt-2">{p.bestFor}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOMAIN PRICING */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Domain Pricing (Yearly)</h2>
          <p className="text-slate-600 mb-12">Choose the right domain for your brand</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {DOMAINS.map((d, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 shadow-lg hover:scale-105 transition">
                <Globe className="mx-auto text-indigo-600 mb-3" />
                <h3 className="text-2xl font-bold">{d.name}</h3>
                <p className="font-semibold">{d.price}</p>
                <p className="text-sm text-slate-500">{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  


      {/* CONTACT */}
      <section id="lead-form" className="py-28 text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-6">
          Get Free Proposal PDF 📄
        </h2>
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSebe1iZL2ixmwghyEXrnnESejV3_cGa-0pGFiL0CHbQZJt2ig/viewform?usp=header" width="100%" height="750" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-gradient-to-r from-indigo-600 to-cyan-500 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Talk to Us on WhatsApp</h2>
        <p className="mb-4">Fast reply • Real developer • No sales pressure</p>
        <p className="flex justify-center gap-2 mb-6">
          <Mail /> contact.projectworksstudio@gmail.com
        </p>
        <Link
          href="https://wa.me/919542355897"
          className="bg-white text-indigo-700 px-12 py-4 rounded-xl font-semibold shadow-xl"
        >
          Chat on WhatsApp
        </Link>
      </section>

    </main>
  );
}
