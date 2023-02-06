import React from "react";

import { LanguageProp } from "../MainPage";

import SeloBranding from "../assets/services/selo-branding-min.png";
import SeloBrandingBlur from "../assets/services/selo-branding-blur-min.png";
import { ImageComponent } from "../components/ImageComponent";

type ServicesProps = LanguageProp;

export const Services: React.FC<ServicesProps> = () => {
  // const GRID_MAX_WIDTH = 600;
  // const PADDING = 25;
  // const UNIT = 100;
  // const seloBradingFactor = 3.5;

  const content: Record<
    string,
    {
      pt: string,
      en: string,
      img: {
        src: string;
        blurSrc?: string;
        orientation: "left" | "right";
        style?: React.CSSProperties;
      },
    }
  > = {
    branding: {
      pt: `Trabalhamos com o propósito de criar marcas humanas(como tu, como nós). Abordamos a criação de marcas de forma holística em que a forma informa a função.`,
      en: `We are committed to creating brands that are human (like you, like us). We approach brand building from an holistic perspective in which form infuses function.`,
      img: {
        src: SeloBranding,
        blurSrc: SeloBrandingBlur,
        orientation: "left",
      },
    },
    visualProduction: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        orientation: "left",
      },
    },
    stereoProduction: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        orientation: "left",
      },
    },
    productPhotography: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        orientation: "left",
      },
    },
    editorialDesign: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        orientation: "left",
      },
    },
    creativeConsultancy: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        orientation: "left",
      },
    },
    etiquette: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        orientation: "left",
      },
    },
    signature: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        orientation: "left",
      },
    },
    authentication: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        orientation: "left",
      },
    },
  };

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
      {Object.keys(content).map((key) => {
        const { src, blurSrc } = content[key].img;
        return (
          <ImageComponent imgSrc={src} imgBlurSrc={blurSrc} />
        )
      })}
    </div>
  );
};
