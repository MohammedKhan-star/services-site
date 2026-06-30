"use client";

import React, { useState } from 'react';
import { toast } from 'sonner';
import { ArrowRight, Loader2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Website Development',
    budget: '₹3L – ₹8L',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace this with real API call (Resend, Formspree, or your own backend)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    toast.success("Thank you! We've received your request.", {
      description: "Our team will contact you within 2 hours to schedule a strategy call.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'Website Development',
      budget: '₹3L – ₹8L',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-[#05080f] py-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[3px] font-mono text-cyan-400 mb-2">
            LET'S BUILD SOMETHING GREAT TOGETHER
          </div>
          <h2 className="text-5xl font-semibold tracking-[-2px] mb-3">
            {siteConfig.cta.title}
          </h2>
          <p className="text-xl text-white/70 max-w-md mx-auto">
            {siteConfig.cta.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-9 md:p-12 border border-white/10 space-y-6"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs tracking-widest text-white/60 block mb-1.5">YOUR NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-focus w-full bg-[#0a0f1e] border border-white/20 rounded-2xl px-5 py-3.5 text-base placeholder:text-white/40"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="text-xs tracking-widest text-white/60 block mb-1.5">BUSINESS EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-focus w-full bg-[#0a0f1e] border border-white/20 rounded-2xl px-5 py-3.5 text-base placeholder:text-white/40"
                placeholder="you@company.com"
              />
            </div>
          </div>

          {/* Phone + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs tracking-widest text-white/60 block mb-1.5">PHONE / WHATSAPP</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-focus w-full bg-[#0a0f1e] border border-white/20 rounded-2xl px-5 py-3.5 text-base placeholder:text-white/40"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="text-xs tracking-widest text-white/60 block mb-1.5">COMPANY / ORGANIZATION</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="input-focus w-full bg-[#0a0f1e] border border-white/20 rounded-2xl px-5 py-3.5 text-base placeholder:text-white/40"
                placeholder="Your Company Name"
              />
            </div>
          </div>

          {/* Service + Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs tracking-widest text-white/60 block mb-1.5">SERVICE YOU'RE INTERESTED IN</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="input-focus w-full bg-[#0a0f1e] border border-white/20 rounded-2xl px-5 py-3.5 text-base text-white"
              >
                <option>Website Development</option>
                <option>Business / Corporate Website</option>
                <option>School / Education Portal</option>
                <option>Restaurant / Food Delivery Platform</option>
                <option>E-Commerce Solution</option>
                <option>Custom SaaS / Web Application</option>
                <option>Other (Please specify in message)</option>
              </select>
            </div>

            <div>
              <label className="text-xs tracking-widest text-white/60 block mb-1.5">ESTIMATED PROJECT BUDGET</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="input-focus w-full bg-[#0a0f1e] border border-white/20 rounded-2xl px-5 py-3.5 text-base text-white"
              >
                <option>₹1.5L – ₹3L</option>
                <option>₹3L – ₹8L</option>
                <option>₹8L – ₹15L</option>
                <option>₹15L+</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-xs tracking-widest text-white/60 block mb-1.5">TELL US ABOUT YOUR PROJECT</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="input-focus w-full bg-[#0a0f1e] border border-white/20 rounded-3xl px-5 py-4 text-base resize-y placeholder:text-white/40"
              placeholder="We're looking for a modern corporate website with lead generation, WhatsApp integration, and strong SEO performance..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-cyan-400 active:bg-white text-black font-semibold py-4 rounded-2xl text-base transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                {siteConfig.cta.button}
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-white/50">
            We typically respond within 2 hours during business days.
          </p>
        </form>
      </div>
    </section>
  );
}