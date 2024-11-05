// src/components/Header.js
import React from 'react';
import backgroundVideo from '../../assets/video/backgroundHeader.mp4';
import OutLineButton from '../Buttons/outlinedButton';

const Header = () => {
  const headerStyle = {
    position: 'relative',
    height: '100vh', // Ocupa el 100% de la altura de la pantalla
    overflow: 'hidden',
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Asegura que el video cubra toda el área
    zIndex: -1, // Coloca el video detrás del contenido
  };

  const overlayStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', // Mantiene la superposición en toda la altura del header
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Filtro oscuro semitransparente
    padding: '0 20px', // Asegura que el contenido no esté pegado a los bordes
  };

  const contentStyle = {
    textAlign: 'center',
    color: 'var(--textPrimary)',
    fontFamily: 'Lufga, sans-serif',
    fontWeight: 400,
    fontSize: '2rem',
    marginBottom: '30px', // Espacio extra entre el título y el párrafo
  };

  const titleStyle = {
    color: 'var(--textPrimary)',
    fontSize: '3rem',
    fontWeight: 400,
    lineHeight: '1.2',
    margin: 0,
  };

  const highlightedText = {
    color: 'var(--primary)', // Cambia este color según el color destacado en la imagen
    fontWeight: 500,
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    color: 'var(--textPrimary)',
    marginTop: '60px', // Espacio entre el título y el párrafo
    marginBottom: '80px', // Espacio adicional entre el párrafo y el botón
  };

  return (
    <header style={headerStyle}>
      <video style={videoStyle} src={backgroundVideo} autoPlay loop muted playsInline></video>
      <div style={overlayStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>
            Transformamos tu visión digital <br />
            en <span style={highlightedText}>realidad</span>
          </h1>
          <p style={paragraphStyle}>
            Ofrecemos soluciones tecnológicas personalizadas para empresas que <br />
            buscan un producto de calidad y único
          </p>
          <OutLineButton text="Contáctanos" onClick={() => alert('¡Botón de Contáctanos presionado!')} />
        </div>
      </div>
    </header>
  );
};

export default Header;
