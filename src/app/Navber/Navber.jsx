"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Project', href: '#project' },
  { name: 'Service', href: '#service' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Handle Navbar background
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle Active Section
      const sections = navLinks.map(link => document.querySelector(link.href));

      let current = "";
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) { // Offset for navbar height + buffer
            current = "#" + section.getAttribute("id");
          }
        }
      });

      // Special case for top of page
      if (window.scrollY < 100) {
        current = "#home";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 w-full z-50 px-4">
        <nav className={`max-w-5xl h-16 mx-auto transition-all duration-500 ease-in-out backdrop-blur-md border border-[#ffffff2e] rounded-full p-2 flex items-center justify-between shadow-[0_0_5px_rgba(207,200,200,0.4)] ${isScrolled ? 'bg-[#12271a]/80' : 'bg-[#12271a]'
          }`}>

          {/* Logo Area */}
          <div className="flex items-center pl-4">
            <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                className="w-12 h-auto"
                src="/assets/logo.png" alt="logo" width={100} height={100} />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <ul className="hidden md:flex items-center gap-6 text-[14px] font-medium tracking-tight">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`transform-gpu transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${activeSection === link.href ? "text-[#00d150] font-bold" : "text-zinc-300 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button - Desktop */}
          <Link href="#contact" className="hidden md:block primary-btn hover:bg-white/90 transition-all duration-500 hover:scale-99">
            Contact
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 pr-4"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block transition-all duration-300"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white block transition-all duration-300"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block transition-all duration-300"
            />
          </button>

        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-21 left-1/2 transform -translate-x-1/2 w-full bg-[#154628] border border-[#ffffff2e] rounded-3xl p-6 shadow-2xl backdrop-blur-md z-50 md:hidden"
          >
            <ul className="flex flex-col gap-4 text-center">
              {navLinks.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-3 px-4 rounded-xl transition-all duration-300 text-lg font-medium ${activeSection === item.href ? "text-[#00d150] bg-white/10" : "text-zinc-300 hover:text-white hover:bg-white/10"
                      }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="border-t border-white/20 pt-4 mt-2"
              >
                <Link
                  href="#contact"
                  className="primary-btn hover:bg-white/90 rounded-full transition-all duration-300 text-lg"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}