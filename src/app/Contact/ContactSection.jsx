"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import AboutImage from '@/../public/assets/About2.png';
import { motion } from 'framer-motion';
import ContactModal from '@/Components/components/ContactModal';

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className=" w-full md:py-32 py-10 bg-[#2b2b2b] relative overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">

            {/* Background Decoration - center circles */}
            <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/assets/contact cercle.webp"
                    alt="Contact"
                    width={400}
                    height={400}
                    className="object-cover object-center opacity-60" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center mt-10">

                {/* Top Title "Work With Us" - Top Layer */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-[55px] md:text-[100px] lg:text-[150px] font-bold text-[#00d150] tracking-tighter z-30 relative"
                >
                    Let&apos;s Work
                </motion.h2>

                {/* Middle Section: Text Behind Image */}
                <div className="relative w-full flex items-center justify-center mt-[-20px] md:mt-[-70px]">

                    {/* "TOGETHER" Outlined Text - Layer 1 (Behind Image) */}
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute text-[55px] md:text-[100px] lg:text-[150px] font-black tracking-widest uppercase select-none z-10"
                        style={{
                            WebkitTextStroke: '1px #00d150', // Green outline
                            color: '#2b2b2b',
                        }}
                    >
                        To<span className="text-transparent">gether</span>
                    </motion.h2>

                    {/* Central Portrait Image - Layer 2 (Front)  */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative z-5 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center rounded-full overflow-hidden shadow-2xl md:-top-7"
                    >
                        <Image
                            src={AboutImage}
                            alt="Contact Portrait"
                            fill
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </motion.div>
                </div>

                {/* Bottom Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 md:mt-16 z-30 relative"
                >
                    <button onClick={() => setIsModalOpen(true)} className="px-10 py-4 rounded-full border border-[#00d150] text-[#00d150] hover:bg-[#00d150] hover:text-white transition-all duration-300 text-sm md:text-lg uppercase tracking-widest font-semibold">
                        Contact Now
                    </button>
                </motion.div>

            </div>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
