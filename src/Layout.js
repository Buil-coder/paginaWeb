// src/Layout.js
import React from "react";
import Partners from "./components/Partners";
import Contacto from "./components/Contacto";

const Layout = () => {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <Partners />
      <Contacto />
    </div>
  );
};

export default Layout;
