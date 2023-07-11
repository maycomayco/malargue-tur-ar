import Hero from "@/app/components/Hero"
import { getAccomodationsBySlug } from "@/services/getAccomodationBySlug"
import { FaWhatsapp } from 'react-icons/fa'
import ContactCell from "./components/ContactCell"

type Props = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Props) {
  const { slug } = params

  const accomodation = await getAccomodationsBySlug({ slug })
  if (!accomodation) {
    return <p className="mt-10 text-center">Sorry, no accomodation available.</p>
  }
  const { name, description, image, contactInfo, mapURL } = accomodation

  return (
    <>
      <Hero title={name} imageSrc={image} imageAlt={name} />
      <div className="max-w-screen-2xl mx-auto px-8">
        <section className="text-lg max-w-prose mx-auto py-12 px-8">
          {/* TODO: aceptar contenido HTML aca para poder formatear el contenido, una idea puede ser aceptar dos columenas */}
          {description}
        </section>
        <section className="bg-green py-12 px-8 rounded-lg">
          <h2 className="uppercase text-2xl font-bold text-white">Datos de contacto</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8 pt-6">
            <ContactCell info={contactInfo} />
          </div>
        </section>
        <section className="py-12 px-8">
          <h2 className="uppercase text-2xl font-bold text-green">Ubicacion</h2>
          <iframe className="pt-8" src={mapURL} width="100%" height="450" style={{ 'border': 0 }} loading="lazy"></iframe>
        </section>
        <section className="p-12 px-8">
          <h2 className="uppercase text-2xl font-bold text-green">Galería de imágenes</h2>
          {/* TODO: hace galeria de imagenes */}
        </section>
      </div>
    </>
  )
}