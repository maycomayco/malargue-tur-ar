'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import { FaBars, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTimes } from "react-icons/fa";

// TODO: mover este menu afuera a otro archivo
const navLinks = [
  {
    href: "/",
    name: "Acerca de"
  },
  {
    href: "/",
    name: "Que hacer"
  },
  {
    href: "/",
    name: "Que visitar"
  },
  {
    href: "/donde-dormir",
    name: "Donde dormir"
  },
  {
    href: "/",
    name: "Donde comer"
  }
]

const srcLogoMobile = 'https://turismo.malargue.gov.ar/newstart/wp-content/uploads/2021/06/malargue-turismo-violeta-sin-fondo.png'

/* 
TODO:
- no es reponsive
*/

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpened(!mobileMenuOpened)
  }

  return (
    <header className="bg-white w-full top-0 left-0 border-gray-200 flex relative justify-between items-center md:items-stretch px-4 md:px-0 ease-in duration-300 z-50">
      {/* logo */}
      <div className="flex py-3 md:bg-green md:py-0 items-center">
        <div className="md:px-3">
          <Link href="/" className="flex items-center">
            <Image src="https://turismo.malargue.gov.ar/newstart/wp-content/uploads/2017/08/malargue-turismo-blanco-sin-fondo.png" width={140} height={140} alt="Malargue mobile logo" className="hidden md:block" />
            <Image src={srcLogoMobile} width={140} height={140} alt="Malargue Logo" className="md:hidden" />
          </Link>
        </div>
      </div>

      {/* header right */}
      <div className="hidden grow flex-col md:flex">
        {/* header right top */}
        <div className="hidden md:block">
          {/* header right - top - left */}
          <div className="flex bg-black text-white text-xs p-1 h-10 items-center">
            <div className="flex gap-2 px-3 items-center">
              <FaPhoneAlt className="h-4 w-4 text-purple" />
              <span>+5492604801708</span>
            </div>
            <div className="flex gap-2 px-3 items-center">
              <FaMapMarkerAlt className="h-4 w-4 text-purple" />
              <span>Pasaje la Orteguina, M5613 Malargüe, Mendoza</span>
            </div>
            <div className="flex gap-2 px-3 items-center">
              <FaEnvelope className="h-4 w-4 text-purple" />
              <span>infoturismomalargue@gmail.com</span>
            </div>
            {/* iconos */}
            <div></div>
          </div>
          {/* header right - top - right */}
          {/* faltan los iconos de social media */}
        </div>
        {/* header right bottom */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-sm" id="navbar-sticky">
          <ul className="flex flex-col grow p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white justify-between">
            {
              navLinks.map((link, idx) => {
                const isActive = pathname.includes(link.href) && link.href !== '/'
                return (
                  <li key={idx} className="flex grow text-center">
                    <Link
                      href={link.href}
                      className={`py-5 rounded hover:bg-gray-100 md:hover:bg-transparent uppercase w-full md:hover:text-purple ${isActive ? 'text-purple' : 'text-gray-900'}`}
                      aria-current="page"
                    >
                      {link.name}
                    </Link>
                  </li>)
              })
            }
          </ul>
        </div>
      </div>

      {/* hamburger button */}
      <div className="block md:hidden z-10 md:items-center md:right-0 ease-in duration-300" onClick={toggleMenu}>
        {mobileMenuOpened
          ? <FaTimes size={30} className="text-gray-700" />
          : <FaBars size={30} className="text-gray-700" />
        }
      </div>

      <section
        className={`${mobileMenuOpened ? 'absolute' : 'hidden'} top-0 left-0 w-full h-screen bg-white text-xl font-bold ease-in duration-300`}
      >
        <nav className="flex flex-col min-h-screen justify-center items-center " aria-label="mobile">
          {/* <ul> */}
          <Link
            href={'/'}
            className={`w-full py-6 text-center hover:opacity-90 md:hover:text-purple `}
            aria-current="page"
            onClick={toggleMenu}
          >
            Home
          </Link>
          {
            navLinks.map((link, idx) => {
              const isActive = pathname.includes(link.href) && link.href !== '/'
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`w-full py-6 text-center hover:opacity-90 md:hover:text-purple ${isActive ? 'text-purple' : 'text-gray-900'}`}
                  aria-current="page"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              )
            })
          }
          {/* </ul> */}
        </nav>
      </section>
    </header >

  )
}

