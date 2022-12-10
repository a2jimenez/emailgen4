import React from "react";
import {
  MjmlColumn,
  MjmlSection,
  MjmlSocial,
  MjmlSocialElement,
  MjmlTable,
  MjmlText,
} from "mjml-react";

const Footer = ({ newsLang }) => {
  return (
    <MjmlSection background-color="#a1a1a1">
      <MjmlColumn>
        <MjmlTable color="white">
          <tr>
            <td width="33.33%" align="center">
              <a
                href="https://dediabetes.com/filosofia-comidas"
                text-color="white"
                className="link-white"
              >
                {newsLang === "es-es"
                  ? "Filosofía de Comidas"
                  : "Food Philosophy"}
              </a>
            </td>
            <td width="33.33%" align="center" className="link-white">
              <a
                href="https://dediabetes.com/verificacion-contenido"
                text-color="white"
                className="link-white"
              >
                {newsLang === "es-es"
                  ? "Verificación de Contenido"
                  : "Content Verification"}
              </a>
            </td>
            <td width="33.33%" align="center" className="link-white">
              <a
                href="https://dediabetes.com/aviso-legal-politica-privacidad"
                text-color="white"
                className="link-white"
              >
                {newsLang === "es-es"
                  ? "Politica de Privacidad"
                  : "Privacy Policy"}
              </a>
            </td>
          </tr>
        </MjmlTable>
        <MjmlSocial>
          <MjmlSocialElement
            name="facebook"
            href="https://www.facebook.com/cuidadodiabetes"
          ></MjmlSocialElement>
          <MjmlSocialElement
            name="twitter"
            href="https://twitter.com/dediabetescom"
          ></MjmlSocialElement>
        </MjmlSocial>
        <MjmlText color="white" align="center">
          {newsLang === "es-es"
            ? `Está recibiendo este correo electrónico porque ha visitado nuestro
          sitio o nos ha preguntado sobre el boletín informativo regular.
          Asegúrese de que nuestros mensajes lleguen a su bandeja de entrada (y
          no su carpeta de spam).`
            : `You are receiving this email because you have visited our
          site or have asked us about the regular newsletter.
          Make sure our messages reach your inbox (and
          not your spam folder).`}
        </MjmlText>
        <MjmlText color="white" align="center">
          <a href="[unsubscribe]" target="_blank" className="link-white">
            Unsubscribe
          </a>
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

export default Footer;
