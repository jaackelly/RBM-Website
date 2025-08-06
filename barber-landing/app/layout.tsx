import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "The Dealer's Playbook | Multiple 6 Figures in Sales Commissions",
  description: "Want to take home multiple 6 figures a year in sales commissions without grinding 12+ hours a day? Apply for the Dealer's Playbook and transform your sales career.",
  keywords: "sales training, high ticket sales, sales commissions, sales coaching, sales mentorship, sales success, business growth, sales career",
  authors: [{ name: "The Dealer's Playbook" }],
  creator: "The Dealer's Playbook",
  publisher: "High Ticket Dealers",
  openGraph: {
    title: "The Dealer's Playbook | Multiple 6 Figures in Sales Commissions",
    description: "Want to take home multiple 6 figures a year in sales commissions without grinding 12+ hours a day? Apply for the Dealer's Playbook.",
    siteName: "The Dealer's Playbook",
    images: [
      {
        url: '/images/Dealers_Playbook_Logo.png',
        width: 1200,
        height: 630,
        alt: "The Dealer's Playbook Logo",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Dealer's Playbook | Multiple 6 Figures in Sales Commissions",
    description: 'Want to take home multiple 6 figures a year in sales commissions without grinding 12+ hours a day?',
    images: ['/images/Dealers_Playbook_Logo.png'],
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
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
