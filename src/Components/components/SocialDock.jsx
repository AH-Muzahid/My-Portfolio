"use client";

import { FaLinkedin, FaWhatsapp, FaFacebook, FaGithub } from "react-icons/fa";
import { Dock, DockIcon } from "@/Components/ui/dock";

export default function SocialDock() {
    return (
        <div className="hidden md:flex absolute -top-80 left-0 z-50">
            <Dock magnification={50} distance={100} direction="vertical" className="mt-0 border-none bg-transparent">
                {[
                    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/ali-hasan-muzahid/' },
                    { icon: <FaWhatsapp />, url: 'https://wa.me/01312009084' },
                    { icon: <FaFacebook />, url: 'https://www.facebook.com/ah.muzahid.2025/' },
                    { icon: <FaGithub />, url: 'https://github.com/AH-Muzahid' }
                ].map((social, index) => (
                    <DockIcon key={index} className="bg-white/5 hover:bg-white/10 text-[#00d150] hover:text-[#fff] transition-colors">
                        <a href={social.url} target="_blank" rel="noopener noreferrer" className="w-full h-full p-2.5 flex items-center justify-center">
                            <span className="w-full h-full text-2xl flex items-center justify-center">{social.icon}</span>
                        </a>
                    </DockIcon>
                ))}
            </Dock>
        </div>
    );
}
