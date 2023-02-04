import React from "react";

import { LanguageProp } from "../MainPage";

type StepsProps = LanguageProp;

export const Steps: React.FC<StepsProps> = () => {
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
    <div id="steps" style={styles.main}>
      <text>Steps section</text>
    </div>
  );
}