"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

/* ================= NAVBAR ================= */
function Navbar() {
  const [open, setOpen] = useState(false);

  // Smooth scroll
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image
            src="/logo/logo.png"
            alt="ProjectWorksStudio Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="hidden md:inline text-2xl font-extrabold text-indigo-600">
            ProjectWorks<span className="text-gray-900">Studio</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          {["about", "services", "project", "pricing", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="hover:text-indigo-600"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t py-6 flex flex-col items-center gap-4 transition-all duration-300">
          {["about", "services", "project", "pricing", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="text-lg font-medium hover:text-indigo-600"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

/* ================= DATA ================= */
const roles = [
  "Full Stack Web Developer helping businesses and startups build modern, scalable, and high-performing web applications",
  "Experience building AI-powered, scalable web applications",
  "End-to-end development: frontend, backend, APIs, and deployment",
  "Specialized in MERN stack, Next.js, and OpenAI API integrations",
  "Passionate about clean code, responsive design, and intuitive UX",
  "We can build, deploy, and maintain real production applications.",
];

const SERVICES = [
  { title: "Portfolio Websites", icon: <Store />, desc: "Personal & professional portfolios", points: ["Custom UI", "Resume", "Contact Form"] },
  { title: "Business Websites", icon: <Users />, desc: "High-conversion business sites", points: ["SEO", "Fast"] },
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

const DOMAINS = [
  { name: ".com", price: "₹999 / year" },
  { name: ".in", price: "₹699 / year" },
  { name: ".dev", price: "₹3,499 / year" },
  { name: ".tech", price: "₹2,999 / year" },
  { name: ".store", price: "₹2,499 / year" },
];

/* ================= PAGE ================= */
export default function LandingPage() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 55);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, roleIndex, isPaused]);

  return (
    <main >
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-32 text-center bg-gradient-to-br from-indigo-600 via-purple-500 to-cyan-400 text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          ProjectWorksStudio
        </motion.h1>

        <p className="mt-6 text-lg">
          Launch your website in <b>7–10 days</b>
        </p>

        {/* Typing effect */}
        <motion.div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-6 h-14 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg md:text-2xl font-medium
            bg-gradient-to-r from-white via-cyan-200 to-indigo-100
            bg-clip-text text-transparent
            drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)]">
            {text}
            <span className="ml-1 animate-blink">|</span>
          </p>
        </motion.div>

        <div className="mt-8 flex flex-col sm:flex-row gap-2 justify-center">
          <Link href="#pricing" className="bg-white text-indigo-700 px-4 py-3 rounded-xl font-semibold">
            View Pricing
          </Link>
          <Link href="#project" className="bg-indigo-700 px-8 py-3 rounded-xl">
            Project Works
          </Link>
          <Link href="#contact" className="border border-white px-8 py-3 rounded-xl">
            Free Proposal
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600">
              About Us
            </h2>

            <p className="text-slate-700 leading-relaxed mb-5">
              ProjectWorksStudio is a founder-led web development studio run by
              <span className="font-semibold text-slate-900"> Mohammed Khan</span>,
              a full-stack web developer focused on building reliable,
              production-ready web applications for businesses and startups.
            </p>

            <p className="text-slate-700 leading-relaxed mb-5">
              The goal is simple: design and develop websites and applications
              that are fast, scalable, and easy to maintain — without unnecessary
              complexity or overengineering.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              Every project is handled end-to-end, from planning and UI design
              to development, deployment, and optimization, ensuring long-term
              value and real business results.
            </p>

            <div className="flex flex-wrap gap-3">
              {["MERN Stack", "Next.js", "Production Deployments", "Clean Architecture", "Long-Term Support"].map((tag) => (
                <span key={tag} className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-600 via-purple-500 to-cyan-400
                       rounded-3xl p-10 text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">
              How We Work
            </h3>

            <ul className="space-y-4 text-sm md:text-base">
              {["Clear planning before writing a single line of code", "Clean, scalable code that’s easy to extend", "Performance, SEO, and responsiveness by default", "Direct communication — no middlemen, no delays"].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <Check className="text-emerald-300 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-white p-8 rounded-3xl shadow">
              <div className="text-indigo-600 mb-4">{s.icon}</div>
              <h3 className="font-semibold text-xl">{s.title}</h3>
              <p className="text-slate-600 mt-2">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p, j) => (
                  <li key={j} className="flex gap-2 items-center">
                    <Check size={18} className="text-emerald-500" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="project" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Project Works
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((p, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white rounded-3xl shadow overflow-hidden">
                <Image src={p.image} alt={p.title} width={500} height={300} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold">{p.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tech.map((t, j) => (
                      <span key={j} className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="block mt-4 bg-indigo-600 text-white py-2 rounded-xl text-center">
                    View Live
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-600">
          Pricing
        </h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PRICING.map((p, i) => (
            <div key={i} className={`bg-white p-6 rounded-3xl shadow text-center ${p.popular ? "ring-2 ring-indigo-500" : ""}`}>
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-3xl font-bold text-indigo-600 mt-2">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOMAINS */}
      <section className="py-24 bg-slate-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-10">
            Domain Pricing
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {DOMAINS.map((d, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow">
                <Globe className="mx-auto text-indigo-600 mb-3" />
                <h3 className="text-2xl font-bold">{d.name}</h3>
                <p>{d.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-28 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600">
          Get Free Proposal PDF
        </h2>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSebe1iZL2ixmwghyEXrnnESejV3_cGa-0pGFiL0CHbQZJt2ig/viewform"
          className="w-full max-w-5xl mx-auto h-[750px] rounded-3xl shadow"
        />
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-3 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white">
              ProjectWorks<span className="text-indigo-500">Studio</span>
            </h2>
            <p className="mt-4 text-sm text-gray-400">
              Building modern, high-performance websites & full-stack applications.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#project">Projects</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <a
              href="mailto:contact.projectworksstudio@gmail.com"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg text-sm"
            >
              <Mail size={18} /> Email Me
            </a>

            <div className="flex justify-center md:justify-start gap-5 mt-6">
              <a href="https://github.com/MohammedKhan-star"><Github /></a>
              <a href="https://www.linkedin.com/in/mohammed-khan-7905a621a/"><Linkedin /></a>
              <a href="https://www.instagram.com/projectworks_studio/"><Instagram /></a>
              <a href="https://wa.me/9542355897"><MessageCircle /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-14 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ProjectWorksStudio · Built by Mohammed Khan
        </div>
      </footer>
    </main>
  );
}
