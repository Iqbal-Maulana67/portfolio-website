import type { Metadata } from 'next';
import { Geist, Geist_Mono, Poppins } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import BodyBackground from '@/components/v2/body/BodyBackground';
import Navbar from '@/components/v2/nav/navbar';
import { Analytics } from '@vercel/analytics/next';
import FooterPage from './v2/_pages/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Moch. Iqbal Maulana Fiekri - Fullstack Developer',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
      >
        <Analytics />
        <BodyBackground />
        <Navbar />
        <Providers>{children}</Providers>
        <FooterPage />
      </body>
    </html>
  );
}
