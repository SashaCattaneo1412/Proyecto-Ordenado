import React from 'react'
import style from '../styles/compartimiento.module.css'
import Button from '../components/Buttons';
import Link from 'next/link';
function compartimiento() {
  return (

    <form>
    <h1 className={style.title}>Seleccione el compartimiento</h1>
    <div className={style.container}>
    <div className={style.containerimg}>
        <div className={style.botonComp1}>
        <Link href="/compartimiento1">
       
          <img
            src='/Image/btn1.png' // Reemplaza con la ruta correcta de tu imagen
            alt="Botón"
            className="boton-imagen"
          />
       
      </Link>
        </div> <br />
        <div className={style.botonComp2}>
        <Link href="/compartimiento2">
        <img
            src='/Image/btn2.png' // Reemplaza con la ruta correcta de tu imagen
            alt="Botón"
            className="boton-imagen"
          /> 
       </Link>
        </div> <br />
    </div>

    <div className={style.containerimg}>
    <div className={style.botonComp3}>
        <Link href="/compartimiento3">
        <img
            src='/Image/btn3.png' // Reemplaza con la ruta correcta de tu imagen
            alt="Botón"
            className="boton-imagen"
          /> 
       </Link> 
     </div> <br />
     <div className={style.botonComp4}>
     <Link href="/compartimiento3">
        <img
            src='/Image/btn4.png' // Reemplaza con la ruta correcta de tu imagen
            alt="Botón"
            className="boton-imagen"
          /> 
       </Link> 
        </div> <br />
    </div>

    </div>
    </form>
   

  )
}

export default compartimiento
