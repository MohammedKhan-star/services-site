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

const SERVICES = [
{
title:"Portfolio Websites",
icon:<Store/>,
desc:"Modern personal portfolios",
points:["Custom UI","Projects Showcase","Contact Form"]
},
{
title:"Business Websites",
icon:<Users/>,
desc:"Websites that convert visitors",
points:["SEO","Fast Speed","Lead Forms"]
},
{
title:"Education Websites",
icon:<GraduationCap/>,
desc:"School & institute websites",
points:["Admissions","Courses","Dashboard"]
},
{
title:"Restaurant Websites",
icon:<Utensils/>,
desc:"Restaurant digital presence",
points:["Menu","Orders","Booking"]
},
{
title:"E-Commerce Stores",
icon:<ShoppingCart/>,
desc:"Complete online stores",
points:["Payments","Products","Admin Panel"]
},
{
title:"Full Stack Apps",
icon:<Code/>,
desc:"Advanced SaaS applications",
points:["API","Auth","Deployment"]
}
];

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

const DOMAINS = [
{name:".com",price:"₹899/year"},
{name:".in",price:"₹699/year"},
{name:".dev",price:"₹3499/year"},
{name:".tech",price:"₹2999/year"},
{name:".store",price:"₹2499/year"},
];

/* ================= PAGE ================= */

export default function Page(){

return(
<main className="bg-white text-slate-900">

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
