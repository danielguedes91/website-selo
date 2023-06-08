import React from "react";
import { Language, LanguageProp } from "../MainPage";

import SeloLogoGrey from "../assets/home/selo-logo-grey.svg";

import LandingPageImage01 from "../assets/landing/selo-landing-page-1-min.png";
import LandingPageImage02 from "../assets/landing/selo-landing-page-2-min.png";
import LandingPageImage03 from "../assets/landing/selo-landing-page-3-min.png";
import LandingPageImage04 from "../assets/landing/selo-landing-page-4-min.png";
import LandingPageImage05 from "../assets/landing/selo-landing-page-5-min.png";
import {
  GRAY_COLOR,
  OUTER_GUTTER,
  OUTER_GUTTER_MOBILE,
} from "../components/Navbar";
import { Grid } from "@mantine/core";
import useMediaQueryMd from "../features/useMediaQueryMd";

// const FACTOR_WIDTH = 270;
type HomeProps = LanguageProp;

export const Home: React.FC<HomeProps> = ({ language }) => {
  const isSmallScreen = useMediaQueryMd();

  const [isLogoShow, setIsLogoShow] = React.useState<boolean>(false);
  const [isTextShow, setIsTextShow] = React.useState<boolean>(false);
  // const [isTransition, setIsTransition] = React.useState<boolean>(false);
  // const [isHomeReached, setIsHomeReached] = React.useState<boolean>(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 30) {
      setIsLogoShow(true);
    } else setIsLogoShow(false);

    // if (window.scrollY >= 500) {
    //   setIsTransition(false);
    // } else setIsTransition(true);

    if (window.scrollY >= (isSmallScreen ? 800 : 1400)) {
      setIsTextShow(true);
    } else setIsTextShow(false);

    // if (window.scrollY >= 1020) {
    //   setIsHomeReached(true);
    // } else setIsHomeReached(false);
  });

  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      margin: `0px ${isSmallScreen ? OUTER_GUTTER_MOBILE : OUTER_GUTTER}px`,
    },
    logoTextContainer: {
      // opacity: isLogoShow ? 1 : 0,
      // transition: isTransition ? "all 300ms" : "none",
      // position: isHomeReached ? undefined : "fixed",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      // marginTop: isHomeReached ? -175 : 145,
      position: "sticky",
      bottom: "25vh",
      marginTop: isSmallScreen ? undefined : "100px",
      marginBottom: "100px",
    },
  };

  const content: Record<string, Record<Language, React.ReactNode>> = {
    content_01: {
      en: (
        <>
          <span>YOU DON'T ACHIEVE{isSmallScreen ? <br /> : " "}YOUR DREAMS</span>
          <br />
          <span>BY PLAYING IT SAFE</span>
        </>
      ),
      pt: (
        <>
          <span>VOCÊ NÃO ALCANÇA OS SEUS SONHOS</span>
          <br />
          <span>JOGANDO SEGURO</span>
        </>
      ),
    },
    content_02: {
      en: (
        <>
          <span>STORIES{isSmallScreen ? <br /> : " "}MAKE MAGIC,</span>
          <br />
          <span>NOT WANDS.</span>
        </>
      ),
      pt: (
        <>
          <span>HISTÓRIAS FAZEM MAGIA,</span>
          <br />
          <span>NÃO VARINHAS</span>
        </>
      ),
    },
  };

  const ScreenVersion = () => (
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
          bottom: "-8vw",
        }}
      >
        <Grid.Col
          span={3}
          style={{
            paddingLeft: 0,
            // top: -250,
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
        style={{ display: "flex", flexDirection: "row", marginTop: "300px" }}
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
  );

  const MobileVersion = () => (
    <Grid
      // gutter={10}
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        position: "relative",
        top: "-9vh",
      }}
    >
      <Grid.Col
        span={12}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 0,
          position: "relative",
          bottom: "-24vh",
        }}
      >
        <img alt="" src={LandingPageImage01} style={{ width: "45%" }} />
        <img
          alt=""
          src={LandingPageImage02}
          style={{ width: "45%", position: "relative", top: 125 }}
        />
      </Grid.Col>
      <Grid.Col
        span={12}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 0,
          marginTop: 333,
        }}
      >
        <img alt="" src={LandingPageImage03} style={{ width: "45%" }} />
        <img
          alt=""
          src={LandingPageImage04}
          style={{ width: "45%", position: "relative", top: 125 }}
        />
      </Grid.Col>
      <Grid.Col span={12} style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt=""
          src={LandingPageImage05}
          style={{ width: "45%", marginTop: "40vw" }}
        />
      </Grid.Col>
    </Grid>
  );

  return (
    <div style={styles.main} id="home">
      {isSmallScreen ? <MobileVersion /> : <ScreenVersion />}
      <div style={styles.logoTextContainer}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            height: isSmallScreen ? 200 : 350,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: isLogoShow ? "100%" : 0,
              overflow: "hidden",
              transition: "all 400ms ease-in-out",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              position: "relative",
              right: isSmallScreen ? 0 : 4,
            }}
          >
            <div style={{ marginBottom: 75, overflow: "visible" }}>
              <img
                src={SeloLogoGrey}
                alt=""
                width={isSmallScreen ? 250 : 540}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            opacity: isTextShow ? 1 : 0,
            textAlign: "center",
            fontSize: "25px",
            color: GRAY_COLOR,
            fontWeight: "bold",
          }}
        >
          {content.content_01[language]}
        </div>
      </div>
      <div
        style={{
          // marginTop: isHomeReached ? 90 : 1650,
          textAlign: "center",
          fontSize: isSmallScreen ? "36px" : "64px",
          color: GRAY_COLOR,
          fontWeight: "bold",
        }}
      >
        {content.content_02[language]}
      </div>
    </div>
  );
};
