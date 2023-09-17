import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Headercomponent from './Header';
import HeaderB from './HeaderB';

const Layout = ({ children, pagina }) => {
  let pageTitle = '';

  // Establece el título según la página
  if (pagina === 'InicioSesion') {
    pageTitle = 'Bienvenido a Pilldrill';
  } else if (pagina === 'Registrarse') {
    pageTitle = 'Crea cuenta nueva';
  }

  return (
    <div>
      <Head>
        <title> PILL-DRILL - {pagina} </title>
      </Head>

      {/* Utiliza Headercomponent para todas las páginas excepto IniciarSesion y Registrarse */}
      {pagina !== 'InicioSesion' && pagina !== 'Registrarse' ? (
        <Headercomponent />
      ) : (
        <HeaderB pageTitle={pageTitle} />
      )}

      {children}

      
    </div>
  );
};

export default Layout;