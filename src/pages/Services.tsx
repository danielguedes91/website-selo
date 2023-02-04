import React from "react";

import { LanguageProp } from "../MainPage";

import SeloBranding from '../assets/services/selo-branding-min.png';
import SeloBrandingBlur from '../assets/services/selo-branding-blur-min.png';

type ServicesProps = LanguageProp;

export const Services: React.FC<ServicesProps> = () => {

  const [isSeloBrandingBlur, setIsSeloBrandingBlur] = React.useState<boolean>(false);

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
      <div onMouseEnter={() => setIsSeloBrandingBlur(true)} onMouseLeave={() => setIsSeloBrandingBlur(false)}>
        <img src={isSeloBrandingBlur ? SeloBrandingBlur : SeloBranding} alt="" width={UNIT * seloBradingFactor} />
      </div>
    </div>
  );
}
