import React from "react";

import { Language, LanguageProp } from "../MainPage";

import { GRID_MAX_WIDTH } from "../features/gridUtils";

// Services images
import SeloBranding from "../assets/services/selo-branding-min.png";
import SeloBrandingBlur from "../assets/services/selo-branding-blur-min.png";

import SeloConsultancy from "../assets/services/selo-creative-consultancy-min.png";
import SeloConsultancyBlur from "../assets/services/selo-creative-consultancy-blur-min.png";

import SeloStereo from "../assets/services/selo-stereo-production-min.png";
import SeloStereoBlur from "../assets/services/selo-stereo-production-blur-min.png";

import SeloVisual from "../assets/services/selo-visual-production-min.png";
import SeloVisualBlur from "../assets/services/selo-visual-production-blur-min.png";

import SeloPhotography from "../assets/services/selo-product-photography-min.png";
import SeloPhotographyBlur from "../assets/services/selo-product-photography-blur-min.png";

import SeloEditorial from "../assets/services/selo-editorial-design-min.png";
import SeloEditorialBlur from "../assets/services/selo-editorial-design-blur-min.png";

import { ImageComponent } from "../components/ImageComponent";
import { Grid } from "@mantine/core";
import { OUTTER_GUTTER, OUTTER_GUTTER_MOBILE } from "../components/Navbar";
import useMediaQueryMd from "../features/useMediaQueryMd";

const TEXT_COL_SPAN: number = 3;
const IMAGE_COL_SPAN: number = 7;
type ServicesProps = LanguageProp;

