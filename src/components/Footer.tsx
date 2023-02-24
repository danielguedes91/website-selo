import React from "react";
import { BLACK_COLOR } from "./Navbar";

// TODO DANI:
// - Substitute links
// - Style navbar

export const Footer: React.FC = () => {
  const styles: Record<string, React.CSSProperties> = {
    main: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "white",
      height: "60px",
      padding: "0px 50px",
    },
    mainContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: '15px',
      
    },
    // subContainer: {
    //   width: "100%",
    //   display: 'flex',
    //   justifyContent: 'space-between',
    // },
    logo: {},
    links: {
    },
    anchor: {
      textDecoration: 'none',
      color: BLACK_COLOR,
    },
  };

  return (
    <div style={styles.main}>
      <div style={styles.mainContainer}>
        <a href="https://grafemadesign.com/" target="_blank" rel="noreferrer" style={styles.anchor}>
          SELO VISUAL STUDIO
        </a>

        <a href="https://grafemadesign.com/" target="_blank" rel="noreferrer" style={styles.anchor}>
          BY GRAFEMA DESIGN
        </a>

        <a href="https://grafemadesign.com/" target="_blank" rel="noreferrer" style={styles.anchor}>
          FACEBOOK
        </a>
        <a href="https://grafemadesign.com/" target="_blank" rel="noreferrer" style={styles.anchor}>
          VIMEO
        </a>

        <a href="https://grafemadesign.com/" target="_blank" rel="noreferrer" style={styles.anchor}>
          BEHANCE
        </a>
        <a href="https://grafemadesign.com/" target="_blank" rel="noreferrer" style={styles.anchor}>
          INSTAGRAM
        </a>
      </div>
    </div>
  );
};
