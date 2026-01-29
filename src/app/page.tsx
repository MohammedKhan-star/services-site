"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Rocket, Users } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* HERO SECTION */}
      <section className="pw-gradient text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
          >
            ProjectWorks Web Agency
          </motion.h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            High-conversion websites, SaaS platforms & scalable products for startups, founders & businesses.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#pricing"
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold shadow-lg"
            >
              View Pricing
            </Link>
            <Link
              href="#contact"
              className="border border-white/40 px-8 py-4 rounded-xl font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Our Core Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="pw-glass p-8 rounded-3xl shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="text-green-400" size={18} /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM PACKAGES / OFFERING SECTION */}
      <section className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700">
            Custom Packages & Recommendations
          </h2>
          <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">
            Not sure which plan fits your needs? We provide personalized packages based on your business goals, budget, and growth plans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {customPackages.map((pack, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="pw-glass p-6 rounded-3xl shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-3 text-indigo-600">{pack.title}</h3>
                <p className="text-muted-foreground mb-4">{pack.desc}</p>
                <ul className="space-y-2 text-sm">
                  {pack.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="text-green-500" size={16} /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://wa.me/919542355897"
                  className="block mt-6 bg-indigo-600 text-white py-3 rounded-xl font-semibold"
                >
                  Discuss Your Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Website Pricing</h2>
          <p className="text-center text-muted-foreground mt-3">
            Clear pricing. No hidden charges.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-14">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`pw-glass p-6 rounded-3xl text-center ${
                  plan.popular && "ring-2 ring-indigo-500"
                }`}
              >
                {plan.popular && (
                  <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <p className="mt-3 text-sm uppercase text-muted-foreground">
                  {plan.type}
                </p>

                <h3 className="text-xl font-semibold mt-2">{plan.name}</h3>

                {/* Market Price */}
                {plan.marketPrice && (
                  <p className="mt-4 text-sm text-muted-foreground line-through">
                    ₹{plan.marketPrice}
                  </p>
                )}

                {/* Actual Price */}
                <p className="mt-1 text-3xl font-bold text-indigo-600">
                  ₹{plan.price}
                </p>

                {/* Save Amount */}
                {plan.marketPrice && (
                  <p className="text-sm text-green-600 mt-1 font-medium">
                    You Save: ₹
                    {parseInt(plan.marketPrice.replace(/\D/g, '')) -
                      parseInt(plan.price.replace(/\D/g, ''))}
                  </p>
                )}

                <p className="text-sm text-green-600 mt-2">
                  Best for: {plan.bestFor}
                </p>

                <Link
                  href="https://wa.me/919542355897"
                  className="block mt-6 bg-indigo-600 text-white py-3 rounded-xl font-semibold"
                >
                  Get This Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-24 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Ready to Build Your Website?
        </h2>
        <p className="mt-4 text-white/90">
          Talk to us today and get a free consultation.
        </p>
        <Link
          href="https://wa.me/919542355897"
          className="inline-block mt-8 bg-white text-indigo-600 px-10 py-4 rounded-xl font-semibold shadow-lg"
        >
          Chat on WhatsApp
        </Link>
      </section>
    </main>
  );
}

/* SERVICES DATA */
const services = [
  {
    title: "Business Websites & Landing Pages",
    desc: "High‑conversion, SEO‑optimized business websites designed to generate real leads and sales.",
    points: [
      "Custom UI/UX (Figma → Code)",
      "SEO + Google Indexing",
      "Fast Performance (Core Web Vitals)",
      "WhatsApp & Contact Form Leads",
      "Mobile‑First Responsive Design",
    ],
  },
  {
    title: "E‑Commerce Applications",
    desc: "Scalable MERN & Next.js e‑commerce platforms built for real‑world businesses.",
    points: [
      "Product & Order Management",
      "Cart, Checkout & Payments",
      "Admin Dashboard",
      "Authentication & Security",
      "Deployment + Domain Setup",
    ],
  },
  {
    title: "LMS, SaaS & Full‑Stack Apps",
    desc: "Advanced platforms for startups, creators, and growing companies.",
    points: [
      "Role‑Based Authentication",
      "Dashboards & Analytics",
      "API Integrations",
      "Cloud Deployment",
      "Scalable Architecture",
    ],
  },
];

/* CUSTOM PACKAGES DATA */
const customPackages = [
  {
    title: "Startup Package",
    desc: "Perfect for small businesses or first-time online presence.",
    features: ["Custom Design Consultation", "Basic SEO & Analytics", "Responsive Mobile Layouts"],
  },
  {
    title: "Growth Package",
    desc: "Ideal for growing companies looking to scale online.",
    features: ["E-commerce Integration", "Email & Contact Forms", "Performance Optimization"],
  },
  {
    title: "Enterprise Package",
    desc: "Advanced solution for startups & SaaS platforms with custom needs.",
    features: ["Full-Stack Application", "Payment Gateway & APIs", "Cloud Deployment & Scalability"],
  },
];

/* PRICING DATA */
const pricing = [
  {
    type: "Static Website",
    name: "Basic",
    price: "5,000",
    marketPrice: "8,000",
    bestFor: "Portfolios",
  },
  {
    type: "Dynamic Website",
    name: "Starter",
    price: "12,000",
    marketPrice: "18,000",
    bestFor: "Small Businesses",
  },
  {
    type: "Business Website",
    name: "Business Pro",
    price: "25,000",
    marketPrice: "35,000",
    bestFor: "Growing Companies",
    popular: true,
  },
  {
    type: "Full-Stack Website",
    name: "Full-Stack App",
    price: "45,000",
    marketPrice: "70,000",
    bestFor: "Advanced Needs",
  },
  {
    type: "Enterprise App",
    name: "Enterprise",
    price: "1,00,000",
    marketPrice: "1,80,000",
    bestFor: "Startups & SaaS",
  },
];

/* TRUST DATA */
const trust = [
  {
    icon: ShieldCheck,
    title: "Trusted & Secure",
    desc: "Professional development with best security practices.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "Quick turnaround without compromising quality.",
  },
  {
    icon: Users,
    title: "Client Focused",
    desc: "We build exactly what your business needs.",
  },
];
