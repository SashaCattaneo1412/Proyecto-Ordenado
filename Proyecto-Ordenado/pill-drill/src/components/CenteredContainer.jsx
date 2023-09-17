
const CenteredContainer = ({ children }) => {
  return (
    <div className="centered-container">
      {children}
      <style jsx>{`
        .centered-container {
          width: 65%; /* Ancho deseado del contenedor */
          margin: 0 auto; /* Centrar horizontalmente en la pantalla */
          display: flex; /* Usar flexbox para centrar verticalmente los elementos */
          justify-content: center; /* Centrar horizontalmente */
          align-items: center; /* Centrar verticalmente */
          height: 500px; /* Altura deseada del contenedor */
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(2px);
          padding: 20px; /* Espacio interior alrededor del contenido */
          border-radius: 95px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Sombra ligera */
        }

        .inner-content {
          text-align: right; /* Alinear elementos a la derecha del contenedor */
        }
      `}</style>
    </div>
  );
};

export default CenteredContainer;