export const Services: React.FC<ServicesProps> = ({ language }) => {
  
  const isSmallScreen = useMediaQueryMd();

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
      subtitle: Record<Language, string>;
    }
  > = {
    branding: {
      pt: `Trabalhamos com o propósito de criar marcas humanas (como tu, como nós). Abordamos a criação de marcas de forma holística em que a forma informa a função.`,
      en: `We are committed to creating brands that are human (like you, like us). We approach brand building from an holistic perspective in which form infuses function.`,
      img: {
        src: SeloBranding,
        blurSrc: SeloBrandingBlur,
        alignment: "right",
      },
      subtitle: {
        en: "BRANDING",
        pt: "BRANDING",
      },
    },

    creativeConsultancy: {
      pt: `‘BANG!’, ‘WOW!’, ‘BOOM!’, ‘OMG!’, ‘YES!’, seja qual for o que precise ou alguma combinação especial, nós trazemos isso à mesa do seu projeto.`,
      en: `'BANG!', 'WOW!', 'BOOM!', 'OMG!', 'YES!', whatever you need or any particular combination, we bring it to your project table.`,
      img: {
        src: SeloConsultancy,
        blurSrc: SeloConsultancyBlur,
        alignment: "left",
      },
      subtitle: {
        en: "CREATIVE CONSULTANCY",
        pt: "CONSULTORIA CRIATIVA ",
      },
    },

    stereoProduction: {
      pt: `Entendendo a comunicação como um todo, estudamos a sua visão em produção e pós-produção de audio. Em produtos de rádio, instalações de arte e cinema desenhamos o som, assistimos e consultamos sobre audio e sonoplastia.`,
      en: `Understanding communication as a whole, we study and execute your vision in audio production and post-production. In radio products, art installations and cinema, we assist and consult on audio and sound design.`,
      img: {
        src: SeloStereo,
        blurSrc: SeloStereoBlur,
        alignment: "right",
      },
      subtitle: {
        en: "STEREO PRODUCTION",
        pt: "PRODUÇÃO STEREO",
      },
    },

    visualProduction: {
      pt: `Captar a atenção do consumidor é um desafio que endurece todos os dias, o que leva marcas a fazer escolhas repentinas, pois muitos dos métodos atualmente utilizados são descartáveis.
      Com as nossas produções procuramos deixar um impacto mais duradouro nas mentes e corações dos nossos clientes e telespectadores, através de filmes, documentários de longa e curta duração, minisséries, conteúdo para social mídia baseados em script, motion graphics, animação e muito mais.
      Para além dos aspectos mais técnicos do nosso campo de atividade, acreditamos na emoção e storytelling como ferramentas proeficientes de expressão sobre a cultura e sociedade(ou quaisquer outras humanidades em conversa).`,
      en: `Seizing consumer's attention is a challenge that grows tougher every day, which often leads brands to make immediate choices, as many of the methods currently used are disposable.
      With our productions we aim to make a long-lasting impact on the minds and hearts of our customers and audience, through film, long and short documentaries, miniseries, script-based social media content, motion graphics, animation and more.
      Beyond the more technical aspects of our field, we believe in emotion and storytelling as proficient tools of expression about culture and society(or any other humanities in conversation).`,
      img: {
        src: SeloVisual,
        blurSrc: SeloVisualBlur,
        alignment: "left",
      },
      subtitle: {
        en: "VISUAL PRODUCTION",
        pt: "PRODUÇÃO DE IMAGEM ",
      },
    },

    productPhotography: {
      pt: `Executámos a sua visão para ajudá-lo a enfrentar o desafio da consistência no mundo visualmente rico em que vivemos.`,
      en: `We put you vision into practice and help you tackle the challenge of consistency in the visually rich world we live in.`,
      img: {
        src: SeloPhotography,
        blurSrc: SeloPhotographyBlur,
        alignment: "right",
      },
      subtitle: {
        en: "PRODUCT PHOTOGRAPHY",
        pt: "FOTOGRAFIA DE PRODUTO",
      },
    },

    editorialDesign: {
      pt: `Elaboramos designs, composições e layouts que objetivam prender os olhos(e alma) do leitor à tua publicação considerando sempre os benchmarks, estudamos o seu caso cruzando a sua visão com as referências de melhor relevância, planejamos e implementamos no seu projeto para que a sua mensagem voe(não literalmentente), e seja transmitida com clareza e propósito.`,
      en: `We create designs, compositions and layouts that aim to catch the eye (and soul) of the reader. Always considering the benchmarks, we study your case crossing your vision with the most relevant references, we plan and implement on your project so that your message flies (not literally), and it's delivered with clarity and purpose.`,
      img: {
        src: SeloEditorial,
        blurSrc: SeloEditorialBlur,
        alignment: "left",
      },
      subtitle: {
        en: "EDITORIAL DESIGN",
        pt: "DESIGN EDITORIAL",
      },
    },
  };

  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "100vw",
      margin: `100px ${isSmallScreen ? OUTTER_GUTTER_MOBILE : OUTTER_GUTTER}px`,
      // marginTop: "260px !important",
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
    return <span style={{ width: width }}>{content}</span>;
  };

  const [tempShowingList, setTempShowingList] = React.useState<Array<string>>(
    []
  );
  const [showingList, setShowingList] = React.useState<Array<string>>([]);

  function onClickEvent(listKey: string) {
    const newList = [...showingList]; // copia sem ref da lista
    const eleAlreadyExists = Boolean(newList.find((key) => key === listKey)); // verificar se o elemento ja existe na lista
    newList.push(listKey); // adicionar o elemento
    !eleAlreadyExists && setShowingList(newList);
  }

  function onMouseEnterEvent(listKey: string, mouseEventValue: boolean) {
    const index = tempShowingList.findIndex((value) => listKey === value);
    const newList = [...tempShowingList];
    if (mouseEventValue === true) {
      index === -1 && newList.push(listKey);
    } else {
      index !== -1 && newList.splice(index, 1);
    }
    setTempShowingList(newList);
  }

  const title: Record<Language, string> = {
    en: "SERVICES",
    pt: "SERVIÇOS",
  };

  return (
    <div id="services" style={styles.main}>
      <Grid style={{ ...styles.gridContainer, padding: 0 }}>
        <Grid.Col
          span={12}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {isSmallScreen ? (
            <>
              <Grid.Col span={12} style={{ padding: 0 }}>
                <h2
                  style={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    marginBottom: "40px",
                  }}
                >
                  {title[language]}
                </h2>
              </Grid.Col>
            </>
          ) : (
            <>
              <Grid.Col span={TEXT_COL_SPAN} style={{ padding: 0 }} />
              <Grid.Col span={IMAGE_COL_SPAN} style={{ padding: 0 }}>
                <h2
                  style={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    marginBottom: "40px",
                  }}
                >
                  {title[language]}
                </h2>
              </Grid.Col>
            </>
          )}
        </Grid.Col>
        {Object.keys(content).map((key, index) => {
          let isTextShowing =
            tempShowingList.find((listElement) => listElement === key) ||
            showingList.find((listElement) => listElement === key)
              ? true
              : false;
          const { en, pt, subtitle } = content[key];
          const textContent = language === "en" ? en : pt;
          const { src, blurSrc, alignment: orientation } = content[key].img;
          return (
            <Grid.Col
              key={`image-text-container-${index}-${key}`}
              span={12}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 0,
                marginBottom: 160,
              }}
            >
              {isSmallScreen ? (
                <>
                  <Grid.Col span={12} style={{ padding: 0 }}>
                    <ImageComponent
                      imgSrc={src}
                      imgBlurSrc={blurSrc}
                      onClickHandler={() => onClickEvent(key)}
                      handleMouseEnter={(value: boolean) =>
                        onMouseEnterEvent(key, value)
                      }
                      disableMagnifier
                    />
                  </Grid.Col>
                  <Grid.Col span={12} style={{ padding: 0, marginTop: 15 }}>
                    <h3
                      style={{
                        opacity: 1,
                        fontStyle: "italic",
                        fontWeight: 500,
                        padding: 0,
                        display: "inline",
                      }}
                    >
                      {subtitle[language]}
                    </h3>
                  </Grid.Col>
                  <Grid.Col span={12} style={{ padding: 0 }}>
                    <Grid.Col
                      span={12}
                      style={{
                        ...styles.textContainer,
                        padding: 0,
                        marginTop: 15,
                      }}
                    >
                      <TextContent content={textContent} />
                    </Grid.Col>
                  </Grid.Col>
                </>
              ) : (
                <>
                  <Grid.Col
                    span={12}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: 0,
                      flexWrap: "wrap",
                    }}
                  >
                    {orientation === "right" ? (
                      <Grid.Col
                        span={TEXT_COL_SPAN}
                        style={{ ...styles.textContainer, padding: 0 }}
                      >
                        {isTextShowing && (
                          <TextContent content={textContent} width="460px" />
                        )}
                      </Grid.Col>
                    ) : null}
                    <Grid.Col span={IMAGE_COL_SPAN} style={{ padding: 0 }}>
                      <ImageComponent
                        imgSrc={src}
                        imgBlurSrc={blurSrc}
                        onClickHandler={() => onClickEvent(key)}
                        handleMouseEnter={(value: boolean) =>
                          onMouseEnterEvent(key, value)
                        }
                        disableMagnifier
                      />
                    </Grid.Col>
                    {orientation === "left" ? (
                      <Grid.Col
                        span={TEXT_COL_SPAN}
                        style={{ ...styles.textContainer, padding: 0 }}
                      >
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
                      padding: 0,
                    }}
                  >
                    <Grid.Col
                      span={IMAGE_COL_SPAN}
                      style={{ padding: 0, marginTop: "20px" }}
                    >
                      <h3
                        style={{
                          opacity: 1,
                          fontStyle: "italic",
                          fontWeight: 500,
                          padding: 0,
                          display: "inline",
                        }}
                      >
                        {subtitle[language]}
                      </h3>
                    </Grid.Col>
                  </Grid.Col>
                </>
              )}
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};
