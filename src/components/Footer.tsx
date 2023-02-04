import React from "react";

export default function Footer(): JSX.Element {
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
     <a href="#nothing">SELO VISUAL STUDIO</a>
     <a href="#nothing">BY GRAFEMA DESIGN</a>
     <a href="#nothing">FACEBOOK</a>
     <a href="#nothing">VIMEO</a>
     <a href="#nothing">BEHANCE</a>
     <a href="#nothing">INSTAGRAM</a>
  </div>;
}
