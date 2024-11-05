// src/components/Header.js
import React from 'react';
import backgroundVideo from '../../assets/video/backgroundHeader.mp4';

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
  };

  const contentStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const titleStyle = {
    color: 'var(--textPrimary)',
    fontFamily: 'Lufga, sans-serif',
    fontWeight: 600,
    fontSize: '32px',
    margin: 0,
  };

  return (
    <header style={headerStyle}>
      <video style={videoStyle} src={backgroundVideo} autoPlay loop muted playsInline></video>
      <div style={overlayStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>Mi Aplicación</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
