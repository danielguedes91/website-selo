import React from "react";

import { Language, LanguageProp } from "../MainPage";

import { Grid } from "@mantine/core";

// Steps resources
import ApplicationActivation from "../assets/steps/selo-authentication-application-activation-min.png";
import StrategyStudy from "../assets/steps/selo-etiquette-strategy-study-min.png";
import IdentityProposal from "../assets/steps/selo-signature-identity-proposal-min.png";
import { GRID_MAX_WIDTH } from "../features/gridUtils";
import { ImageComponent } from "../components/ImageComponent";

type StepsProps = LanguageProp;

export const Steps: React.FC<StepsProps> = ({ language }) => {
  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      // paddingBottom: "100px",
    },
    gridContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: GRID_MAX_WIDTH,
      margin: "0px 80px",
    },
  };

  const contentKeys = ["default", "auth", "etiquette", "signature"] as const;
  type ContentKey = typeof contentKeys[number];
  const [selectedContent, setSelectedContent] =
    React.useState<ContentKey>("default");

  const mainContent: Record<
    "roads" | "text" | "signature",
    Record<Language, React.ReactNode>
  > = {
    roads: {
      en: <>ROADS?</>,
      pt: <>ESTRADAS?</>,
    },
    text: {
      en: (
        <>
          WHERE WE'RE GOING, <br />
          WE DON'T NEED ROADS!
        </>
      ),
      pt: (
        <>
          AONDE VAMOS, <br /> NÃO PRECISAMOS DE ESTRADAS!
        </>
      ),
    },
    signature: {
      en: <>
        DR. EMMETT BROWN, BACK TO THE FUTURE
      </>,
      pt: <>
        DR. EMMETT BROWN, BACK TO THE FUTURE
      </>
    },
  };

  const content: Record<
    ContentKey,
    {
      text: Record<Language, string>;
      title?: Record<Language, string>;
      imgSrc?: string;
    }
  > = {
    default: {
      text: {
        en: "We ask questions, listen and learn. We go to the core of the issue to build the most accurate and effective strategy.",
        pt: "Fazemos perguntas, ouvimos e aprendemos. Vamos ao fundo da questão para construir a estratégia mais precisa e eficaz.",
      },
    },

    etiquette: {
      text: {
        pt: "Fazemos perguntas, ouvimos e aprendemos. Vamos ao fundo da questão para construir a estratégia mais precisa e eficaz.",
        en: "We ask questions, listen and learn. We go to the core of the issue to build the most accurate and effective strategy.",
      },

      title: {
        pt: "ETIQUETA, ESTRATÉGIA E ESTUDO",
        en: "ETIQUETTE, STRATEGY & STUDY",
      },
      imgSrc: StrategyStudy,
    },
    signature: {
      text: {
        pt: "Desenhamos protótipos e colocamos no papel o plano de ação para trazer a sua visão à vida.",
        en: "We develop prototypes and put on paper the action plan to bring your vision to life.",
      },
      title: {
        pt: "ASSINATURA, IDENTIDADE E PROPOSTA",
        en: "SIGNATURE, IDENTITY & PROPOSAL",
      },
      imgSrc: IdentityProposal,
    },
    auth: {
      text: {
        en: "With your team at every step of the way, we create the tools to find your uniqueness, confirm and establish your brand’s authentic self.",
        pt: "Com a sua equipa em cada passo do caminho, criamos as ferramentas para encontrar a singularidade, confirmar e estabelecer a unicidade da sua marca.",
      },
      title: {
        pt: "AUTENTICAÇÃO, APLICAÇÃO E ATIVAÇÃO",
        en: "AUTHENTICATION, APPLICATION AND ACTIVATION",
      },
      imgSrc: ApplicationActivation,
    },
  };

  const handleImageClick = (key: ContentKey) => setSelectedContent(key);
  const BOTTOM_HEIGHT = 50;

  const leftTitle: Record<Language, React.ReactNode> = {
    en: (
      <>
        STEPS <br />
        <span style={{ fontStyle: "italic", fontWeight: 500 }}>
          FOR OFFICIAL GUARANTEE CERTIFICATION
        </span>
      </>
    ),
    pt: (
      <>
        DEGRAUS <br />
        <span style={{ fontStyle: "italic", fontWeight: 500 }}>
          DE CERTIFICAÇÃO OFICIAL DE GARANTIA
        </span>
      </>
    ),
  };

  return (
    <div id="steps" style={styles.main}>
      <Grid style={styles.gridContainer}>
        <Grid.Col span={12} sx={{ display: "flex", flexDirection: "row" }}>
          <Grid.Col
            span={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
              {leftTitle[language]}
            </h3>
            <div style={{ marginBottom: BOTTOM_HEIGHT + 7 }}>
              {content[selectedContent].text[language]}
            </div>
          </Grid.Col>

          {(Object.keys(content) as Array<ContentKey>).map(
            (key: ContentKey, index) => {
              const { imgSrc, title } = content[key];
              // Thist guarantees that wherever the content, we'll only have 3 images
              return index <= 3 && imgSrc ? (
                <Grid.Col
                  span={3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "12px",
                  }}
                  key={index + '-image'}
                >
                  <ImageComponent
                    imgSrc={imgSrc}
                    onClickHandler={() => handleImageClick(key)}
                    handleMouseEnter={() => handleImageClick(key)}
                  />
                  <div style={{ height: BOTTOM_HEIGHT }}>
                    <h3>
                      {(selectedContent === "default" ||
                        selectedContent === key) &&
                        title?.[language]}
                    </h3>
                  </div>
                </Grid.Col>
              ) : null;
            }
          )}
        </Grid.Col>
        <Grid.Col span={12} sx={{ marginTop: "200px" }}>
          <h2
            style={{
              fontSize: "55px",
              textAlign: "center",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            {mainContent.roads[language]}
          </h2>
          <h2
            style={{
              fontSize: "54px",
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: 500,
              margin: 0,
            }}
          >{mainContent.text[language]}</h2>
          <h5
            style={{
              fontSize: "25px",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            <span style={{ fontWeight: 500, fontStyle: "italic" }}>
              {mainContent.signature[language]}
            </span>
          </h5>
        </Grid.Col>
      </Grid>
    </div>
  );
};
