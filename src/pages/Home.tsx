import React from "react";
import { LanguageProp } from "../MainPage";

type HomeProps = LanguageProp;

export const Home: React.FC<HomeProps> = () => {
  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      border: "3px solid orange",
    },
  };

  return (
    <div style={styles.main} id="home">
      <text>Home section</text>
    </div>
  );
}
