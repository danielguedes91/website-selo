import { Grid, Anchor } from "@mantine/core";
import React from "react";

import { Form } from "../components/Form";

import { Language, LanguageProp } from "../MainPage";
import { OUTTER_GUTTER } from "../components/Navbar";
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
          margin: 0,
        }}
      >
        <Grid.Col
          span={12}
          sx={{
            textAlign: "center",
            lineHeight: 0.6,
            marginBottom: "40px",
            marginTop: "200px",
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
        <Form language={language} />
        <Grid.Col
          span={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            paddingLeft: `${OUTTER_GUTTER}px`,
            paddingRight: `${OUTTER_GUTTER}px`,
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
            }}
          >
            {content.privacyPolicy[language].toUpperCase()}
          </Anchor>
        </Grid.Col>
      </Grid>
    </div>
  );
};
