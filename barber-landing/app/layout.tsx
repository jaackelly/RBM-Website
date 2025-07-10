import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Rising Barber Mentorship | Scale Your Business to $20k+ Per Month",
  description: "FREE TRAINING: Learn the easiest & fastest way to scale your barber business to $20k+ per month. Watch our exclusive training video and book your strategy call today.",
  keywords: "barber business, barbering training, barber mentorship, scale barber business, barber marketing, barber coaching, barber success, business growth",
  authors: [{ name: "Rising Barber Mentorship" }],
  creator: "Rising Barber Mentorship",
  publisher: "Rising Barber Mentorship",
  metadataBase: new URL('https://jdbarber.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Rising Barber Mentorship | Scale Your Business to $20k+ Per Month",
    description: "FREE TRAINING: Learn the easiest & fastest way to scale your barber business to $20k+ per month.",
    url: 'https://jdbarber.com',
    siteName: 'Rising Barber Mentorship',
    images: [
      {
        url: '/images/rbmIcon.png',
        width: 1200,
        height: 630,
        alt: 'Rising Barber Mentorship Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rising Barber Mentorship | Scale Your Business to $20k+ Per Month',
    description: 'FREE TRAINING: Learn the easiest & fastest way to scale your barber business to $20k+ per month.',
    images: ['/images/rbmIcon.png'],
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
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
