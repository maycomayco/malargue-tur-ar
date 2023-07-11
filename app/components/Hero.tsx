import Image from "next/image";
import { blurDataUrl } from "@/utils/constants";

type Props = {
  title: string,
  titleSecondLine?: string,
  imageSrc: string,
  imageAlt: string
}


export default function Hero({ title = 'Title is missing', titleSecondLine, imageSrc = '/images/hero.jpg', imageAlt = 'Image alt is missing' }: Props) {

  return (
    <section className="flex items-center justify-center h-[600px] overflow-hidden w-full relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900/70  to-neutral-900/10 z-10"></div>
      <Image
        className="absolute"
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        placeholder="blur"
        blurDataURL={blurDataUrl}
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute text-center text-white z-20">
        <h1 className="text-white text-[70px] font-black drop-shadow-2xl shadow-black">{title}<br /><span className="uppercase">{titleSecondLine}</span></h1>
      </div>
    </section>
  )
}