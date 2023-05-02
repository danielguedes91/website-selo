import { Grid, Anchor } from "@mantine/core";
import React from "react";

import { Form } from "../components/Form";

import { Language, LanguageProp } from "../MainPage";
import TermsAndConditionsPage from "./TermsAndConditionsPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

type ConnectProps = LanguageProp;

export const Connect: React.FC<ConnectProps> = ({ language }) => {

  const [showTCPage, setShowTCPage] = React.useState<boolean>(false);
  const [showPPPage, setShowPPPage] = React.useState<boolean>(false);

  const textTitleForm: Record<Language, string> = {
    en: "FILL OUT THE FORM OR EMAIL US AT",
    pt: "PREENCHE O FORMULÁRIO OU ENVIA-NOS UM EMAIL PARA",
  }

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
          <h3>{textTitleForm[language]}</h3>
          <h3 style={{ fontWeight: "normal", fontStyle: "italic" }}>
            HELLO@SELOVISUALSTUDIO.COM
          </h3>
        </Grid.Col>
        <Form language={language} />
        <Grid.Col
          span={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            paddingLeft: "50px",
            paddingRight: "50px",
            alignItems: "flex-start",
          }}
        >
          <Anchor component="button" onClick={() => setShowTCPage(true)} sx={{ color: "black" }}>
            Terms&Conditions
          </Anchor>
          <Anchor component="button" onClick={() => setShowPPPage(true)} sx={{ color: "black" }}>
            Privacy Policy
          </Anchor>
        </Grid.Col>
      </Grid>
      {showTCPage && <TermsAndConditionsPage onClose={() => setShowTCPage(false)} />}
      {showPPPage && <PrivacyPolicyPage onClose={() => setShowPPPage(false)} />}
    </div>
  );
};
