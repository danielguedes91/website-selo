import React from "react";

export default function About() {
  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
     border: '3px solid orange',
    },
  };

  return (
    <div style={styles.main}>
      <text>About section</text>
    </div>
  );
}