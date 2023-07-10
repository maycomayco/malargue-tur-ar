'use client'

import Image from "next/image";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
import { usePathname } from 'next/navigation'

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

/* 
TODO:
- No funciona el active en el link
- no es reponsive
- no funciona el menu hamburguesa
*/

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 flex">
      {/* logo */}
      <div className="flex bg-green items-center">
        <div className="px-3">
          <Link href="/" className="flex items-center">
            <Image src="https://turismo.malargue.gov.ar/newstart/wp-content/uploads/2017/08/malargue-turismo-blanco-sin-fondo.png" width={140} height={140} alt="Flowbite Logo" />
          </Link>
        </div>
      </div>
      {/* hamburger button */}
      <div className="flex md:hidden">
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      {/* header right */}
      <div className="flex grow flex-col">
        {/* header right top */}
        <div>
          {/* header right - top - left */}
          <div className="flex bg-black text-white text-xs p-1 h-10 items-center">
            <div className="flex gap-2 px-3 items-center">
              <PhoneIcon className="h-4 w-4 text-purple" />
              <span>+5492604801708</span>
            </div>
            <div className="flex gap-2 px-3 items-center">
              <MapPinIcon className="h-4 w-4 text-purple" />
              <span>Pasaje la Orteguina, M5613 Malargüe, Mendoza</span>
            </div>
            <div className="flex gap-2 px-3 items-center">
              <EnvelopeIcon className="h-4 w-4 text-purple" />
              <span>infoturismomalargue@gmail.com</span>
            </div>
            {/* </div> */}
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

    </nav >

  )
}

