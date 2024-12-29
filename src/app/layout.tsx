import { Poppins, Playfair_Display } from 'next/font/google'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { SocialLinks } from '@/components/social-links'
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
      
      <body className={`${poppins.variable} ${playfair.variable} font-sans bg-gray-900 text-white`}>
        <header className="bg-gray-800 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold text-purple-400 font-serif">Louis Nguyen</Link>
              <nav>
                <ul className="flex space-x-4">
                  <li><Button variant="ghost" asChild><Link href="#about" className="text-gray-300 hover:text-white">About</Link></Button></li>
                  <li><Button variant="ghost" asChild><Link href="#skills" className="text-gray-300 hover:text-white">Skills</Link></Button></li>
                  <li><Button variant="ghost" asChild><Link href="#experience" className="text-gray-300 hover:text-white">Experience</Link></Button></li>
                  <li><Button variant="ghost" asChild><Link href="#contact" className="text-gray-300 hover:text-white">Contact</Link></Button></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <SocialLinks />
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Louis Nguyen. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
