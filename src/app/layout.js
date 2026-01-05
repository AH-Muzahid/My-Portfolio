import { Inter, Syne } from 'next/font/google';

import './globals.css';
import SmoothScroll from '@/Components/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <SmoothScroll>
        {children}
        </SmoothScroll>
        </body>
    </html>
  );
}