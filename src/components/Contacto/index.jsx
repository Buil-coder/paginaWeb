import React from "react";

// Estilos en línea para el formulario de contacto
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    minHeight: "100vh",
    backgroundImage: "url('/assets/img/contact/contacto.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
  },
  formContainer: {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  halfInputWrapper: {
    width: "calc(50% - 10px)",
    marginBottom: "15px",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0)", // Fondo transparente
    border: "1px solid #fff", // Bordes blancos
    borderRadius: "5px",
    padding: "10px 15px",
    color: "#fff", // Texto blanco
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
  },
  textareaWrapper: {
    width: "100%",
    marginBottom: "15px",
  },
  textarea: {
    backgroundColor: "rgba(255, 255, 255, 0)", // Fondo transparente
    border: "1px solid #fff", // Bordes blancos
    borderRadius: "5px",
    padding: "10px 15px",
    color: "#fff", // Texto blanco
    fontSize: "16px",
    width: "100%",
    minHeight: "100px",
    boxSizing: "border-box",
  },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#00ff00", // Botón verde
    color: "#000",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    width: "280px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  },
  contactInfoContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Centrar verticalmente
    alignItems: "center",
    padding: "40px",
  },
  contactInfo: {
    color: "#fff", // Texto blanco
    fontSize: "18px",
    textAlign: "center",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
  icon: {
    color: "#fff",
    fontSize: "24px",
  },
  // Media queries para pantallas móviles
  "@media (max-width: 767px)": {
    container: {
      flexDirection: "column",
    },
    formContainer: {
      padding: "20px",
    },
    contactInfoContainer: {
      padding: "20px",
    },
  },
};

export default function Contacto() {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={{ color: "#fff", textAlign: "center" }}>
          Construyamos tu proyecto juntos
        </h2>
        <form style={styles.form}>
          <div style={styles.halfInputWrapper}>
            <input type="text" placeholder="Nombre" style={styles.input} />
          </div>
          <div style={styles.halfInputWrapper}>
            <input type="email" placeholder="Correo" style={styles.input} />
          </div>
          <div style={styles.halfInputWrapper}>
            <input type="text" placeholder="Celular" style={styles.input} />
          </div>
          <div style={styles.halfInputWrapper}>
            <input type="text" placeholder="Empresa" style={styles.input} />
          </div>
          <div style={styles.textareaWrapper}>
            <textarea placeholder="Mensaje" style={styles.textarea}></textarea>
          </div>
          <div style={styles.buttonWrapper}>
            <button type="submit" style={styles.button}>
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div style={styles.contactInfoContainer}>
        <div style={styles.contactInfo}>
          <p>Whatsapp: 999 999 999</p>
          <p>Correo: contacto@buildcds.com</p>
          <div style={styles.socialIcons}>
            {/* Reemplaza con tus íconos, por ejemplo, FontAwesome o similar */}
            <i className="fab fa-facebook" style={styles.icon}></i>
            <i className="fab fa-instagram" style={styles.icon}></i>
            <i className="fab fa-twitter" style={styles.icon}></i>
            <i className="fab fa-linkedin" style={styles.icon}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
