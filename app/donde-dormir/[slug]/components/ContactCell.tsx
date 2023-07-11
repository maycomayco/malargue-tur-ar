import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  info: ContactInfo
}

export default function ContactCell({ info }: Props) {
  const iterableInfo = Object.entries(info)

  return (
    <>
      {
        iterableInfo.map(([key, value]) => {
          if (!value) return null

          return (
            <Link href={value} key={key} className="group p-4 md:p-6 w-full mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
              <div className="shrink-0">
                <FaWhatsapp className="inline-block text-xl md:text-4xl text-green group-hover:text-purple transition-colors" />
              </div>
              <p className="text-zinc-600 group-hover:text-zinc-700 transition-colors text-sm md:text-base">{value.substring(0, 20)}</p>
            </Link>
          )
        })
      }
    </>
  )
}