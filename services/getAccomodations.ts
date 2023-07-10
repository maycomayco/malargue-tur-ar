const data = require('@/db/accomodations.json')

export async function getAccomodationsMeta(): Promise<AccomodationMeta[] | undefined> {
  if (!data) return undefined

  return data
} 