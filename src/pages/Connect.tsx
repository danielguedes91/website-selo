import { Grid, Anchor } from "@mantine/core";
import React from "react";

import { Form } from "../components/Form";

import { Language, LanguageProp } from "../MainPage";
import TermsAndConditionsPage from "./TermsAndConditionsPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import { OUTTER_GUTTER } from "../components/Navbar";

type ConnectProps = LanguageProp;

export const Connect: React.FC<ConnectProps> = ({ language }) => {
  const [showTCPage, setShowTCPage] = React.useState<boolean>(false);
  const [showPPPage, setShowPPPage] = React.useState<boolean>(true);

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

  const handleSendForm = () => {
    window.alert("Form to be sent");
  };

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
            {content.textTitleForm[language]}
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
            paddingLeft: `${OUTTER_GUTTER}px`,
            paddingRight: `${OUTTER_GUTTER}px`,
            alignItems: "flex-start",
            marginBottom: "100px",
          }}
        >
          <Anchor
            component="button"
            onClick={() => setShowTCPage(true)}
            sx={{ color: "#3a3a3a", fontSize: "14px" }}
          >
            {content.termsAndConditions[language]}
          </Anchor>
          <Anchor
            component="button"
            onClick={() => setShowPPPage(true)}
            sx={{ color: "#3a3a3a", fontSize: "14px" }}
          >
            {content.privacyPolicy[language]}
          </Anchor>
        </Grid.Col>
      </Grid>
      {showTCPage && (
        <TermsAndConditionsPage onClose={() => setShowTCPage(false)} />
      )}
      {showPPPage && <PrivacyPolicyPage language={language} onClose={() => setShowPPPage(false)} />}
    </div>
  );
};
