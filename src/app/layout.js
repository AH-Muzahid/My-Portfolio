import { Inter, Syne } from 'next/font/google';

import ClientLayout from '@/Components/components/ClientLayout';
import './globals.css';
import SmoothScroll from '@/Components/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

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