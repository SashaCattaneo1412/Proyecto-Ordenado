import style from '../Styles/HeaderB.module.css';
import Link from 'next/link';
import Image from 'next/image'
const HeaderB = () => {
  return (
    <header className={style.headerB}>
       <div className={style.barra}>
        <Link href="/">
          <Image width={180} height={150} src="/Image/LOGO1.png" alt="Imagen Logo" />
        </Link>
         </div>

         <h1 className={style.title}>{pageTitle}</h1>

       
    </header>
  )
}

export default HeaderB