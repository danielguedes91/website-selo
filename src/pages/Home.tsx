import React from "react";
import { LanguageProp } from "../MainPage";

import SeloLogoGrey from "../assets/home/selo-logo-grey.svg";

import LandingPageImage01 from "../assets/landing/selo-landing-page-1-min.png";
import LandingPageImage02 from "../assets/landing/selo-landing-page-2-min.png";
import LandingPageImage03 from "../assets/landing/selo-landing-page-3-min.png";
import LandingPageImage04 from "../assets/landing/selo-landing-page-4-min.png";
import LandingPageImage05 from "../assets/landing/selo-landing-page-5-min.png";
import { BLACK_COLOR, OUTTER_GUTTER } from "../components/Navbar";
import { Grid } from "@mantine/core";

// const FACTOR_WIDTH = 270;
type HomeProps = LanguageProp;

export const Home: React.FC<HomeProps> = () => {
  const [isLogoShow, setIsLogoShow] = React.useState<boolean>(false);
  const [isTransition, setIsTransition] = React.useState<boolean>(false);
  const [isHomeReached, setIsHomeReached] = React.useState<boolean>(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 30) {
      setIsLogoShow(true);
    } else setIsLogoShow(false);

    if (window.scrollY >= 500) {
      setIsTransition(false);
    } else setIsTransition(true);

    if (window.scrollY >= 1020) {
      setIsHomeReached(true);
    } else setIsHomeReached(false);
  });

  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      margin: `0px ${OUTTER_GUTTER}px`,
    },
    logoTextContainer: {
      opacity: isLogoShow ? 1 : 0,
      transition: isTransition ? "all 300ms" : "none",
      position: isHomeReached ? undefined : "fixed",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: isHomeReached ? 1170 : 145,
    },
  };

  return (
    <div style={styles.main} id="home">
      <Grid
        gutter={10}
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <Grid.Col
          span={12}
          style={{
            zIndex: -1,
            display: "flex",
            flexDirection: "row",
            padding: 0,
            position: "relative",
            bottom: "20vw",
          }}
        >
          <Grid.Col
            span={3}
            style={{
              paddingLeft: 0,
              top: -250,
            }}
          >
            <img alt="" src={LandingPageImage01} style={{ width: "100%" }} />
          </Grid.Col>
          <Grid.Col span={3} />
          <Grid.Col span={3} style={{ padding: 0 }}>
            <img alt="" src={LandingPageImage02} style={{ width: "100%" }} />
          </Grid.Col>
        </Grid.Col>

        <Grid.Col
          span={12}
          style={{ display: "flex", flexDirection: "row", marginTop: "-100px" }}
        >
          <Grid.Col span={1} />
          <Grid.Col span={3}>
            <div style={{ maxWidth: "100%", height: "100px" }}>
              <img alt="" src={LandingPageImage03} style={{ width: "100%" }} />
            </div>
          </Grid.Col>
          <Grid.Col span={2} />
          <Grid.Col span={3}>
            <img
              alt=""
              src={LandingPageImage05}
              style={{ width: "100%", marginTop: "40vw" }}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <img alt="" src={LandingPageImage04} style={{ width: "100%" }} />
          </Grid.Col>
        </Grid.Col>
      </Grid>

      {/* 
        
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
        /> */}
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
          // position: "absolute",
          marginTop: isHomeReached ? 90 : 1650,
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
