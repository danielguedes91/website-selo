import React from "react";

import { LanguageProp } from "../MainPage";

import { GRID_MAX_WIDTH } from "../features/gridUtils";

// Services images
import SeloBranding from "../assets/services/selo-branding-min.png";
import SeloBrandingBlur from "../assets/services/selo-branding-blur-min.png";

import { ImageComponent } from "../components/ImageComponent";
import { Grid } from "@mantine/core";
import { BLACK_COLOR } from "../components/Navbar";

const TEXT_COL_SPAN: number = 3;
const IMAGE_COL_SPAN: number = 7;
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
        alignment: "left" | "right";
        style?: React.CSSProperties;
      };
      subtitle: string;
    }
  > = {
    branding: {
      pt: `Trabalhamos com o propósito de criar marcas humanas(como tu, como nós). Abordamos a criação de marcas de forma holística em que a forma informa a função.`,
      en: `We are committed to creating brands that are human (like you, like us). We approach brand building from an holistic perspective in which form infuses function.`,
      img: {
        src: SeloBranding,
        blurSrc: SeloBrandingBlur,
        alignment: "right",
      },
      subtitle: "BRANDING",
    },
    visualProduction: {
      pt: `Captar a atenção do consumidor é um desafio que endurece todos os dias, o que leva marcas a fazer escolhas repentinas, pois muitos dos métodos atualmente utilizados são descartáveis.
      Com as nossas produções procuramos deixar um impacto mais duradouro nas mentes e corações dos nossos clientes e telespectadores, através de filmes, documentários de longa e curta duração, minisséries, conteúdo para social mídia baseados em script, motion graphics, animação e muito mais.
      Para além dos aspectos mais técnicos do nosso campo de atividade, acreditamos na emoção e storytelling como ferramentas proeficientes de expressão sobre a cultura e sociedade(ou quaisquer outras humanidades em conversa).`, // Text in portuguese
      en: `Seizing consumer's attention is a challenge that grows tougher every day, which often leads brands to make immediate choices, as many of the methods currently used are disposable.
      With our productions we aim to make a long-lasting impact on the minds and hearts of our customers and audience, through film, long and short documentaries, miniseries, script-based social media content, motion graphics, animation and more.
      Beyond the more technical aspects of our field, we believe in emotion and storytelling as proficient tools of expression about culture and society(or any other humanities in conversation).`, // Text in english
      img: {
        src: SeloBranding, // "normal" image
        blurSrc: undefined, // blurred image
        alignment: "left", // Orientation of the image
      },
      subtitle: "BRANDING",
    },
    stereoProduction: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        alignment: "right",
      },
      subtitle: "Branding",
    },
    productPhotography: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        alignment: "right",
      },
      subtitle: "Branding",
    },
    editorialDesign: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        alignment: "left",
      },
      subtitle: "Branding",
    },
    creativeConsultancy: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        alignment: "left",
      },
      subtitle: "Branding",
    },
    etiquette: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        alignment: "left",
      },
      subtitle: "Branding",
    },
    signature: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        alignment: "left",
      },
      subtitle: "Branding",
    },
    authentication: {
      pt: ``,
      en: ``,
      img: {
        src: SeloBranding,
        alignment: "left",
      },
      subtitle: "Branding",
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
    },
    gridContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: GRID_MAX_WIDTH,
    },
    textContainer: {
      display: "flex",
      alignItems: "flex-end",
    },
  };

  const TextContent = ({
    content,
    width,
  }: {
    content: string;
    width?: string;
  }) => {
    return <text style={{ width: width }}>{content}</text>;
  };

  const [showingList, setShowingList] = React.useState<Array<string>>([]);

  function onClickEvent(listKey: string) {
    const newList = [...showingList]; // copia sem ref da lista
    const eleAlreadyExists = Boolean(newList.find((key) => key === listKey)); // verificar se o elemento ja existe na lista
    newList.push(listKey); // adicionar o elemento
    !eleAlreadyExists && setShowingList(newList);
  }

  console.log(showingList);

  return (
    <div id="services" style={styles.main}>
      <h2 style={{ fontWeight: "bold", fontSize: "35px" }}>SERVICES</h2>
      <Grid style={styles.gridContainer}>
        {Object.keys(content).map((key, index) => {
          let isTextShowing = showingList.find(
            (listElement) => listElement === key
          )
            ? true
            : false;
          const { en, pt, subtitle } = content[key];
          const textContent = language === "en" ? en : pt;
          const { src, alignment: orientation } = content[key].img;
          return (
            <Grid.Col
              key={`image-text-container-${index}-${key}`}
              span={12}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Grid.Col
                span={12}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {orientation === "right" ? (
                  <Grid.Col span={TEXT_COL_SPAN} style={styles.textContainer}>
                    {isTextShowing && (
                      <TextContent content={textContent} width="460px" />
                    )}
                  </Grid.Col>
                ) : null}
                <Grid.Col
                  span={IMAGE_COL_SPAN}
                  // sx={{ display: "flex", flexDirection: "column" }}
                >
                  <ImageComponent
                    imgSrc={src}
                    onClickHandler={() => onClickEvent(key)}
                  />
                </Grid.Col>
                {orientation === "left" ? (
                  <Grid.Col span={TEXT_COL_SPAN} style={styles.textContainer}>
                    {isTextShowing && (
                      <TextContent content={textContent} width="460px" />
                    )}
                  </Grid.Col>
                ) : null}
              </Grid.Col>
              <Grid.Col
                span={12}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent:
                    orientation === "right" ? "flex-end" : "flex-start",
                }}
              >
                <Grid.Col span={IMAGE_COL_SPAN}>
                  <h3
                    style={{
                      color: BLACK_COLOR,
                      opacity: 0.5,
                      fontStyle: "italic",
                    }}
                  >
                    {subtitle}
                  </h3>
                </Grid.Col>
              </Grid.Col>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};
