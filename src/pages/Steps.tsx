import React from "react";

import { Language, LanguageProp } from "../MainPage";

import { Grid } from "@mantine/core";

// Steps resources
import ApplicationActivation from "../assets/steps/selo-authentication-application-activation-min.png";
import StrategyStudy from "../assets/steps/selo-etiquette-strategy-study-min.png";
import IdentityProposal from "../assets/steps/selo-signature-identity-proposal-min.png";
import { GRID_MAX_WIDTH } from "../features/gridUtils";

// alinhar home
// navbar no fixed


type StepsProps = LanguageProp;

export const Steps: React.FC<StepsProps> = ({ language }) => {
  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingBottom: "100px",
    },
    gridContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: GRID_MAX_WIDTH,
      margin: "0px 80px",
    },
  };

  const content: Record<Language, string> = {
    en: `We ask questions, listen and learn. We go to the core of the issue to build the most accurate and effective strategy.`,
    pt: `Fazemos perguntas, ouvimos e aprendemos. Vamos ao fundo da questão para construir a estratégia mais precisa e eficaz.`,
  };

  return (
    <div id="steps" style={styles.main}>
      <Grid style={styles.gridContainer}>
        <Grid.Col span={12} sx={{ display: "flex", flexDirection: "row" }}>
          <Grid.Col
            span={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ fontSize: "35px", fontWeight: "bold" }}>
              STEPS <br />
              FOR OFFICIAL GUARANTEE CERTIFICATION
            </h3>
            <text>{content[language]}</text>
          </Grid.Col>
          <Grid.Col span={3}>
            <img src={ApplicationActivation} alt="" style={{ width: "100%" }} />
          </Grid.Col>
          <Grid.Col span={3}>
            <img src={StrategyStudy} alt="" style={{ width: "100%" }} />
          </Grid.Col>
          <Grid.Col span={3}>
            <img src={IdentityProposal} alt="" style={{ width: "100%" }} />
          </Grid.Col>
        </Grid.Col>
        <Grid.Col span={12}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            ROADS?
          </h2>
          <h2>
            Where we're going, <br />
            we don't need roads!
          </h2>
          <h5>Dr. Emmett Brown, Back to the future</h5>
        </Grid.Col>
      </Grid>
    </div>
  );
};
