import React from "react";

export default function Services() {
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
    <div id="services" style={styles.main}>
      <text>Services section</text>
    </div>
  );
}
