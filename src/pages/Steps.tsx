import React from "react";

import { Language, LanguageProp } from "../MainPage";

import { Grid } from "@mantine/core";

// Steps resources
import ApplicationActivation from "../assets/steps/selo-authentication-application-activation-min.png";
import StrategyStudy from "../assets/steps/selo-etiquette-strategy-study-min.png";
import IdentityProposal from "../assets/steps/selo-signature-identity-proposal-min.png";
import { GRID_MAX_WIDTH } from "../features/gridUtils";

type StepsProps = LanguageProp;

export const Steps: React.FC<StepsProps> = ({ language }) => {
  const styles: Record<string, React.CSSProperties> = {
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingBottom: "100px",
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
    auth: {
      text: {
        en: "With your team at every step of the way, we create the tools to find your uniqueness, confirm and establish your brand’s authentic self.",
        pt: "Com a sua equipa em cada passo do caminho, criamos as ferramentas para encontrar a singularidade, confirmar e estabelecer a unicidade da sua marca.",
      },
      title: {
        pt: "Autenticação, Aplicação e ativação",
        en: "Authentication, Application and Activation",
      },
      imgSrc: ApplicationActivation,
    },
    etiquette: {
      text: {
        pt: "Fazemos perguntas, ouvimos e aprendemos. Vamos ao fundo da questão para construir a estratégia mais precisa e eficaz.",
        en: "We ask questions, listen and learn. We go to the core of the issue to build the most accurate and effective strategy.",
      },

      title: {
        pt: "Etiqueta, Estratégia e Estudo",
        en: "Etiquette, Strategy & Study",
      },
      imgSrc: StrategyStudy,
    },
    signature: {
      text: {
        pt: "Desenhamos protótipos e colocamos no papel o plano de ação para trazer a sua visão à vida.",
        en: "We develop prototypes and put on paper the action plan to bring your vision to life.",
      },
      title: {
        pt: "Assinatura, Identidade e Proposta",
        en: "Signature, Identity & Proposal",
      },
      imgSrc: IdentityProposal,
    },
  };

  const handleImageClick = (key: ContentKey) => setSelectedContent(key);
  const BOTTOM_HEIGHT = 50;

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
            <h3 style={{ fontSize: "35px", fontWeight: "bold" }}>
              STEPS <br />
              FOR OFFICIAL GUARANTEE CERTIFICATION
            </h3>
            <text style={{ marginBottom: BOTTOM_HEIGHT }}>{content[selectedContent].text[language]}</text>
          </Grid.Col>

          {(Object.keys(content) as Array<ContentKey>).map(
            (key: ContentKey, index) => {
              const { imgSrc, title } = content[key];
              // Thist guarantees that wherever the content, we'll only have 3 images
              return index <= 3 && imgSrc ? (
                <Grid.Col
                  span={3}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <div
                    onClick={() => handleImageClick(key)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={imgSrc} alt="" style={{ width: "100%" }} />
                  </div>
                  <div style={{ height: BOTTOM_HEIGHT }}>
                    <h3>{title?.[language]}</h3>
                  </div>
                </Grid.Col>
              ) : null;
            }
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          <h2
            style={{
              fontSize: "55px",
              textAlign: "center",
              fontStyle: 'italic'
            }}
          >
            ROADS?
          </h2>
          <h2
          style={{
            fontSize: "54px",
            textAlign: "center",
            fontStyle: 'italic'
          }}>
            Where we're going, <br />
            we don't need roads!
          </h2>
          <h5
          style={{
              fontSize: "25px",
              textAlign: "center",
              fontStyle: 'italic'
            }}>Dr. Emmett Brown, Back to the future</h5>
        </Grid.Col>
      </Grid>
    </div>
  );
};
