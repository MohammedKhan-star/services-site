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
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "Building powerful websites that drive business growth",
  "Transforming ideas into high-performance digital solutions",
  "Fast, secure, and scalable web applications",
  "Helping startups establish a strong digital presence",
  "Professional websites for educational institutions & enterprises",
  "Custom full-stack applications built with modern technologies",
];

/* ================= ABOUT VIDEO COMPONENT ================= */
function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(console.error);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <div className="relative bg-gray-900 rounded-3xl h-[420px] overflow-hidden shadow-2xl group">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/about-video3.mp4"
        autoPlay
        loop
        playsInline
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

      {/* Custom Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:scale-105 active:scale-95"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          // Pause Icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
          </svg>
        ) : (
          // Play Icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 4.01V8" />
          </svg>
        )}
      </button>
    </div>
  );
}

/* ================= NAVBAR ================= */
function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo5.png"
            alt="STACKRA TECHNOLOGIES Logo"
            width={48}
            height={48}
            className="rounded-xl object-cover"
            priority
          />
          <div className="hidden md:block">
            <span className="text-3xl font-bold tracking-tighter text-slate-950">STACKRA</span>
            <span className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              TECHNOLOGIES
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">
          {[
            { label: "About", id: "about" },
            { label: "Services", id: "services" },
            { label: "Projects", id: "projects" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-2xl font-medium transition-all duration-200 flex items-center gap-2"
          >
            Get Free Proposal
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700" aria-label="Toggle menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white py-6 px-6 space-y-4">
          {[
            { label: "About", id: "about" },
            { label: "Services", id: "services" },
            { label: "Projects", id: "projects" },
            { label: "Pricing", id: "pricing" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="block w-full text-left py-3 text-lg font-medium text-gray-700 hover:text-indigo-600"
            >
              {item.label}
            </button>
          ))}
          <a href="#contact" className="block w-full text-center bg-indigo-600 text-white py-3 rounded-2xl font-medium mt-4">
            Get Free Proposal
          </a>
        </div>
      )}
    </header>
  );
}

/* ================= SERVICES DATA ================= */
const SERVICES = [
  {
    title: "Portfolio & Personal Websites",
    icon: <Store className="w-8 h-8" />,
    desc: "Stunning, fast-loading portfolio websites that showcase your work and attract opportunities.",
    points: ["Custom Modern Design", "Project Showcase", "Resume Integration", "Contact & Inquiry Forms", "Mobile-First Responsive", "SEO Optimized"],
  },
  {
    title: "Business & Corporate Websites",
    icon: <Users className="w-8 h-8" />,
    desc: "Professional websites designed to convert visitors into loyal customers.",
    points: ["Premium UI/UX Design", "Advanced SEO Optimization", "Google Maps & Location", "WhatsApp Integration", "Lead Generation Forms", "Lightning Fast Performance"],
  },
  {
    title: "Education & School Portals",
    icon: <GraduationCap className="w-8 h-8" />,
    desc: "Comprehensive digital platforms for schools, colleges, and training institutes.",
    points: ["Online Admissions System", "Student & Course Management", "Result & Dashboard Portals", "Admin Control Panel", "Secure Authentication", "Mobile Responsive"],
  },
  {
    title: "Restaurant & Food Delivery",
    icon: <Utensils className="w-8 h-8" />,
    desc: "Beautiful online presence for restaurants with digital menus and ordering systems.",
    points: ["Digital Menu System", "Online Table Booking", "Food Ordering Integration", "Google Maps Integration", "WhatsApp Ordering", "Mobile Optimized"],
  },
  {
    title: "E-Commerce Solutions",
    icon: <ShoppingCart className="w-8 h-8" />,
    desc: "Full-featured online stores with secure payments and inventory management.",
    points: ["Product Catalog Management", "Secure Payment Gateway", "Order Tracking System", "Advanced Admin Dashboard", "Multi-Vendor Ready", "SEO & Performance Optimized"],
  },
  {
    title: "Custom SaaS & Web Applications",
    icon: <Code className="w-8 h-8" />,
    desc: "Enterprise-grade custom software and SaaS platforms tailored to your needs.",
    points: ["Next.js & MERN Stack", "Secure Authentication", "REST & GraphQL APIs", "Database Architecture", "Cloud Deployment", "AI/ML Integrations"],
  },
];

