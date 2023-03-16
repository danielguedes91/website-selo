import { Grid } from "@mantine/core";
import React from "react";

import { Form } from "../components/Form";

import { LanguageProp } from "../MainPage";

type ConnectProps = LanguageProp;

export const Connect: React.FC<ConnectProps> = ({ language }) => {
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
        }}
      >
        <Grid.Col span={12}>
          <h3>Fill out the form or email us at</h3>
          <h3>selovisualstudio.com</h3>
        </Grid.Col>
        <Form language={language} />
      </Grid>
    </div>
  );
};
