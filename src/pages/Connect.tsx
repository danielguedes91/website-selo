import { Button, Grid, Sx } from "@mantine/core";
import React from "react";

import { Language, LanguageProp, PAPER_BG } from "../MainPage";
import { OUTER_GUTTER, OUTER_GUTTER_MOBILE } from "../components/Navbar";
import useMediaQueryMd from "../features/useMediaQueryMd";

interface ConnectProps extends LanguageProp {
  showTCPage: boolean;
  handleShowTCPage: (value: boolean) => void;
  showPPPage: boolean;
  handleShowPPPage: (value: boolean) => void;
}

export const Connect: React.FC<ConnectProps> = ({
  language,
  showTCPage,
  handleShowTCPage,
  showPPPage,
  handleShowPPPage,
}) => {
  const content: Record<string, Record<Language, string>> = {
    textTitleForm: {
      en: "EMAIL US AT",
      pt: "ENVIA-NOS UM EMAIL PARA",
    },
    termsAndConditions: {
      en: "Terms & Conditions",
      pt: "Termos & Condições",
    },
    privacyPolicy: {
      en: "Privacy Policy",
      pt: "Política de Privacidade",
    },
  };

  const isSmallScreen = useMediaQueryMd();

  const styles: Record<string, React.CSSProperties> = {
    main: {
      margin: `0px ${isSmallScreen ? OUTER_GUTTER_MOBILE : OUTER_GUTTER}px`,
    },
  };

  const buttonStyles: Sx = {
    transition: "all 400ms",
    margin: isSmallScreen ? `0px 0px 120px 0px` : `0px 0px 220px 0px`,
    // marginTop: isSmallScreen ? OUTER_GUTTER_MOBILE : OUTER_GUTTER,
    fontWeight: "bold",
    fontSize: "16px",
    fontFamily: "Aileron",
    "&:hover": {
      "& span": {
        color: PAPER_BG,
      },
      boxShadow: "inset 0 0 0 40px black",
    },
    height: "40px",
    padding: "0px 16px",
  };

  return (
    <div id="connect" style={styles.main}>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: isSmallScreen ? undefined : 0,
        }}
      >
        <Grid.Col
          span={12}
          sx={{
            padding: 0,
            lineHeight: 0.6,
            marginBottom: "35px",
            marginTop: isSmallScreen ? "90px" : "200px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#3a3a3a",
              fontSize: "1.17em",
              fontWeight: "bold",
            }}
          >
            {content.textTitleForm[language]}
          </p>
          <h3 style={{ fontWeight: "normal", fontStyle: "italic" }}>
            <a className="hover-link" href="mailto:hello@selovisualstudio.com">
              HELLO@SELOVISUALSTUDIO.COM
            </a>
          </h3>
        </Grid.Col>
        <a href="mailto:hello@selovisualstudio.com">
          <Button
            variant="outline"
            color="dark"
            radius="xl"
            size="lg"
            sx={buttonStyles}
            type="button"
          >
            {language === "en" ? "GET IN TOUCH" : "ENTRAR EM CONTACTO"}
          </Button>
        </a>
        {/* <Form language={language} />
        <Grid.Col
          span={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            paddingLeft: `${ isSmallScreen ? 0 : OUTER_GUTTER}px`,
            paddingRight: `${ isSmallScreen ? 0 : OUTER_GUTTER}px`,
            alignItems: "flex-start",
            marginBottom: "100px",
          }}
        >
          <Anchor
            component="button"
            onClick={() => handleShowTCPage(true)}
            sx={{
              color: "#3a3a3a",
              fontSize: isSmallScreen ? "16px" : "14px",
              // fontWeight: isSmallScreen ? "bold" : undefined,
              fontWeight: "bold",
            }}
          >
            {content.termsAndConditions[language].toUpperCase()}
          </Anchor>
          <Anchor
            component="button"
            onClick={() => handleShowPPPage(true)}
            sx={{
              color: "#3a3a3a",
              fontSize: isSmallScreen ? "16px" : "14px",
              // fontWeight: isSmallScreen ? "bold" : undefined,
              fontWeight: "bold",
              marginTop: isSmallScreen ? "15px" : undefined
            }}
          >
            {content.privacyPolicy[language].toUpperCase()}
          </Anchor>
        </Grid.Col> */}
      </Grid>
    </div>
  );
};
