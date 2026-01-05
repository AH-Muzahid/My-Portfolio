"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
            <div>
              <Image
                className="w-13"
                src="/logo.png" alt="logo" width={100} height={100} />
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <ul className="hidden md:flex items-center gap-6 text-[14px] font-medium text-zinc-300 tracking-tight">
            <li><Link href="#about" className="transform-gpu transition-transform duration-500 perspective-1000 hover:-translate-y-1 hover:scale-105">About</Link></li>
            <li><Link href="#project" className="transform-gpu transition-transform duration-500 perspective-1000 hover:-translate-y-1 hover:scale-105">Project</Link></li>
            <li><Link href="#service" className="transform-gpu transition-transform duration-500 perspective-1000 hover:-translate-y-1 hover:scale-105">Service</Link></li>
            <li><Link href="#pricing" className="transform-gpu transition-transform duration-500 perspective-1000 hover:-translate-y-1 hover:scale-105">Pricing</Link></li>
            <li><Link href="#gallery" className="transform-gpu transition-transform duration-500 perspective-1000 hover:-translate-y-1 hover:scale-105">Gallery</Link></li>
          </ul>

          {/* Contact Button - Desktop */}
          <button className="hidden md:block primary-btn hover:bg-white/90 transition-all duration-500 hover:scale-99">
            Contact
          </button>

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
              {['About', 'Works', 'Service', 'Pricing', 'Gallery'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href="#"
                    className="block py-3 px-4 text-zinc-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 text-lg font-medium"
                    onClick={toggleMenu}
                  >
                    {item}
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
                  href="#"
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