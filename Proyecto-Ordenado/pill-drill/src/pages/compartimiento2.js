import React from 'react'
import CenteredContainer from '../components/CenteredContainer';
import style from '../styles/compartimiento1.module.css';
import Image from 'next/image'
import Link from 'next/link';
import Dropdown from '../components/dropdown';
import Dropdown1 from '../components/Dropdown1';

const compartimiento2 = () => {
  return (
    <div>
      <div  className={style.img}>
      <Image width={400} height={750} src="/Image/compartimiento2.png" alt="Imagen comp1" /> 
      </div>
      <CenteredContainer> 
      <form className="form-container">
      <div className={style.label}>
      <div className={style.contenedorflotante}>
        <label htmlFor="name">Nombre de la pastilla: </label>
        <input type="text" id="NOMBRE" name="name" />
      </div> <br/>
      <div className="form-group">
        <label htmlFor="Horario"> Horario en el que se toma: </label>
        <Dropdown />
       
      </div> <br/>
      <div className="form-group">
        <label htmlFor="cuanto"> Por cuantos dias se toma? </label>
        <Dropdown1  />
        <label htmlFor="dias"> Todos los dias? </label>
         SI <input className={style.checkbox} type="checkbox" value="yes" /> 
      </div><br/>
      <div className="form-group">
        <label htmlFor="Alarma">Deseas usar una alarma? </label>
          SI <input className={style.checkbox} type="checkbox" value="yes" /> 
          NO <input className={style.checkbox} type="checkbox" value="yes" /> 
        
      </div>
      </div>
      <div className={style.guardar}>
        <Link href="/compartimiento">
            <div className={style.labelguardar}>Guardar</div>
        </Link>
        </div>

    </form>
      </CenteredContainer>

    </div>
  )
}

export default compartimiento2
