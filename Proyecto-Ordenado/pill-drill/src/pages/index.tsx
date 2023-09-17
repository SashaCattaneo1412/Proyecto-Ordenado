import Image from 'next/image'
import { Inter } from 'next/font/google'
import Pastilla1 from "./pastilla1"
import InicioSesion from "./InicioSesion"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <InicioSesion />
    </>
  )
}
