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

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="hidden md:inline text-2xl font-extrabold text-indigo-600">
            ProjectWorks<span className="text-gray-900">Studio</span>
          </span>
        </Link>

        <div className="hidden md:flex gap-8 font-medium">
          {["about", "services", "project", "pricing", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="hover:text-indigo-600 transition"
            >
              {id}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t py-6 flex flex-col items-center gap-4">
          {["about", "services", "project", "pricing", "contact"].map((id) => (
            <button key={id} onClick={() => handleScroll(id)}>
              {id}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

/* ================= DATA ================= */

const roles = [
  "Full Stack Web Developer helping businesses build modern applications",
  "Experience building AI-powered scalable web apps",
  "End-to-end development: frontend, backend, APIs",
  "Specialized in MERN stack and Next.js",
];

const SERVICES = [
  {
    title: "Portfolio Websites",
    icon: <Store />,
    desc: "Modern personal portfolios",
    points: ["Custom UI", "Projects Showcase", "Contact Form"],
  },
  {
    title: "Business Websites",
    icon: <Users />,
    desc: "High converting business sites",
    points: ["SEO", "Fast", "Lead Forms"],
  },
  {
    title: "Education Websites",
    icon: <GraduationCap />,
    desc: "Schools and institutes",
    points: ["Admissions", "Courses", "Dashboard"],
  },
  {
    title: "Restaurant Websites",
    icon: <Utensils />,
    desc: "Restaurants and cafes",
    points: ["Menu", "Orders", "Booking"],
  },
  {
    title: "E-Commerce",
    icon: <ShoppingCart />,
    desc: "Online stores",
    points: ["Payments", "Products", "Admin"],
  },
  {
    title: "Full-Stack Apps",
    icon: <Code />,
    desc: "Advanced SaaS platforms",
    points: ["APIs", "Auth", "Deploy"],
  },
];

const PROJECTS = [
  {
    title: "Portfolio",
    image: "/projects/Portfolio.png",
    live: "https://mohammedkhan.dev",
  },
  {
    title: "AI Food Delivery",
    image: "/projects/food.png",
    live: "https://food-delivery-app-zomoto.vercel.app",
  },
  {
    title: "LMS Platform",
    image: "/projects/LMS5.png",
    live: "https://lms-sandy-six.vercel.app",
  },
];

const PRICING = [
  { name: "Basic Website", price: "₹999", market: "₹5000" },
  { name: "Portfolio", price: "₹1500", market: "₹8000" },
  { name: "Portfolio Pro", price: "₹3000", market: "₹15000" },
  { name: "Business Landing", price: "₹12000", market: "₹25000" },
  { name: "E-Commerce", price: "₹25000", market: "₹60000" },
];

const DOMAINS = [
  { name: ".com", price: "₹899 / year" },
  { name: ".in", price: "₹699 / year" },
  { name: ".dev", price: "₹3499 / year" },
];

/* ================= PAGE ================= */

export default function LandingPage() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
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
    }, 50);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, roleIndex]);

  return (
    <main>

      <Navbar />

{/* HERO */}

<section className="pt-40 pb-32 text-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-white px-6 relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]"></div>

<motion.h1
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
className="relative text-5xl font-extrabold"
>
ProjectWorksStudio
</motion.h1>

<p className="mt-6 text-lg text-slate-200 relative">
Launch your website in <b>7-10 days</b>
</p>

<p className="mt-6 text-xl bg-gradient-to-r from-white via-cyan-300 to-indigo-200 bg-clip-text text-transparent relative">
{text} |
</p>

<div className="mt-10 flex gap-4 justify-center relative flex-wrap">

<Link
href="#pricing"
className="bg-white text-indigo-800 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
>
View Pricing
</Link>

<Link
href="#project"
className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl transition"
>
Projects
</Link>

<Link
href="#contact"
className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition"
>
Free Proposal
</Link>

</div>

</section>

{/* SERVICES */}

<section id="services" className="py-24 max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-16">
Our Services
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

{SERVICES.map((s, i) => (

<motion.div
key={i}
whileHover={{ y: -6 }}
className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition border border-slate-100"
>

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

<h2 className="text-4xl font-bold text-center mb-16">
Projects
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

{PROJECTS.map((p, i) => (

<motion.div
key={i}
whileHover={{ scale: 1.03 }}
className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden"
>

<Image
src={p.image}
alt={p.title}
width={500}
height={300}
className="w-full h-48 object-cover"
/>

<div className="p-6">

<h3 className="font-semibold">{p.title}</h3>

<a
href={p.live}
target="_blank"
className="block mt-4 bg-indigo-600 text-white py-2 rounded-xl text-center"
>
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

<h2 className="text-4xl font-bold text-center text-indigo-700 mb-16">
Pricing
</h2>

<div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

{PRICING.map((p, i) => (

<div
key={i}
className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition text-center"
>

<h3 className="font-semibold">{p.name}</h3>

<p className="text-red-500 line-through text-sm mt-2">
{p.market}
</p>

<p className="text-3xl font-bold text-indigo-600">
{p.price}
</p>

<a
href="#contact"
className="block mt-6 bg-indigo-600 text-white py-2 rounded-xl"
>
Get Started
</a>

</div>

))}

</div>

</section>

{/* DOMAIN */}

<section className="py-24 bg-slate-100">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold text-indigo-700 mb-12">
Domain Pricing
</h2>

<div className="grid md:grid-cols-3 gap-6">

{DOMAINS.map((d, i) => (

<div
key={i}
className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition"
>

<Globe className="mx-auto text-indigo-600 mb-3" />

<h3 className="text-2xl font-bold">{d.name}</h3>

<p className="text-indigo-600 mt-2">{d.price}</p>

</div>

))}

</div>

</div>

</section>

{/* CONTACT */}

<section id="contact" className="py-28 text-center px-6">

<h2 className="text-4xl font-bold text-indigo-700 mb-10">
Get Free Proposal
</h2>

<iframe
src="https://docs.google.com/forms/d/e/1FAIpQLSebe1iZL2ixmwghyEXrnnESejV3_cGa-0pGFiL0CHbQZJt2ig/viewform"
className="w-full max-w-5xl mx-auto h-[750px] rounded-3xl shadow"
/>

</section>

{/* FOOTER */}

<footer className="bg-slate-950 text-gray-300 pt-16 pb-8">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

<div>

<h2 className="text-2xl font-bold text-white">
ProjectWorks<span className="text-indigo-500">Studio</span>
</h2>

<p className="mt-4 text-gray-400 text-sm">
Building modern high-performance websites
</p>

</div>

<div>

<h3 className="text-white mb-4 font-semibold">
Quick Links
</h3>

<ul className="space-y-2 text-sm">

<li><Link href="#services">Services</Link></li>
<li><Link href="#project">Projects</Link></li>
<li><Link href="#pricing">Pricing</Link></li>
<li><Link href="#contact">Contact</Link></li>

</ul>

</div>

<div>

<a
href="mailto:contact.projectworksstudio@gmail.com"
className="inline-flex items-center gap-2 bg-indigo-600 px-5 py-3 rounded-lg"
>
<Mail size={18}/> Email
</a>

<div className="flex gap-5 mt-6">

<a href="https://github.com/MohammedKhan-star">
<Github/>
</a>

<a href="https://www.linkedin.com/company/projectworksstudio/">
<Linkedin/>
</a>

<a href="https://www.instagram.com/projectworks_studio/">
<Instagram/>
</a>

<a href="https://wa.me/9542355897">
<MessageCircle/>
</a>

</div>

</div>

</div>

<div className="border-t border-gray-800 mt-14 pt-6 text-center text-sm text-gray-500">
© {new Date().getFullYear()} ProjectWorksStudio
</div>

</footer>

</main>
  );
}
