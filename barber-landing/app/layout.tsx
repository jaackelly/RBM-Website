import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Rising Barber Mentorship | Scale Your Business to $20k+ Per Month",
  description: "FREE TRAINING: Learn the easiest & fastest way to scale your barber business to $20k+ per month. Watch our exclusive training video and book your strategy call today.",
  keywords: "barber business, barbering training, barber mentorship, scale barber business, barber marketing",
  authors: [{ name: "Rising Barber Mentorship" }],
  openGraph: {
    title: "Rising Barber Mentorship | Scale Your Business to $20k+ Per Month",
    description: "FREE TRAINING: Learn the easiest & fastest way to scale your barber business to $20k+ per month.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rising Barber Mentorship | Scale Your Business to $20k+ Per Month",
    description: "FREE TRAINING: Learn the easiest & fastest way to scale your barber business to $20k+ per month.",
  },
  robots: "index, follow",
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
