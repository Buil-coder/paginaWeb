// src/components/Button.js
import React from 'react';
import { ThemeContext } from '../context/ThemeContext';


const OutLineButton = ({ text, onClick }) => {
    const { theme } = useContext(ThemeContext);

    const buttonStyle = {
        backgroundColor: theme.primary, // Color de fondo similar al de la imagen
        color: theme.textPrimary, // Color del texto
        padding: '10px 20px', // Tamaño del botón
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    };

    const hoverStyle = {
        backgroundColor: '#b8e600'
    };

    const activeStyle = {
        backgroundColor: '#a3cc00'
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
