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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="hidden md:block text-2xl font-bold text-indigo-600">
            ProjectWorks<span className="text-gray-900">Studio</span>
          </span>
        </Link>
        {/* Typing effect */} <motion.div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className="mt-6 h-14 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} > <p className="text-lg md:text-2xl font-medium bg-gradient-to-r from-white via-cyan-200 to-indigo-100 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)]"> {text} <span className="ml-1 animate-blink">|</span> </p> </motion.div>

        <div className="hidden md:flex gap-8 font-medium">
          {["about","services","project","pricing","contact"].map((i)=>(
            <button key={i} onClick={()=>scrollTo(i)} className="hover:text-indigo-600">
              {i.charAt(0).toUpperCase()+i.slice(1)}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={()=>setOpen(!open)}>
          {open ? <X/> : <Menu/>}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white py-6 flex flex-col items-center gap-4">
          {["about","services","project","pricing","contact"].map((i)=>(
            <button key={i} onClick={()=>scrollTo(i)}>
              {i}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

/* ================= DATA ================= */
/* ================= DATA ================= */ const roles = [ "Full Stack Web Developer helping businesses and startups build modern, scalable, and high-performing web applications", "Experience building AI-powered, scalable web applications", "End-to-end development: frontend, backend, APIs, and deployment", "Specialized in MERN stack, Next.js, and OpenAI API integrations", "Passionate about clean code, responsive design, and intuitive UX", "We can build, deploy, and maintain real production applications.", ];

const SERVICES = [ { title: "Portfolio Websites", icon: <Store />, desc: "Modern personal and professional portfolio websites for developers, freelancers and job seekers.", points: [ "Custom UI Design", "Projects Showcase", "Resume Download", "Contact Form", "Mobile Responsive", "SEO Ready" ] }, { title: "Business Websites", icon: <Users />, desc: "Professional websites designed to help businesses attract more customers and grow online.", points: [ "Professional Design", "SEO Optimization", "Google Maps Integration", "WhatsApp Chat Button", "Fast Loading", "Lead Generation Forms" ] }, { title: "Education Websites", icon: <GraduationCap />, desc: "Complete websites for schools, colleges and institutes with student management features.", points: [ "Admissions Forms", "Courses Management", "Student Dashboard", "Results Portal", "Admin Panel", "Mobile Friendly" ] }, { title: "Restaurant & Food Websites", icon: <Utensils />, desc: "Beautiful websites for restaurants, cafes and food businesses to attract more customers.", points: [ "Digital Menu", "Online Orders", "Table Booking", "Google Maps Location", "Mobile Responsive", "WhatsApp Orders" ] }, { title: "E-Commerce Stores", icon: <ShoppingCart />, desc: "Complete online stores with product management and secure payment systems.", points: [ "Product Management", "Shopping Cart", "Online Payment Gateway", "Order Tracking", "Admin Dashboard", "SEO Optimized" ] }, { title: "Custom Full-Stack Applications", icon: <Code />, desc: "Advanced web applications and SaaS platforms built using modern technologies.", points: [ "MERN / Next.js Development", "Authentication System", "REST APIs", "Database Integration", "Admin Dashboard", "Cloud Deployment" ] } ];

const PROJECTS = [
{title:"Portfolio",image:"/projects/Portfolio.png",live:"https://mohammedkhan.dev/",tech:["Next.js"]},
{title:"School Result Portal",image:"/projects/SchoolResult.png",live:"https://tssscpreresult.vercel.app/",tech:["Next.js"]},
{title:"Business Landing Page",image:"/projects/Businesslandingpage.png",live:"https://projectworkstudio.mohammedkhan.dev/",tech:["Next.js"]},
{title:"AI Food Delivery",image:"/projects/food.png",live:"https://food-delivery-app-zomoto.vercel.app/",tech:["MERN","AI"]},
{title:"Learning Management System",image:"/projects/LMS5.png",live:"https://lms-sandy-six.vercel.app/",tech:["MERN"]},
{title:"AI E-Commerce",image:"/projects/AI Ecommerce25.png",live:"https://gocart-xqlp.vercel.app/",tech:["Next.js","AI"]},
{title:"YouTube Clone",image:"/projects/Youtubeclone1.png",live:"https://youtube-clone-4-glwf.onrender.com/",tech:["React"]},
{title:"NXTTRENDZ Store",image:"/projects/ecommerce.png",live:"https://khannxttreandz.ccbp.tech/",tech:["React"]},
];

const TECH = ["Next.js","React","Node.js","MongoDB","AI","Stripe"];

const PRICING = [
{name:"Basic Website",price:"₹999",market:"₹5000",features:["1 Page","Responsive","Contact Form"]},
{name:"Portfolio",price:"₹1500",market:"₹8000",features:["3 Pages","Projects","SEO"]},
{name:"Portfolio Pro",price:"₹3000",market:"₹15000",features:["Animations","Analytics","5 Pages"]},
{name:"Business Landing",price:"₹12000",market:"₹25000",features:["Lead Forms","Maps","WhatsApp"]},
{name:"E-Commerce",price:"₹25000",market:"₹60000",features:["Products","Payments","Admin"]},
{name:"Full Stack App",price:"₹45000",market:"₹120000",features:["Database","API","Auth"]}
];

const DOMAINS = [ { name: ".com", price: "₹899 / year", description: "Most popular global domain for businesses and startups." }, { name: ".in", price: "₹699 / year", description: "Best for businesses targeting customers in India." }, { name: ".dev", price: "₹3,499 / year", description: "Perfect for developers and tech portfolios." }, { name: ".tech", price: "₹2,999 / year", description: "Modern domain used by technology startups." }, { name: ".store", price: "₹2,499 / year", description: "Best for e-commerce websites and online shops." }, { name: ".online", price: "₹1,999 / year", description: "Good for digital businesses and personal brands." } ];

/* ================= PAGE ================= */

export default function Page(){

return(
<main className="bg-white text-slate-600">

<Navbar/>

{/* HERO */}

<section className="pt-40 pb-32 text-center bg-gradient-to-br from-slate-900 via-indigo-800 to-cyan-500 text-white px-6">

<motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}}
className="text-5xl md:text-6xl font-bold">

ProjectWorksStudio

</motion.h1>

<p className="mt-6 text-lg">Launch your website in <b>7-10 days</b></p>

<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

<Link href="#pricing" className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">

View Pricing

</Link>

<Link href="#project" className="bg-indigo-700 px-6 py-3 rounded-xl">

Projects

</Link>

</div>

</section>


{/* ABOUT */}

<section id="about" className="py-24 max-w-6xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold mb-6 text-indigo-600">

About Us

</h2>

<p className="text-slate-600 leading-relaxed">

ProjectWorksStudio is a founder-led web development studio by <b>Mohammed Khan</b>.
We build modern websites, SaaS platforms and full-stack web applications for startups and businesses.

</p>

</section>


{/* SERVICES */}

<section id="services" className="py-24 bg-slate-50 px-6">

<h2 className="text-4xl font-bold text-center mb-12">Services</h2>

<div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

{SERVICES.map((s,i)=>(

<motion.div key={i} whileHover={{y:-5}}
className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

<div className="text-indigo-600 mb-4">{s.icon}</div>

<h3 className="font-semibold text-xl">{s.title}</h3>

<p className="text-slate-600 mt-2">{s.desc}</p>

<ul className="mt-4 space-y-2 text-sm">

{s.points.map((p,j)=>(

<li key={j} className="flex gap-2"><Check size={16}/> {p}</li>

))}

</ul>

</motion.div>

))}

</div>

</section>


{/* PROJECTS */}

<section id="project" className="py-24">

<h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

{PROJECTS.map((p,i)=>(

<div key={i} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden">

<Image src={p.image} alt={p.title} width={500} height={300} className="w-full h-48 object-cover"/>

<div className="p-6">

<h3 className="font-semibold">{p.title}</h3>

<div className="flex gap-2 mt-3 flex-wrap">

{p.tech.map((t,j)=>(

<span key={j} className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">{t}</span>

))}

</div>

<a href={p.live} target="_blank" className="block mt-4 bg-indigo-600 text-white py-2 rounded-xl text-center">

View Live

</a>

</div>

</div>

))}

</div>

</section>


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

<h2 className="text-4xl font-bold text-center mb-12">Domain Pricing</h2>

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
)
}
