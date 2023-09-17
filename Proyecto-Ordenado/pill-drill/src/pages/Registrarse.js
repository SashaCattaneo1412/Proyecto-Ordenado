import React, { useRef, useState } from 'react';
import Link from 'next/link';
import style from '../styles/Registrarse.module.css';
import Button from '../components/Buttons';

const Registrarse = () => {
  const form = useRef();
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const registrarse = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/registrarse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, mail, password }),
      });

      if (response.ok) {
        // La solicitud fue exitosa, puedes realizar alguna acción aquí si es necesario.
        console.log('Registro exitoso');
        history.push('/InicioSesion');
      } else {
        // La solicitud falló, manejar el error aquí si es necesario.
        console.error('Error al registrar');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <form ref={form}>
      <div className={style.flexbox}>
        <h1 className={style.title}></h1>

        <div className={style.contenedorflotante}>
          <input type="input" className="form-control" id="floatingInput1" placeholder="Nombre Completo" onChange={(event) => setNombre(event.target.value)} />
        </div>

        <div className={style.contenedorflotante}>
          <input type="input" className="form-control" id="floatingInput2" placeholder="nombre@ejemplo.com" onChange={(event) => setMail(event.target.value)} />
        </div>

        <div className={style.contenedorflotante}>
          <input type="password" className="form-control" id="floatingPassword1" placeholder="Contraseña" onChange={(event) => setPassword(event.target.value)} />
        </div>

        <div className={style.contenedorflotante}>
          <input type="password" className="form-control" id="floatingPassword2" placeholder="Repita la Contraseña" />
        </div>
     
        </div>
    
        <label className={style.seguimiento}>
        Hay alguna persona que te hará un seguimiento en tu app?
          </label>
      

        <div className={style.checkBox}>
          
            <input type="checkbox" value="yes" /> SI
         
        </div>

        <div className={style.container}>
        <button className={style.IR} onClick={registrarse}>IR</button> <br />

      

        <div>
            <label className={style.cuenta}>
            ¿Tenes una cuenta?
            </label>
            <Link href="/InicioSesion">  Iniciar Sesion</Link>
          
          </div>
     

          </div>
    </form>
  );
};

export default Registrarse;