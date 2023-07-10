type ContactInfo = {
  address: string;
  phone: string;
  whatsapp?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
}
type AccomodationMeta = {
  name: string;
  slug: string;
  image: string;
  mapURL: string;
  description: string;
  contactInfo: ContactInfo
}