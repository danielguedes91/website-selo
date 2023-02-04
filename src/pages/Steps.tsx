import React from "react";

export default function Steps() {
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
    <div style={styles.main}>
      <text>Steps section</text>
    </div>
  );
}