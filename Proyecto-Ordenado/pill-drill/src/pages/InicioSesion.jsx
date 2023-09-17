import React , { useRef, useState }from 'react'
import Layout from '../components/Layout'
 import Link from 'next/link';
 import style from '../styles/SignUp.module.css';
 import Image from 'next/image';
 import PhotoCarousel from '../components/PhotoCarousel';

 const images = [
  '/Image/1.png',
  '/Image/3.png',
  '/Image/2.png',
];


 const InicioSesion = () => {

  const form = useRef();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
   
  const iniciosesion = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/InicioSesion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail, password }),
      });

      if (response.ok) {
        // La solicitud fue exitosa, puedes realizar alguna acción aquí si es necesario.
        console.log('Inicio sesion exitoso');
        history.push('/compartimiento');
      } else {
        // La solicitud falló, manejar el error aquí si es necesario.
        console.error('Error al inicio de sesion');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };



   return (

    <div>
       <PhotoCarousel images={images} /> 
        <form ref={form}>
         <div className={style.flexbox}>
         
          <h1 className={style.title}></h1>

          <div className={style.contenedorflotante}>
            <input type="INPUT" className="form-control" id="floatingInput" placeholder="Mail" onChange={(event) => setMail(event.target.value)} />
          </div>


            <div className={style.contenedorflotante}>
            <input type="password" className="form-control" id="floatingPassword" placeholder=" Contraseña"  onChange={(event) => setPassword(event.target.value)} /> 
            </div>
         
     

          <div className={style.seguimiento}>
          <div>
            <label className={style.cuenta}>
            ¿Olvidaste tu contraseña? 
            </label>
            <Link href="/InicioSesion"> Recuperala</Link>
          </div>

          <div>
            <label className={style.cuenta}>
            ¿No tenes cuenta?
            </label>
            <Link href="/Registrarse">  Crea cuenta nueva</Link>
          </div>
          </div>
          
          
          <button className={style.IR} onClick={InicioSesion}>IR</button> <br />
         
          </div>
         </form>
       


      



    </div>
   )
 }
 
 export default InicioSesion