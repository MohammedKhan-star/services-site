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
    <header className="fixed top-0 inset-x-0 z-50 bg-#fffff border-b backdrop-blur border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 border-color-#000 md:gap-3">
          <Image
            src="/logo/logo4.png"
            alt="ProjectWorksStudio Logo"
            width={40}
            height={40}
            className="rounded-full object-cover border-color-#000"
          />
          <span className="hidden md:inline text-2xl font-extrabold text-indigo-600">
            DevCore<span className="text-gray-900">Agency</span>
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
  "We build powerful websites that grow your business",
  "Turn your idea into a powerful website",
  "Fast, secure, and modern web applications",
  "Helping startups build their digital presence",
  "Professional websites for schools and businesses",
  "Custom web applications built for real users",
  ];

const SERVICES = [ { title: "Portfolio Websites", icon: <Store />, desc: "Modern personal and professional portfolio websites for developers, freelancers and job seekers.", points: [ "Custom UI Design", "Projects Showcase", "Resume Download", "Contact Form", "Mobile Responsive", "SEO Ready" ] }, { title: "Business Websites", icon: <Users />, desc: "Professional websites designed to help businesses attract more customers and grow online.", points: [ "Professional Design", "SEO Optimization", "Google Maps Integration", "WhatsApp Chat Button", "Fast Loading", "Lead Generation Forms" ] }, { title: "Education Websites", icon: <GraduationCap />, desc: "Complete websites for schools, colleges and institutes with student management features.", points: [ "Admissions Forms", "Courses Management", "Student Dashboard", "Results Portal", "Admin Panel", "Mobile Friendly" ] }, { title: "Restaurant & Food Websites", icon: <Utensils />, desc: "Beautiful websites for restaurants, cafes and food businesses to attract more customers.", points: [ "Digital Menu", "Online Orders", "Table Booking", "Google Maps Location", "Mobile Responsive", "WhatsApp Orders" ] }, { title: "E-Commerce Stores", icon: <ShoppingCart />, desc: "Complete online stores with product management and secure payment systems.", points: [ "Product Management", "Shopping Cart", "Online Payment Gateway", "Order Tracking", "Admin Dashboard", "SEO Optimized" ] }, { title: "Custom Full-Stack Applications", icon: <Code />, desc: "Advanced web applications and SaaS platforms built using modern technologies.", points: [ "MERN / Next.js Development", "Authentication System", "REST APIs", "Database Integration", "Admin Dashboard", "Cloud Deployment" ] } ];



const PROJECTS = [
{title:"Portfolio",image:"/projects/Potfolio.png",live:"https://mohammedkhan.dev/",tech:["Next.js","SEO"]},
{title:"School Result Portal",image:"/projects/Schoolresultportal.png",live:"https://tssscpreresult.vercel.app/",tech:["Next.js","SEO"]},
{title:"Business Landing Page",image:"/projects/Businesslandingpage.png",live:"https://projectworkstudio.mohammedkhan.dev/",tech:["Next.js","SEO"]},
{title:"AI Food Delivery",image:"/projects/food.png",live:"https://food-delivery-app-zomoto.vercel.app/",tech:["MERN","AI"]},
{title:"Learning Management System",image:"/projects/LMS5.png",live:"https://lms-sandy-six.vercel.app/",tech:["MERN"]},
{title:"AI E-Commerce",image:"/projects/AI Ecommerce25.png",live:"https://gocart-xqlp.vercel.app/",tech:["Next.js","AI"]},
{title:"YouTube Clone",image:"/projects/Youtubeclone1.png",live:"https://youtube-clone-4-glwf.onrender.com/",tech:["React"]},
{title:"NXTTRENDZ Store",image:"/projects/ecommerce.png",live:"https://khannxttreandz.ccbp.tech/",tech:["React"]},
];
const TECH = ["Next.js","React","Node.js","MongoDB","AI","Stripe"];

