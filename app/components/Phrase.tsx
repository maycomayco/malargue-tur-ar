import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['900', '600'], subsets: ['latin'] })


export default function Phrase() {
  return (
    <div className={`${poppins.className} flex flex-col items-center justify-center h-[500px] bg-green/50 overflow-hidden w-full`}>
      <h1 className="text-[70px] font-black drop-shadow-2xl shadow-black uppercase"># Descrubrí</h1>
      <h2 className="font-bold uppercase tracking-widest">Malargüe es aventura</h2>
    </div>
  )
}