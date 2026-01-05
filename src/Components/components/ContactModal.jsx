"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "@/Components/ui/Modal";
import { Button } from "@/Components/ui/Button";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaGithub } from "react-icons/fa";
import { Dock, DockIcon } from "@/Components/ui/dock";

export default function ContactModal({ isOpen, onClose }) {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setLoading(false);
            toast.error("Configuration Error: Check .env file", { theme: "dark" });
            return;
        }

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setLoading(false);
                    toast.success("Message sent successfully!", {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    });
                    setTimeout(() => {
                        onClose();
                    }, 3500);
                    e.target.reset();
                },
                (error) => {
                    setLoading(false);
                    toast.error(`Failed: ${error.text || "Unknown error"}`, { theme: "dark" });
                    console.error("EmailJS Error:", error);
                }
            );
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Let's Connect with Muzahid" size="lg">
            <div className="space-y-6">
                {/* Social Dock - Horizontal */}
                <div className="flex justify-center pb-4 border-b border-white/10">
                    <Dock magnification={60} distance={100} className="mt-0 border-none ">
                        {[
                            { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/ali-hasan-muzahid/' },
                            { icon: <FaWhatsapp />, url: 'https://wa.me/01312009084' },
                            { icon: <FaFacebook />, url: 'https://www.facebook.com/ah.muzahid.2025/' },
                            { icon: <FaGithub />, url: 'https://github.com/AH-Muzahid' }
                        ].map((social, index) => (
                            <DockIcon key={index} className="bg-white/5 hover:bg-white/10 text-[#00d150] transition-colors">
                                <a href={social.url} target="_blank" rel="noopener noreferrer" className="w-full h-full p-2.5 flex items-center justify-center">
                                    <span className="w-full h-full text-2xl flex items-center justify-center">{social.icon}</span>
                                </a>
                            </DockIcon>
                        ))}
                    </Dock>
                </div>

                {/* Form */}
                <form ref={form} onSubmit={sendEmail} className="space-y-4 text-left">

                    <div>
                        <label htmlFor="user_name" className="block text-sm font-medium text-zinc-400 mb-1">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            required
                            className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:border-[#00d150] focus:ring-1 focus:ring-[#00d150] text-zinc-200 placeholder-zinc-500 transition-colors"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="user_email" className="block text-sm font-medium text-zinc-400 mb-1">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            required
                            className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:border-[#00d150] focus:ring-1 focus:ring-[#00d150] text-zinc-200 placeholder-zinc-500 transition-colors"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">
                            Message *
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:border-[#00d150] focus:ring-1 focus:ring-[#00d150] text-zinc-200 placeholder-zinc-500 resize-none transition-colors"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <div className="flex justify-end space-x-3 pt-4 border-t border-white/10">
                        <Button type="button" onClick={onClose} variant="ghost" className="text-zinc-400 hover:text-white hover:bg-white/5">
                            Cancel
                        </Button>
                        <Button type="submit" disabled={loading} className="bg-[#00d150] hover:bg-[#00d150]/90 text-black font-semibold min-w-[120px]">
                            {loading ? "Sending..." : "Send Message"}
                        </Button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </Modal>
    );
}
