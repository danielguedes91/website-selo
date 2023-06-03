import { Grid, Anchor } from "@mantine/core";
import React from "react";

import { Form } from "../components/Form";

import { Language, LanguageProp } from "../MainPage";
import { OUTTER_GUTTER, OUTTER_GUTTER_MOBILE } from "../components/Navbar";
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
      en: "FILL OUT THE FORM OR EMAIL US AT",
      pt: "PREENCHE O FORMULÁRIO OU ENVIA-NOS UM EMAIL PARA",
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
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
  };

  return (
    <div id="connect" style={styles.main}>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: `0px ${isSmallScreen ? OUTTER_GUTTER_MOBILE : OUTTER_GUTTER}px`,
          margin: isSmallScreen ? undefined : 0,
        }}
        >
        <Grid.Col
          span={12}
          sx={{
            lineHeight: 0.6,
            marginBottom: "40px",
            marginTop: isSmallScreen ? "90px" : "200px",
            width: isSmallScreen ? "100%" : undefined,
          }}
        >
          <p
            style={{ color: "#3a3a3a", fontSize: "1.17em", fontWeight: "bold" }}
          >
            {content.textTitleForm[language]}
          </p>
          <h3 style={{ fontWeight: "normal", fontStyle: "italic" }}>
            <a href="mailto:hello@selovisualstudio.com" style={{ textDecoration: "none" }}>
              HELLO@SELOVISUALSTUDIO.COM
            </a>
          </h3>
        </Grid.Col>
        {/* <Form language={language} />
        <Grid.Col
          span={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            paddingLeft: `${ isSmallScreen ? 0 : OUTTER_GUTTER}px`,
            paddingRight: `${ isSmallScreen ? 0 : OUTTER_GUTTER}px`,
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
