import Image from "next/image"
import Link from "next/link"

type Props = {
  accomodation: AccomodationMeta
}
export default function AccomodationItem({ accomodation }: Props) {
  const { name, description, image } = accomodation

  return (
    <li className="flex flex-col py-4">
      <div className="flex flex-col items-center">
        <div className="group transition-all">
          <Link href={`/donde-dormir/${accomodation.slug}`}>
            <h2 className="text-heading text-2xl font-bold text-center pb-2 group-hover:text-purple">
              {name}
            </h2>
            <Image src={image} alt={name} width={400} height={400} className="rounded drop-shadow-lg group-hover:brightness-110" />
          </Link>
        </div>
      </div>
    </li>
  )
}