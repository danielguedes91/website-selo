import React from "react";
import { CloseButton, Grid } from "@mantine/core";
import { LanguageProp, PAPER_BG } from "../MainPage";
import { TitleContentComponent, TitleContentData } from "./PrivacyPolicyPage";

interface TermsAndConditionsPageProps extends LanguageProp {
  onClose: () => void;
}


const titlesAndContent: TitleContentData = [
  {
    title: {
      en: "Terms and Conditions page",
      pt: "",
    },
    content: {
      en: [],
      pt: [],
    },
  },
]

const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({
  language,
  onClose,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        right: 0,
        overflow: "hidden",
        zIndex: 100,
        backgroundColor: PAPER_BG,
        // pointerEvents: "none",
      }}
    >
      <div>
        <CloseButton
          onClick={onClose}
          size="xl"
          sx={{
            position: "absolute",
            top: 30,
            right: 30,
            backgroundColor: "transparent !important",
            // svg: { stroke: "white" },
          }}
        />
        <Grid sx={{ padding: "0px 30px", width: "100%", maxWidth: "100%" }}>
        {titlesAndContent.map(({ title, content }, index) => (
          <TitleContentComponent language={language} title={title} content={content} index={index} />
        ))}
      </Grid>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
