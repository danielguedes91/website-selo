import React from "react";

import { Grid } from "@mantine/core";

import { OUTTER_GUTTER, OUTTER_GUTTER_MOBILE } from "../components/Navbar";
import { GRID_MAX_WIDTH } from "../features/gridUtils";
import { Language, LanguageProp } from "../MainPage";
import useMediaQueryMd from "../features/useMediaQueryMd";

type AboutProps = LanguageProp;

export const About: React.FC<AboutProps> = ({ language }) => {

  const isSmallScreen = useMediaQueryMd();

  const text: Record<Language, React.ReactNode> = {
    en: <>
    The passion for cinema and its ability to convey stories of true impact at all levels, bring together two professionals in writing, film production and artistic direction on a mission to transform the vision of the world and culture into an accessible environment for all eyes and hearts. <br/><br/>
    Creativity and passion are the main aspects that define the story, values and pillars of our company. We exercise storytelling to paint the surfaces we are given, from simple to complex, from comforts to discomforts, from the land we were born to the skies we look up to.</>,
    pt: <>
    A paixão pelo cinema e a sua habilidade de transmitir histórias de verdadeiro impacto a todos os níveis, unem dois profissionais da escrita, audiovisual e da direção artística numa missão para transformar a visão do mundo e da cultura num contexto acessível a todos os olhos e corações. <br/><br/>
    Criatividade e paixão são os aspetos principais que definem a história, os valores e pilares da nossa organização. Exercitamos o storytelling para pintar as superfícies que nos são dadas, do simples ao complexo, dos confortos aos desconfortos, da terra que nascemos ao céu que olhamos.</>,
  };

  const title: Record<Language, string> = {
    en: 'ABOUT US',
    pt: 'SOBRE NÓS'
  }

  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flexStart",
      marginTop: '80px',
      width: "100%",
    },
    textContainer: {
      margin: `0px ${isSmallScreen ? OUTTER_GUTTER_MOBILE : OUTTER_GUTTER}px`,
      width: "100%",
      maxWidth: GRID_MAX_WIDTH,
      marginBottom: isSmallScreen ? "60px" : undefined,
    },
  };

  return (
    <div style={styles.main} id="about">
      <Grid style={styles.textContainer}>
        <Grid.Col xs={12} sm={6} sx={{ padding: 0 }}>
          <h2 style={{ fontSize: '24px' }}>{title[language]}</h2>
          <span>{text[language]}</span>
        </Grid.Col>
      </Grid>
    </div>
  );
};
