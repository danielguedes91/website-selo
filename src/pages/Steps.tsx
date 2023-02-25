import React from "react";

import { LanguageProp } from "../MainPage";

import { Grid } from "@mantine/core";

// Steps resources
import ApplicationActivation from "../assets/steps/selo-authentication-application-activation-min.png";
import StrategyStudy from "../assets/steps/selo-etiquette-strategy-study-min.png";
import IdentityProposal from "../assets/steps/selo-signature-identity-proposal-min.png";
import { GRID_MAX_WIDTH } from "../features/gridUtils";

type StepsProps = LanguageProp;

export const Steps: React.FC<StepsProps> = () => {
  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
    },
    gridContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: GRID_MAX_WIDTH,
      margin: '0px 80px',
    }
  };
  return (
    <div id="steps" style={styles.main}>
      <Grid style={styles.gridContainer}>
        <Grid.Col span={12} sx={{ display: "flex", flexDirection: "row" }}>
          <Grid.Col span={3} sx={{ height: '100px', width: '100px', backgroundColor: 'pink' }}></Grid.Col>
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
      </Grid>
    </div>
  );
};
