import React from "react";
import CookieConsent from "react-cookie-consent";

const Footer = () => {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        cookieName="cookie-consent"
        style={{ background: "#202023", height: "55px" }}
        buttonStyle={{
          color: "#000",
          fontSize: "15px",
          backgroundColor: "#eacb48",
          marginRight: "800px",
          borderRadius: "5px",
        }}
        expires={150}
      >
        Este sitio web utiliza cookies para garantizar que obtengas la mejor
        experiencia en nuestro sitio web.
      </CookieConsent>
    </div>
  );
};

export default Footer;
