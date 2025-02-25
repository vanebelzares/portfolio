import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import { Toaster } from 'react-hot-toast';
import { PostHogProvider } from './providers'


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vanessa Belzares - Data Analyst Portfolio',
  description: 'Professional portfolio of Vanessa Belzares, Data Analyst',
  icons: {
    icon: [
      {
        url: '/logo_vb.png',
        sizes: '32x32',
      },
      {
        url: '/logo_vb.png',
        sizes: '64x64',
      },
      {
        url: '/logo_vb.png',
        sizes: '192x192',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PostHogProvider>
        <Header />
        <main>{children}</main>
        <Toaster position="bottom-right" />
        </PostHogProvider>
      </body>
    </html>
  );
}