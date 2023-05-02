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
  };

  const handleSendForm = () => {
    window.alert("Form to be sent");
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
          <Anchor
            component="button"
            variant="link"
            style={{ color: "#3a3a3a", fontSize: "1.17em", fontWeight: "bold" }}
            onClick={handleSendForm}
          >
            {textTitleForm[language]}
          </Anchor>
          <h3 style={{ fontWeight: "normal", fontStyle: "italic" }}>
            HELLO@SELOVISUALSTUDIO.COM
          </h3>
        </Grid.Col>
        <Form language={language} handleSubmitFormClick={handleSendForm} />
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
          <Anchor
            component="button"
            onClick={() => setShowTCPage(true)}
            sx={{ color: "#3a3a3a" }}
          >
            Terms&Conditions
          </Anchor>
          <Anchor
            component="button"
            onClick={() => setShowPPPage(true)}
            sx={{ color: "#3a3a3a" }}
          >
            Privacy Policy
          </Anchor>
        </Grid.Col>
      </Grid>
      {showTCPage && (
        <TermsAndConditionsPage onClose={() => setShowTCPage(false)} />
      )}
      {showPPPage && <PrivacyPolicyPage onClose={() => setShowPPPage(false)} />}
    </div>
  );
};
