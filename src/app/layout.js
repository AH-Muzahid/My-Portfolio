import { Inter, Syne } from 'next/font/google';

import ClientLayout from '@/Components/components/ClientLayout';
import './globals.css';
import SmoothScroll from '@/Components/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <SmoothScroll>
          <ClientLayout>
            {children}
          </ClientLayout>
        </SmoothScroll>
      </body>
    </html>
  );
}