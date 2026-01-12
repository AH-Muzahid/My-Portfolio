import { Inter, Syne } from 'next/font/google';

import ClientLayout from '@/Components/components/ClientLayout';
import './globals.css';
import SmoothScroll from '@/Components/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  metadataBase: new URL('https://muzahid.vercel.app'),
  title: {
    default: "Muzahid - Ali Hasan Muzahid | Full Stack Developer Portfolio",
    template: "%s | Muzahid - Ali Hasan Muzahid"
  },
  description: "Muzahid (Ali Hasan Muzahid) - Professional Full Stack Developer from Dhaka, Bangladesh. Expert in MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js, and modern web development. Muzahid specializes in building scalable, high-performance web applications. Portfolio showcasing projects by Muzahid.",
  keywords: [
    // Primary Keywords
    "Muzahid", "Ali Hasan Muzahid", "AH Muzahid", "Muzahid Developer", "Muzahid Portfolio",
    // Work-related
    "Muzahid Work", "Muzahid Projects", "Muzahid Web Developer", "Muzahid Full Stack",
    // Location-based
    "Muzahid Bangladesh", "Muzahid Dhaka", "Web Developer Dhaka Bangladesh",
    // Technology-specific
    "Muzahid MERN Stack", "Muzahid Next.js", "Muzahid React", "Muzahid Node.js",
    // Professional titles
    "Full Stack Developer", "MERN Stack Developer", "Next.js Developer", "React Developer",
    "JavaScript Developer", "Web Developer Bangladesh", "Software Engineer Bangladesh",
    // General
    "Ali Hasan Muzahid Portfolio", "Muzahid Dev", "Muzahid Software Engineer"
  ],
  authors: [{ name: "Ali Hasan Muzahid (Muzahid)" }],
  creator: "Muzahid - Ali Hasan Muzahid",
  publisher: "Ali Hasan Muzahid",
  openGraph: {
    title: "Muzahid - Ali Hasan Muzahid | Full Stack Developer Portfolio",
    description: "Muzahid is a professional Full Stack Developer specializing in MERN Stack and Next.js. Building scalable, high-performance web applications. Portfolio by Muzahid (Ali Hasan Muzahid).",
    url: 'https://muzahid.vercel.app',
    siteName: 'Muzahid Portfolio - Ali Hasan Muzahid',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muzahid - Ali Hasan Muzahid - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Muzahid - Ali Hasan Muzahid | Full Stack Developer",
    description: "Muzahid specializes in building scalable web applications with MERN Stack and Next.js. Portfolio by Ali Hasan Muzahid.",
    images: ['/assets/og-image.png'],
    creator: "@AHMuzahid",
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data for "Person"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ali Hasan Muzahid",
    "alternateName": ["Muzahid", "AH Muzahid", "Muzahid Developer"],
    "url": "https://muzahid.vercel.app",
    "image": "https://muzahid.vercel.app/assets/About2.png",
    "sameAs": [
      "https://github.com/AH-Muzahid",
      "https://www.facebook.com/ah.muzahid.2025/",
      "https://www.linkedin.com/in/ali-hasan-muzahid/"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Self-Employed"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    },
    "description": "Muzahid (Ali Hasan Muzahid) is a Full Stack Developer from Dhaka, Bangladesh, specializing in MERN Stack (MongoDB, Express.js, React.js, Node.js) and Next.js. Expert in building scalable, high-performance web applications.",
    "knowsAbout": ["MERN Stack", "Next.js", "React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "Web Development", "Full Stack Development"]
  };

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (sessionStorage.getItem("hasVisited_v2")) {
                    document.body.classList.add("no-preloader");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <SmoothScroll>
          <ClientLayout>
            {children}
          </ClientLayout>
        </SmoothScroll>
      </body>
    </html>
  );
}