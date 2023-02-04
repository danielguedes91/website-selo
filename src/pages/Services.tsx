import React from "react";

import SeloBranding from '../assets/services/selo-branding-min.png';

export default function Services() {

  // const GRID_MAX_WIDTH = 600;
  // const PADDING = 25;
  const UNIT = 100;
  const seloBradingFactor = 3.5;

  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      border: "3px solid blue",
    },
  };


  return (
    <div id="services" style={styles.main}>
      <text>Services section</text>
      <img src={SeloBranding} alt="" width={UNIT * seloBradingFactor} />
    </div>
  );
}
