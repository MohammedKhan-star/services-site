"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const desktopSections = ["about", "services", "project", "pricing", "contact"];
const mobileSections = ["project", "contact"]; // ONLY TWO

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      desktopSections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Disable background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white/95 backdrop-blur shadow-md" : "bg-transparent"}`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/logo.png"
              alt="ProjectWorksStudio"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span
              className={`hidden md:inline text-2xl font-extrabold transition
              ${scrolled ? "text-indigo-600" : "text-white"}`}
            >
              ProjectWorks
              <span className={scrolled ? "text-gray-900" : "text-white"}>
                Studio
              </span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 font-medium">
            {desktopSections.map((id) => (
              <button
                key={id}
                onClick={() => handleScroll(id)}
                className={`relative transition
                ${
                  active === id
                    ? "text-indigo-600"
                    : scrolled
                    ? "text-gray-700 hover:text-indigo-600"
                    : "text-white hover:text-indigo-200"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                {active === id && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-indigo-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* MOBILE MENU ICON */}
          <button onClick={() => setOpen(true)} className="md:hidden">
            <Menu
              size={28}
              className={scrolled ? "text-gray-900" : "text-white"}
            />
          </button>
        </nav>
      </header>

      {/* MOBILE FULL SCREEN MENU */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6"
          >
            <X size={32} className="text-gray-900" />
          </button>

          {mobileSections.map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="text-2xl font-semibold text-gray-900 hover:text-indigo-600"
            >
              {id.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
