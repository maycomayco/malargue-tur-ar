import Image from 'next/image'
import Hero from './components/Hero'
import Phrase from './components/Phrase'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero title='Conecta con' titleSecondLine='Malargüe' imageSrc='/images/hero.jpg' imageAlt='Malargüe naturaleza' />
      <Phrase />
    </main>
  )
}
