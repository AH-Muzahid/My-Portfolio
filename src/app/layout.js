import { Inter, Syne } from 'next/font/google';

import ClientLayout from '@/Components/components/ClientLayout';
import './globals.css';
import SmoothScroll from '@/Components/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  metadataBase: new URL('https://muzahid.vercel.app'),
  title: {
    default: "Ali Hasan Muzahid | Full Stack Developer",
    template: "%s | Ali Hasan Muzahid"
  },
  description: "Portfolio of Ali Hasan Muzahid, a passionate Full Stack Developer from Dhaka, Bangladesh, specializing in MERN Stack, Next.js, and modern web solutions.",
  keywords: ["Ali Hasan Muzahid", "Muzahid", "Muzahid Work", "Muzahid Portfolio", "Muzahid Dev", "Full Stack Developer", "MERN Stack Developer", "Web Developer Bangladesh", "Next.js Expert", "React Developer", "Software Engineer"],
  authors: [{ name: "Ali Hasan Muzahid" }],
  creator: "Ali Hasan Muzahid",
  publisher: "Ali Hasan Muzahid",
  openGraph: {
    title: "Ali Hasan Muzahid | Full Stack Developer",
    description: "Building scalable, high-performance web applications with modern technologies.",
    url: 'https://muzahid.vercel.app',
    siteName: 'Ali Hasan Muzahid Portfolio',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'Ali Hasan Muzahid Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ali Hasan Muzahid | Full Stack Developer",
    description: "Building scalable, high-performance web applications with modern technologies.",
    images: ['/assets/logo.png'],
    creator: "@AHMuzahid", // Updated based on likely handle or generic
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
    "alternateName": "Muzahid",
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
    "description": "Full Stack Developer specializing in MERN Stack and Next.js."
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