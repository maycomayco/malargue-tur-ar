import { Metadata } from 'next'
import Navbar from './components/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from './components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  // title: "Jhon's Blog",
  // description: 'Created by Jhon Doe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-neutral-100`}>
        <Navbar />
        <main className="mx-auto min-h-screen">
          {/* <main className='px-4 md:px-6 prose prose-xl prose-slate mx-auto'> */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
