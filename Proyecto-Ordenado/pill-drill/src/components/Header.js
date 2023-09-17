import style from '../Styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image'
const Header = () => {
  return (
    <header className={style.header}>
       <div className="contenedor">
       <div className={style.barra}>
        <Link href="/">
          <Image width={180} height={150} src="/Image/LOGO1.png" alt="Imagen Logo" />
        </Link>
         <nav className={style.navegacion}>
            <Link href="/Registrarse"> Registrarse </Link>
            <Link href="/InicioSesion"> Inicio de sesion </Link>
            <Link href="/DispensarPasti"> Pastillas </Link>
            <Link href="/compartimiento"> compartimiento</Link>
         </nav>
         </div>
       </div> 
    </header>
  )
}

export default Header
