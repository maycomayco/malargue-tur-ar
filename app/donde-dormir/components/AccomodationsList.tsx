import { getAccomodationsMeta } from "@/services/getAccomodations"
import AccomodationItem from "./AccomodationItem"

export default async function AccomodationsList() {
  const accomodations = await getAccomodationsMeta()

  if (accomodations?.length === 0) return <p className="">Sorry, no accomodations available.</p>

  return (
    <section className="py-8">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8 justify-stretch ">
        {accomodations?.map((accomodation) => (
          <AccomodationItem key={accomodation.slug} accomodation={accomodation} />
        ))}
      </ul>
    </section>
  )
}