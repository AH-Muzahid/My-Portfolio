import { Inter, Syne } from 'next/font/google';

import ClientLayout from '@/Components/components/ClientLayout';
import './globals.css';
import SmoothScroll from '@/Components/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: "Muzahid | Full Stack Developer",
  description: "Portfolio of Ali Hasan Muzahid, a Full Stack Developer specializing in MERN Stack and Next.js.",
  icons: {
    icon: "/assets/logo.png", // Using the logo from assets
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
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