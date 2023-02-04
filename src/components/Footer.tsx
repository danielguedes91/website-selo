import React from "react";

export const Footer: React.FC = () => {
  const styles: Record<string, React.CSSProperties> = {
    main: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      border: "1px solid blue",
      height: "60px",
    },
    logo: {},
    links: {},
  };

  // TODO DANI: substitute links
  return <div style={styles.main}>
     <a href="https://grafemadesign.com/" target="_blank" rel="noreferrer">SELO VISUAL STUDIO</a>
     <a href="https://grafemadesign.com/" target="_blank" rel="noreferrer">BY GRAFEMA DESIGN</a>
     <a href="https://grafemadesign.com/" target="_blank" rel="noreferrer">FACEBOOK</a>
     <a href="https://grafemadesign.com/" target="_blank" rel="noreferrer">VIMEO</a>
     <a href="https://grafemadesign.com/" target="_blank" rel="noreferrer">BEHANCE</a>
     <a href="https://grafemadesign.com/" target="_blank" rel="noreferrer">INSTAGRAM</a>
  </div>;
}
