import React from "react";

import { LanguageProp } from "../MainPage";

type ConnectProps = LanguageProp;

export const Connect: React.FC<ConnectProps> = () => {
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
      <text>Connect section</text>
    </div>
  );
}