/* ================= PROJECTS ================= */
const PROJECTS = [
  {
    title: "Professional Portfolio",
    image: "/projects/Potfolio2.png",
    live: "https://mohammedkhan.dev/",
    tech: ["Next.js", "Framer Motion", "SEO"],
  },
  {
    title: "Corporate Landing Page",
    image: "/projects/Businesslandingpage2.png",
    live: "https://stackratechnologies.com/",
    tech: ["Next.js", "SEO"],
  },
  {
    title: "School Result Portal",
    image: "/projects/Schoolresultportal.png",
    live: "https://tssscpreresult.vercel.app/",
    tech: ["Next.js", "Tailwind", "SEO"],
  },
  {
    title: "AI Food Delivery Platform",
    image: "/projects/food.png",
    live: "https://food-delivery-app-zomoto.vercel.app/",
    tech: ["MERN", "AI"],
  },
  {
    title: "Learning Management System",
    image: "/projects/LMS5.png",
    live: "https://lms-sandy-six.vercel.app/",
    tech: ["MERN Stack"],
  },
  {
    title: "AI Powered E-Commerce",
    image: "/projects/AI Ecommerce25.png",
    live: "https://gocart-xqlp.vercel.app/",
    tech: ["Next.js", "AI"],
  },
];

export default function Home() {
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
        }, 2500);
      }
    }, 50);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, roleIndex, isPaused]);

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/bg/hero-bg-10.png" alt="Modern technology background" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(at_center,#4f46e510_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white tracking-widest">STACKRA TECHNOLOGIES</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-white">
              Digital Excellence
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Delivered
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              We craft high-performance websites, SaaS platforms, and AI-powered solutions that help ambitious businesses scale in the digital age.
            </p>
          </motion.div>

          {/* Typing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="h-20 flex items-center justify-center mb-12"
          >
            <p className="text-2xl md:text-3xl font-medium text-white/90 min-h-[3.5rem] tracking-tight">
              {text}
              <span className="animate-pulse text-indigo-400">|</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="#projects" className="group bg-white text-gray-950 hover:bg-white/90 px-10 py-4 rounded-2xl font-semibold text-lg transition-all active:scale-95 flex items-center justify-center gap-2">
              View Our Work
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>
            <a href="#contact" className="group border border-white/60 hover:bg-white/10 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all active:scale-95 backdrop-blur-sm">
              Get Your Free Proposal
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/70">
            <div className="flex items-center gap-2"><span className="text-emerald-400">●</span> Next.js</div>
            <div className="flex items-center gap-2"><span className="text-emerald-400">●</span> MERN</div>
            <div className="flex items-center gap-2"><span className="text-emerald-400">●</span> AI Integration</div>
            <div className="flex items-center gap-2"><span className="text-emerald-400">●</span> Enterprise Ready</div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm flex flex-col items-center gap-1">
          Scroll to explore
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* ================= ABOUT SECTION (WITH VIDEO) ================= */}
      <section id="about" className="py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="uppercase tracking-[3px] text-indigo-600 font-medium mb-4">ABOUT US</div>
              <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-8">
                Your Trusted Technology Partner
              </h2>

              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  STACKRA TECHNOLOGIES is a premium software development company specializing in building modern, scalable, and high-converting digital experiences.
                </p>
                <p>
                  With expertise in Next.js, MERN stack, AI integrations, and cloud architecture, we deliver solutions that not only look exceptional but drive measurable business results.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-8">
                {[
                  { number: "50+", label: "Projects Delivered" },
                  { number: "98%", label: "Client Retention" },
                  { number: "24", label: "Months Average Partnership" },
                  { number: "4.9/5", label: "Average Rating" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl font-bold text-indigo-600">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - VIDEO (Replaced placeholder) */}
            <div className="hidden md:block">
              <AboutVideo />
            </div>
          </div>

          {/* LEADERSHIP SECTION */}
          <div className="max-w-5xl mx-auto mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold tracking-tight">Leadership</h2>
              <p className="mt-3 text-xl text-gray-600">Vision meets execution</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Founder Card */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 border border-gray-100 rounded-3xl p-10">
                <Image src="/profile/profile3.jpg" alt="Mohammed Khan - Founder" width={120} height={120} className="rounded-2xl mb-8" />
                <h3 className="text-2xl font-semibold mb-1">Mohammed Khan</h3>
                <p className="text-indigo-600 font-medium">Founder & Full Stack Software Engineer</p>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Passionate about building technology that matters. With deep expertise in full-stack development and modern web architecture, I lead every project with a focus on quality, performance, and long-term business impact.
                </p>
                <a href="https://wa.me/9542355897" target="_blank" className="mt-8 inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl hover:bg-indigo-700 transition">
                  <MessageCircle className="w-5 h-5" /> Schedule a Call
                </a>
              </motion.div>

              {/* Chairman Card */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gray-50 border border-gray-100 rounded-3xl p-10">
                <Image src="/profile/chairman.jpg" alt="Mahboob Khan - Chairman" width={120} height={120} className="rounded-2xl mb-8" />
                <h3 className="text-2xl font-semibold mb-1">Mahboob Khan</h3>
                <p className="text-indigo-600 font-medium">Chairman</p>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Mahboob Khan serves as Chairman, bringing practical business wisdom and a strong commitment to values-driven leadership. His guidance ensures Stackra Technologies stays grounded in integrity while pursuing meaningful, long-term impact through technology.
                </p>
                <a href="https://wa.me/+918978110989" target="_blank" className="mt-8 inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl hover:bg-indigo-700 transition">
                  <MessageCircle className="w-5 h-5" /> Schedule a Call
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="uppercase text-indigo-600 tracking-widest text-sm font-medium">EXPERTISE</div>
            <h2 className="text-5xl font-bold mt-3">Services We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl border border-gray-100 hover:border-indigo-200 transition-all group">
                <div className="text-indigo-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8">{service.desc}</p>
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Featured Projects</h2>
            <p className="mt-4 text-xl text-gray-600">Real results for real businesses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="relative h-64">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="font-semibold text-2xl mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-100 px-3 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full bg-gray-900 text-white py-3 rounded-2xl hover:bg-black transition">
                    View Live Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Let&apos;s Build Something Great Together</h2>
          <p className="text-xl text-gray-600 mb-12">Fill out the form below and our team will get back to you within 24 hours with a custom proposal.</p>

          <div className="w-full max-w-3xl mx-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfAID8OYwPFID3gqmt3FzbTZBklpFgw-bXMdMmiAnCT56RVow/viewform?embedded=true"
              className="w-full h-[820px] md:h-[780px] border-0 rounded-3xl shadow-xl"
              title="Project Inquiry Form"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Having trouble with the form?{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfAID8OYwPFID3gqmt3FzbTZBklpFgw-bXMdMmiAnCT56RVow/viewform" target="_blank" className="text-indigo-600 hover:underline">
              Open in new tab
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo/logo5.png" alt="STACKRA TECHNOLOGIES" width={50} height={50} className="rounded-xl" />
              <span className="text-white font-bold text-2xl tracking-tight">STACKRA TECHNOLOGIES</span>
            </div>
            <p className="max-w-md">Premium web development and AI solutions company based in India. Building the future of digital experiences.</p>
          </div>

          <div className="flex flex-col md:items-end gap-8">
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/stackra-technologies" target="_blank" className="hover:text-white transition"><Linkedin /></a>
              <a href="https://www.instagram.com/stackra_technologies" target="_blank" className="hover:text-white transition"><Instagram /></a>
              <a href="https://wa.me/9542355897" target="_blank" className="hover:text-white transition"><Phone /></a>
            </div>
            <div>
              <p>© {new Date().getFullYear()} STACKRA TECHNOLOGIES. All Rights Reserved.</p>
              <p className="text-xs mt-2">Designed & Developed by Mohammed Khan</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/9542355897" target="_blank" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50" aria-label="Chat on WhatsApp">
        <MessageCircle size={28} />
      </a>
    </main>
  );
}