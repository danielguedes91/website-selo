import React from "react";
import { OUTTER_GUTTER } from "../components/Navbar";
import { Language, LanguageProp } from "../MainPage";

type AboutProps = LanguageProp;

export const About: React.FC<AboutProps> = ({ language }) => {
  // TODO: Paragraph
  const text: Record<Language, string> = {
    en: `The passion for cinema and its ability to convey stories of true impact at all levels, bring together two professionals in writing, film production and artistic direction on a mission to transform the vision of the world and culture into an accessible enviroment for all eyes and hearts.
    Creativity and passion are the main aspects that define the story, values and pillars of our company. We exercise storytelling to paint the surfaces we are given, from simple to complex, from comforts to discomforts, from the land we were born to the skies we look up to.`,
    pt: `A paixão pelo cinema e a sua habilidade de transmitir histórias de verdadeiro impacto a todos os níveis, unem dois profissionais da escrita, audiovisual e da direção artística numa missão para transformar a visão do mundo e da cultura num contexto acessível a todos os olhos e corações.
    Criatividade e paixão são os aspectos principais que definem a história, os valores e pilares da nossa organização. Exercitamos o storytelling para pintar as superfícies que nos são dadas, do simples ao complexo, dos confortos aos desconfortos, da terra que nascemos ao céu que olhamos.`,
  };

  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
    },
    textContainer: {
      margin: `0px ${OUTTER_GUTTER}px`,
      width: "100%",
      maxWidth: "1500px",
    },
  };

  return (
    <div style={styles.main} id="about">
      <div style={styles.textContainer}>
        <div style={{ width: "calc(50% - 20px)" }}>
          <h2 style={{ fontSize: '35px' }}>ABOUT US</h2>
          <span>{text[language]}</span>
        </div>
      </div>
    </div>
  );
};
