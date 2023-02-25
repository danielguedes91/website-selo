import React from "react";
import { LanguageProp } from "../MainPage";

import SeloLogoGrey from "../assets/home/selo-logo-grey.svg";

import LandingPageImage03 from "../assets/landing/selo-landing-page-3-min.png";
import LandingPageImage04 from "../assets/landing/selo-landing-page-4-min.png";
import LandingPageImage05 from "../assets/landing/selo-landing-page-5-min.png";
import { BLACK_COLOR } from "../components/Navbar";

// const FACTOR_WIDTH = 270;
type HomeProps = LanguageProp;

export const Home: React.FC<HomeProps> = () => {
  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      minHeight: "100vh",
    },
    logoTextContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: 145,
    },
  };

  return (
    <div style={styles.main} id="home">
      <img
        alt=""
        src={LandingPageImage03}
        style={{
          left: 166,
          position: "absolute",
          zIndex: -1,
          top: 200,
          width: 352,
        }}
      />
      <img
        alt=""
        src={LandingPageImage04}
        style={{
          right: 9,
          position: "absolute",
          zIndex: -1,
          top: 150,
          width: 352,
        }}
      />
      <img
        alt=""
        src={LandingPageImage05}
        style={{
          margin: "0 auto",
          position: "absolute",
          zIndex: -1,
          top: 700,
          width: 352,
        }}
      />
      <div style={styles.logoTextContainer}>
        <div style={{ marginBottom: 80 }}>
          <img src={SeloLogoGrey} alt="" width={540} />
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "25px",
            color: BLACK_COLOR,
            fontWeight: "bold",
          }}
        >
          <span>YOU DON'T ACHIEVE YOUR DREAMS</span>
          <br />
          <span>BY PLAYING IT SAFE</span>
        </div>
      </div>
      <div
        style={{
          marginTop: 735,
          textAlign: "center",
          fontSize: "80px",
          color: BLACK_COLOR,
          fontWeight: "bold",
        }}
      >
        <span>STORIES MAKE MAGIC,</span>
        <br />
        <span>NOT WANDS.</span>
      </div>
    </div>
  );
};
