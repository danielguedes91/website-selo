import React from "react";
import { LanguageProp } from "../MainPage";

import SeloLogoGrey from "../assets/home/selo-logo-grey.svg";

import LandingPageImage03 from "../assets/landing/selo-landing-page-3-min.png";

type HomeProps = LanguageProp;

export const Home: React.FC<HomeProps> = () => {
  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      // border: "3px solid orange",
    },
  };

  // TODO Dani: vais ter que tirar a largura desta imagem com grid units, como no Services.tsx
  const FACTOR_WIDTH = 270;

  return (
    <div style={styles.main} id="home">
      <img src={SeloLogoGrey} alt="" width={250} />
      <span>YOU DON’T ACHIEVE YOUR DREAMS</span>
      <span>BY PLAYING IT SAFE</span>
      <img alt="" src={LandingPageImage03} style={{ 
        width: FACTOR_WIDTH,
        left: 200,
        position: 'absolute',
      }} />
    </div>
  );
};
