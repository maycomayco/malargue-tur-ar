import Hero from "@/app/components/Hero";
import AccomodationsList from "./components/AccomodationsList";

export default function Accomodations() {
  return (
    <>
      <Hero title="Accomodations" imageSrc="https://turismo.malargue.gov.ar/newstart/wp-content/uploads/2021/06/reloj-malargue.jpg" imageAlt='Reloj malargüe' />
      <div className="max-w-screen-2xl mx-auto">
        <AccomodationsList />
      </div>
    </>
  )
}