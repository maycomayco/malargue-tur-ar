const data = require('@/db/accomodations.json')

type Props = {
  slug: string
}

export async function getAccomodationsBySlug({ slug }: Props): Promise<AccomodationMeta | undefined> {
  const filterAccomodation = data.filter((accomodation: AccomodationMeta) => accomodation.slug === slug)

  if (filterAccomodation.length === 0) return undefined

  // retornamos solo el objeto accomodation
  return filterAccomodation[0]
} 