const PRICING = [
{name:"Basic Website",price:"₹999",market:"₹5000",features:["1 Page","Responsive","Contact Form"]},
{name:"Portfolio",price:"₹1499",market:"₹8000",features:["3 Pages","Projects","SEO"]},
{name:"Portfolio Pro",price:"₹2999",market:"₹15000",features:["Animations","Analytics","5 Pages"]},
{name:"Business Landing Pro",price:"₹11999",market:"₹25000",features:["Lead Forms","Maps","WhatsApp"]},
{name:"E-Commerce",price:"₹24999",market:"₹60000",features:["Products","Payments","Admin"]},
{name:"Full Stack Application",price:"₹44999",market:"₹100000",features:["Database","API","Auth"]}
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
  const [billing, setBilling] = useState("monthly");
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
    <main className="mt-14">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-50 pb-32 text-center text-white px- overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/bg/hero-bg.png"   // 👉 put your image in public/bg/hero-bg.jpg
      alt="DevCore Background"
      fill
      priority
      className="object-cover"
    />
    
    {/* Dark Overlay (important for readability) */}
    <div className="absolute inset-0"></div>
  </div>

  {/* Content */}
  <div className="relative z-10">
    <motion.h1
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl  md:text-5xl font-bold text-shadow-amber-400"
    >
      DevCore Agency Software & AI Solutions
    </motion.h1>

    <motion.h2
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-lg md:text-2xl font-medium mt-2 text-amber-200"
    >
      Your Web Development Partner
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-lg md:text-2xl font-medium mt-2"
    >
      We offer a wide range of services to help you build your online presence and grow your business.
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-lg md:text-2xl font-medium mt-2"
    >
      From portfolio websites to full-stack applications, we have the expertise to bring your vision to life.
    </motion.p>



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

    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
      <Link href="#pricing" className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
        View Pricing
      </Link>

      <Link href="#project" className="bg-indigo-700 px-6 py-3 rounded-xl shadow hover:scale-105 transition">
        Project Works
      </Link>

      <Link href="#contact" className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
        Free Proposal
      </Link>
    </div>
  </div>

</section>

      {/* ABOUT */}
<section id="about" className="relative py-28 px-6 overflow-hidden">

  {/* ===== Background Image ===== */}
  <div className="absolute inset-0">
    <Image
      src="/bg/hero-bg.png"  // reuse same bg for consistency
      alt="Background"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-white/90 backdrop-blur-[4px]"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto space-y-20">

    {/* ================= TOP ABOUT ================= */}
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-6">
          About DevCore Agency
        </h2>

        <p className="text-slate-700 text-lg leading-relaxed mb-5">
          DevCore Agency is a modern <span className="font-semibold text-slate-900">Software & AI Solutions company</span> focused on building scalable, high-performance digital products.
        </p>

        <p className="text-slate-700 text-lg leading-relaxed mb-5">
          We help startups and businesses transform their ideas into 
          <span className="text-indigo-600 font-semibold"> powerful web applications</span> using modern technologies like Next.js, MERN stack, and AI integrations.
        </p>

        <p className="text-slate-700 text-lg leading-relaxed mb-6">
          From idea → design → development → deployment, we handle everything with precision and speed.
        </p>

        <div className="flex flex-wrap gap-3">
          {["Next.js", "MERN Stack", "AI Apps", "SEO Optimized", "Scalable Systems"].map((tag) => (
            <span key={tag} className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ===== UPGRADED FOUNDER CARD ===== */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl"
      >
        {/* Top Profile */}
        <div className="flex items-center gap-5">
          <Image
            src="/profile/profile.jpg"
            alt="Mohammed Khan"
            width={90}
            height={90}
            className="rounded-full object-cover border-4 border-indigo-500 shadow"
          />

          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Mohammed Khan
            </h3>
            <p className="text-sm text-indigo-600 font-medium">
              Founder & Full-Stack Developer
            </p>
            <p className="text-xs text-gray-500">
              DevCore Agency
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 border-t"></div>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed">
          Specialized in building scalable, production-ready web applications using modern technologies like React, Next.js, Node.js, and AI integrations. Focused on delivering high-performance solutions that drive real business growth.
        </p>

        {/* Skills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {["React", "Next.js", "Node.js", "MongoDB", "AI"].map((skill) => (
            <span key={skill} className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/9542355897"
          target="_blank"
          className="mt-6 block text-center bg-indigo-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition"
        >
          Contact Founder
        </a>
      </motion.div>
    </div>

    {/* ================= STATS ================= */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
    >
      {[
        { value: "10+", label: "Projects Delivered" },
        { value: "5+", label: "Happy Clients" },
        { value: "1+", label: "Years Experience" },
        { value: "100%", label: "Client Satisfaction" },
      ].map((stat, i) => (
        <div key={i} className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow">
          <h3 className="text-3xl font-bold text-indigo-600">{stat.value}</h3>
          <p className="text-sm text-slate-600 mt-2">{stat.label}</p>
        </div>
      ))}
    </motion.div>

    {/* ================= PROCESS ================= */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        How We Work
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {[
          { step: "01", title: "Planning", desc: "Understanding your idea and requirements clearly." },
          { step: "02", title: "Design", desc: "Creating modern UI/UX focused layouts." },
          { step: "03", title: "Development", desc: "Building scalable and fast applications." },
          { step: "04", title: "Launch", desc: "Deploying and optimizing for performance." },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white/90 backdrop-blur p-8 rounded-3xl shadow-lg"
          >
            <h3 className="text-indigo-600 text-2xl font-bold">{item.step}</h3>
            <h4 className="mt-3 font-semibold text-lg">{item.title}</h4>
            <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* SERVICES */}
<section className="py-32 px-6 bg-slate-100">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-600">
        Compare Pricing
      </h2>
      <p className="text-gray-600 mt-4 text-lg">
        Transparent pricing vs market rates — get more value at less cost
      </p>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="w-full border rounded-3xl overflow-hidden shadow-lg bg-white">

        {/* Header */}
        <thead className="bg-indigo-600 text-white text-left">
          <tr>
            <th className="p-5">Features</th>
            <th className="p-5 text-center">Basic</th>
            <th className="p-5 text-center bg-indigo-700">Pro (Recommended)</th>
            <th className="p-5 text-center">Enterprise</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody className="text-sm">

          {[
            ["Pages", "1 Page", "5 Pages", "Unlimited"],
            ["Design", "Basic UI", "Modern UI/UX", "Premium Custom UI"],
            ["Responsive", "✔", "✔", "✔"],
            ["SEO Optimization", "✖", "✔", "✔"],
            ["Admin Panel", "✖", "✔", "✔"],
            ["Payment Integration", "✖", "Optional", "✔"],
            ["AI Features", "✖", "✖", "✔"],
            ["Delivery Time", "5–7 Days", "7–10 Days", "10–15 Days"],
          ].map((row, i) => (
            <tr key={i} className="border-t hover:bg-slate-50">
              <td className="p-5 font-medium">{row[0]}</td>
              <td className="p-5 text-center">{row[1]}</td>
              <td className="p-5 text-center bg-indigo-50 font-semibold">
                {row[2]}
              </td>
              <td className="p-5 text-center">{row[3]}</td>
            </tr>
          ))}

          {/* Pricing Row */}
          <tr className="border-t bg-slate-100 font-bold text-center">
            <td className="p-5">Your Price</td>
            <td className="p-5 text-indigo-600">₹999</td>
            <td className="p-5 text-indigo-700 text-lg">₹9,999</td>
            <td className="p-5 text-indigo-600">₹29,999+</td>
          </tr>

          <tr className="border-t text-center text-red-500">
            <td className="p-5">Market Price</td>
            <td className="p-5">₹5,000+</td>
            <td className="p-5">₹25,000+</td>
            <td className="p-5">₹80,000+</td>
          </tr>

          {/* CTA Row */}
          <tr className="border-t">
            <td></td>
            <td className="p-5 text-center">
              <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                Get Started
              </a>
            </td>
            <td className="p-5 text-center">
              <a href="#contact" className="bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-lg">
                Choose Pro
              </a>
            </td>
            <td className="p-5 text-center">
              <a href="#contact" className="bg-black text-white px-4 py-2 rounded-lg">
                Contact Us
              </a>
            </td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
</section>
<section id="pricing" className="relative py-32 px-6 overflow-hidden">

  {/* ===== BACKGROUND ===== */}
  <div className="absolute inset-0">
    <Image
      src="/bg/hero-bg.png"
      alt="Pricing Background"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-indigo-900/80 to-cyan-900/80 backdrop-blur-[4px]" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* ===== HEADING ===== */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white">
        Pricing Plans
      </h2>
      <p className="text-gray-300 mt-4 text-lg">
        Simple, transparent pricing for every stage
      </p>
    </div>

    {/* ===== TOGGLE ===== */}
    <div className="flex justify-center mb-12">
      <div className="bg-white/10 backdrop-blur p-2 rounded-full flex gap-2">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-6 py-2 rounded-full text-sm ${
            billing === "monthly"
              ? "bg-indigo-600 text-white"
              : "text-gray-300"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("yearly")}
          className={`px-6 py-2 rounded-full text-sm ${
            billing === "yearly"
              ? "bg-indigo-600 text-white"
              : "text-gray-300"
          }`}
        >
          Yearly (Save 20%)
        </button>
      </div>
    </div>

    {/* ===== CARDS ===== */}
    <div className="grid md:grid-cols-3 gap-10">

      {[
        {
          name: "Basic",
          price: billing === "monthly" ? "₹999" : "₹799",
          features: ["1 Page Website", "Responsive Design", "Contact Form"],
        },
        {
          name: "Pro",
          price: billing === "monthly" ? "₹9,999" : "₹7,999",
          features: ["5 Pages", "SEO Optimization", "Admin Panel", "Fast Performance"],
          popular: true,
        },
        {
          name: "Enterprise",
          price: billing === "monthly" ? "₹29,999" : "₹24,999",
          features: ["Unlimited Pages", "AI Features", "Payments", "Full Stack"],
        },
      ].map((plan, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -12, scale: 1.03 }}
          className="relative group"
        >

          {/* Glow Border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-3xl blur opacity-40 group-hover:opacity-70 transition"></div>

          {/* Card */}
          <div className={`relative bg-white/10 backdrop-blur-xl border border-white/20 
                          rounded-3xl p-8 text-white shadow-2xl flex flex-col
                          ${plan.popular ? "scale-105 border-indigo-400" : ""}`}>

            {/* POPULAR */}
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-cyan-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                Most Popular
              </span>
            )}

            {/* NAME */}
            <h3 className="text-xl font-semibold">{plan.name}</h3>

            {/* PRICE */}
            <p className="text-4xl font-extrabold mt-4">
              {plan.price}
            </p>

            {/* FEATURES */}
            <ul className="mt-6 space-y-3 text-sm flex-grow">
              {plan.features.map((f, j) => (
                <li key={j} className="flex gap-2">
                  <Check size={16} className="text-emerald-400" />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className={`mt-6 block text-center py-3 rounded-xl font-medium transition
                ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500"
                    : "bg-white text-black"
                }`}
            >
              Get Started
            </a>

          </div>
        </motion.div>
      ))}

    </div>

    {/* ===== TRUST TEXT ===== */}
    <p className="text-center text-gray-400 mt-12 text-sm">
      No hidden fees • 100% transparency • Fast delivery guaranteed
    </p>

  </div>
</section>

    
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
  {/* TECHNOLOGY */}

<section className="py-24 bg-slate-100 text-center">

<h2 className="text-4xl font-bold mb-10">Technology Stack</h2>

<div className="flex flex-wrap justify-center gap-6">

{TECH.map((t,i)=>(

<span key={i} className="bg-white px-6 py-3 rounded-full shadow">{t}</span>

))}

</div>

</section>


{/* PRICING */}

<section id="pricing" className="py-24 px-6">

<h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">Pricing</h2>

<div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

{PRICING.map((p,i)=>(

<div key={i} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl text-center">

<h3 className="font-semibold text-lg">{p.name}</h3>

<p className="line-through text-red-500">{p.market}</p>

<p className="text-3xl font-bold text-indigo-600">{p.price}</p>

<ul className="mt-4 space-y-2 text-sm">

{p.features.map((f,j)=>(

<li key={j} className="flex justify-center gap-2"><Check size={16}/> {f}</li>

))}

</ul>

</div>

))}

</div>

</section>


{/* DOMAIN */}

<section className="py-24 bg-slate-100">

<h2 className="text-4xl font-bold text-center mb-12">Domain Pricing and Hosting</h2>

<div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">

{DOMAINS.map((d,i)=>(

<div key={i} className="bg-white p-8 rounded-3xl shadow text-center">

<Globe className="mx-auto text-indigo-600"/>

<h3 className="text-2xl font-bold mt-3">{d.name}</h3>

<p className="text-indigo-600">{d.price}</p>

</div>

))}

</div>

</section>


{/* CONTACT */}

<section id="contact" className="py-24 text-center">

<h2 className="text-4xl font-bold text-indigo-600 mb-6">Get Free Proposal</h2>

<iframe
src="https://docs.google.com/forms/d/e/1FAIpQLSebe1iZL2ixmwghyEXrnnESejV3_cGa-0pGFiL0CHbQZJt2ig/viewform"
className="w-full max-w-5xl mx-auto h-[700px] rounded-3xl shadow"
/>

</section>


{/* FOOTER */}

<footer className="bg-black text-gray-400 py-10 text-center">

<div className="flex justify-center gap-6 mb-6">

<a href="https://github.com/MohammedKhan-star"><Github/></a>
<a href="https://www.linkedin.com/company/projectworksstudio/"><Linkedin/></a>
<a href="https://www.instagram.com/projectworks_studio/"><Instagram/></a>

</div>

<p>© {new Date().getFullYear()} ProjectWorksStudio — Built by Mohammed Khan</p>

</footer>


{/* WHATSAPP BUTTON */}

<a
href="https://wa.me/9542355897"
className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
>
<MessageCircle/>
</a>
    </main>
  );
}
