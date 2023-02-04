import React from "react";

import { Form } from "../components/Form";

import { LanguageProp } from "../MainPage";

type ConnectProps = LanguageProp;

export const Connect: React.FC<ConnectProps> = ({ language }) => {
  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: '100vh',
      border: "3px solid blue",
    },
  };
  return (
    <div id="connect" style={styles.main}>
      <Form language={language} />
    </div>
  );
}