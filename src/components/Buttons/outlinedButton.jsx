// src/components/Button.js
import React from 'react';
// import { ThemeContext } from '../../context/themeContext';

const OutLineButton = ({ text, onClick }) => {
    // const { theme } = useContext(ThemeContext);

    const buttonStyle = {
        backgroundColor: 'var(--primary)', // Color de fondo según el diseño de la imagen
        color: 'var(--textButton)', // Color del texto para que contraste bien con el fondo
        padding: '10px 20px',
        border: 'none',
        borderRadius: '15px',
        fontSize: '16px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    };

    const hoverStyle = {
        backgroundColor: '#a3cc00' // Color al pasar el mouse
    };

    const activeStyle = {
        backgroundColor: '#8fb800' // Color al hacer clic
    };

    return (
        <button
            style={buttonStyle}
            onClick={onClick}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
            onMouseDown={(e) => e.currentTarget.style.backgroundColor = activeStyle.backgroundColor}
            onMouseUp={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
        >
            {text}
        </button>
    );
};

export default OutLineButton;
