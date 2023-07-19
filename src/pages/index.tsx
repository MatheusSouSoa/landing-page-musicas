import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import Inicio from '@/components/inicio/Inicio'
import Cursos from '@/components/cursos/Cursos'
import EventosContato from '@/components/EventosContato/EventosContato'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex px-4 md:px-20 flex-col items-center bg-orange-200  ">
      <div className="w-full border-l-4 border-r-4 border-zinc-500">
        <Header />
        <Inicio />
        <Cursos />
        <EventosContato/>
      </div>
    </main>
  );
}
