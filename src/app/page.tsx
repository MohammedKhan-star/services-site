"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

/* ================= NAVBAR ================= */

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur shadow">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-indigo-600">
          ProjectWorks<span className="text-slate-900">Studio</span>
        </Link>

        <div className="hidden md:flex gap-8 font-medium">
          <Link href="#services">Services</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <div className="md:hidden flex gap-3">
          <Link
            href="https://wa.me/919542355897"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            WhatsApp
          </Link>
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white shadow-lg flex flex-col items-center gap-4 py-6">
          <Link href="#services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="#portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link href="#pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}

/* ================= DATA ================= */

const SERVICES = [
  { title: "Portfolio Websites", icon: <Store />, desc: "Personal & professional portfolios", points: ["Custom UI", "Resume", "Contact Form"] },
  { title: "Business Websites", icon: <Users />, desc: "High-conversion business sites", points: ["SEO", "Fast", "WhatsApp"] },
  { title: "Education Websites", icon: <GraduationCap />, desc: "Schools & institutes", points: ["Admissions", "Courses", "Dashboard"] },
  { title: "Food Websites", icon: <Utensils />, desc: "Restaurants & cafes", points: ["Menu", "Orders", "Booking"] },
  { title: "E-Commerce", icon: <ShoppingCart />, desc: "Online stores", points: ["Payments", "Admin", "Products"] },
  { title: "Full-Stack Apps", icon: <Code />, desc: "MERN / SaaS apps", points: ["APIs", "Auth", "Deploy"] },
];

const PROJECTS = [
  { title: "AI Food Delivery App", image: "/projects/food.png", live: "https://food-delivery-app-zomoto.vercel.app/", tech: ["MERN", "AI", "Stripe"] },
  { title: "Learning Management System", image: "/projects/LMS5.png", live: "https://lms-sandy-six.vercel.app/", tech: ["MERN", "Admin"] },
  { title: "AI E-Commerce Platform", image: "/projects/AI Ecommerce25.png", live: "https://gocart-xqlp.vercel.app/", tech: ["Next.js", "AI"] },
  { title: "YouTube Clone", image: "/projects/Youtubeclone1.png", live: "https://youtube-clone-4-glwf.onrender.com/", tech: ["React", "API"] },
  { title: "NXTTRENDZ Store", image: "/projects/ecommerce.png", live: "https://khannxttreandz.ccbp.tech/", tech: ["Next.js"] },
];

const PRICING = [
  { name: "Starter", price: "₹5,000" },
  { name: "Portfolio Pro", price: "₹7,000" },
  { name: "Business", price: "₹12,000" },
  { name: "Business Pro", price: "₹25,000", popular: true },
  { name: "Advanced App", price: "₹45,000" },
];

/* ================= PAGE ================= */

export default function LandingPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-32 text-center bg-gradient-to-br from-indigo-600 via-purple-500 to-cyan-400 text-white">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-extrabold">
          ProjectWorksStudio
        </motion.h1>
        <p className="mt-6 text-lg">Launch your website in <b>7–10 days</b></p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link href="#pricing" className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold">View Pricing</Link>
          <Link href="#contact" className="border border-white px-8 py-3 rounded-xl">Free Proposal</Link>
          <Link href="#portfolio" className="bg-indigo-700 px-8 py-3 rounded-xl">Project Works</Link>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow">
              <div className="text-indigo-600 mb-4">{s.icon}</div>
              <h3 className="font-semibold text-xl">{s.title}</h3>
              <p className="text-slate-600 mt-2">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p, j) => (
                  <li key={j} className="flex gap-2"><Check className="text-emerald-500" size={18}/> {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Project Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((p, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white rounded-3xl shadow overflow-hidden">
                <Image src={p.image} alt={p.title} width={400} height={200} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="font-semibold">{p.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tech.map((t, j) => (
                      <span key={j} className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <a href={p.live} target="_blank" className="block mt-4 bg-indigo-600 text-white py-2 rounded-xl">
                    View Live
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">Pricing</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 px-6">
          {PRICING.map((p, i) => (
            <div key={i} className={`bg-white p-6 rounded-3xl shadow text-center ${p.popular && "ring-2 ring-indigo-500"}`}>
              <h3>{p.name}</h3>
              <p className="text-3xl font-bold text-indigo-600 mt-2">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 text-center">
        <h2 className="text-4xl font-bold mb-6 text-indigo-600">Get Free Proposal PDF</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSebe1iZL2ixmwghyEXrnnESejV3_cGa-0pGFiL0CHbQZJt2ig/viewform"
          className="w-full max-w-5xl mx-auto h-[750px] rounded-3xl shadow"
        />
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-slate-900 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">ProjectWorksStudio</h3>

        <div className="flex justify-center gap-4 flex-wrap mb-6">
          <a
            href="mailto:contact.projectworksstudio@gmail.com"
            className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold"
          >
            <Mail /> Email Us
          </a>

          <a
            href="https://wa.me/919542355897"
            className="bg-green-500 px-6 py-3 rounded-xl font-semibold"
          >
            WhatsApp Chat
          </a>
        </div>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} ProjectWorks Studio · Built by Mohammed Khan
        </p>
      </footer>
    </main>
  );
}
