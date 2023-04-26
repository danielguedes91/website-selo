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
          margin: 0,

        }}
      >
        <Grid.Col span={12} sx={{ textAlign: 'center', lineHeight: 0.6, marginBottom: '40px', marginTop: '200px' }}>
          <h3>FILL OUT THE FORM OR EMAIL US AT</h3>
          <h3 style={{ fontWeight: 'normal', fontStyle: 'italic' }}>HELLO@SELOVISUALSTUDIO.COM</h3>
        </Grid.Col>
        <Form language={language} />
      </Grid>
    </div>
  );
};
