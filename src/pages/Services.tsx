import React from "react";

import { LanguageProp } from "../MainPage";

import { GRID_MAX_WIDTH } from "../features/gridUtils";

import SeloBranding from "../assets/services/selo-branding-min.png";
import SeloBrandingBlur from "../assets/services/selo-branding-blur-min.png";
import { ImageComponent } from "../components/ImageComponent";
import { Grid } from "@mantine/core";

type ServicesProps = LanguageProp;

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const content: Record<
    string,
    {
      pt: string;
      en: string;
      img: {
        src: string;
        blurSrc?: string;
        orientation: "left" | "right";
        style?: React.CSSProperties;
      };
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
      // TODO Dani => you have to change the content dynamically here, same logic
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        orientation: "right",
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
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      minHeight: "100vh",
      border: "3px solid blue",
    },
    gridContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: GRID_MAX_WIDTH,
    },
  };

  const TextContent = ({
    content,
    width,
  }: {
    content: string;
    width?: string;
  }) => {
    return <span style={{ width: width }}>{content}</span>;
  };

  return (
    <div id="services" style={styles.main}>
      <span>Services section</span>
      <Grid style={styles.gridContainer}>
        {Object.keys(content).map((key, index) => {
          const { en, pt } = content[key];
          const textContent = language === "en" ? en : pt;
          const { src, blurSrc, orientation } = content[key].img;
          return (
            <Grid.Col
              key={`image-text-container-${index}`}
              // TODO Dani: lê sobre como as unidades deste component são dadas.
              // Em UI frameworks utiliza-se estes múltiplos de 12, como te tinha explicado.
              // Diz-me se tiveres dúvidas
              span={8}
              style={{
                display: "flex",
                justifyContent:
                  orientation === "right" ? "flex-end" : "flex-start",
                border: "3px solid orange",
              }}
            >
              {orientation === "right" ? (
                <Grid.Col span={6}>
                  <TextContent content={textContent} width="460px" />
                </Grid.Col>
              ) : null}
              <Grid.Col span={6}>
                <ImageComponent imgSrc={src} imgBlurSrc={blurSrc} />
              </Grid.Col>
              {orientation === "left" ? (
                <Grid.Col span={6}>
                  <TextContent content={textContent} width="460px" />
                </Grid.Col>
              ) : null}
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};
