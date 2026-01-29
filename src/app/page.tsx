"use client";

import { motion } from "framer-motion";
import { Check, Star, ShieldCheck, Rocket, Users } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* HERO SECTION */}
      <section className="pw-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
          >
            Professional Websites Starting at ₹5,000
          </motion.h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            We build modern, fast & scalable websites that help businesses
            attract customers and grow online.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#pricing"
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold shadow-lg"
            >
              View Pricing
            </Link>
            <Link
              href="https://wa.me/919542355897"
              className="border border-white/40 px-8 py-4 rounded-xl font-semibold"
            >
              WhatsApp Now
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Why Choose ProjectWorks?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {trust.map((item, i) => (
              <div key={i} className="pw-glass p-6 rounded-3xl text-center">
                <item.icon className="mx-auto text-indigo-600" size={36} />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            What We Build
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="pw-glass p-6 rounded-3xl shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.desc}</p>
                <ul className="space-y-2 text-sm">
                  {service.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <Check className="text-green-500" size={16} /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Website Pricing
          </h2>
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
      <section className="py-24 bg-indigo-600 text-white text-center">
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

/* TRUST */
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

/* SERVICES */
const services = [
  {
    title: "Static & Business Websites",
    desc: "Professional websites for individuals and small businesses.",
    points: ["Mobile Responsive", "SEO Ready", "Fast Loading"],
  },
  {
    title: "Dynamic & CMS Websites",
    desc: "Editable websites with admin panel.",
    points: ["Admin Dashboard", "Lead Forms", "Analytics"],
  },
  {
    title: "Full-Stack Applications",
    desc: "Advanced MERN & Next.js solutions.",
    points: ["Authentication", "APIs", "Scalable Design"],
  },
];

/* PRICING */
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
