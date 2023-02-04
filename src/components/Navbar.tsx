import React from "react";

export default function Navbar(): JSX.Element {
  const styles: Record<string, React.CSSProperties> = {
    main: {
      position: "fixed",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: 'center',
      backgroundColor: "white",
      border: '1px solid blue',
      height: '60px',
    },
    logo: {},
    links: {},
  };

  return (
    <div style={styles.main}>
      <div style={styles.logo}>
        <div>
          <a href="#home">Home</a>
        </div>
      </div>
      <div style={styles.links}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#steps">Steps</a>
        <a href="#connect">Connect</a>
      </div>
    </div>
  );
}
