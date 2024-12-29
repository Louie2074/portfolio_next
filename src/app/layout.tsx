import { Poppins, Playfair_Display } from 'next/font/google'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { SocialLinks } from '@/components/social-links'
import { Navbar } from '@/components/navbar';
import './globals.css'

const poppins = Poppins({ 
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Louis Nguyen - Portfolio',
  description: 'Web Developer Portfolio',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans bg-gray-900 text-white`}
      >
        <Navbar />

        <main className="pt-16">{children}</main>
        <SocialLinks />
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} Louis Nguyen. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
