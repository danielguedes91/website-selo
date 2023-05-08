import React from "react";
import { Grid } from "@mantine/core";
import { LanguageProp } from "../MainPage";
import {
  TitleContentComponent,
  TitleContentData,
  externalPageContentStyle,
} from "./PrivacyPolicyPage";

import useMediaQueryMd from "../features/useMediaQueryMd";

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
];

const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({
  language,
  onClose,
}) => {
  const isSmallScreen = useMediaQueryMd();

  return (
    <Grid sx={externalPageContentStyle(isSmallScreen)}>
      {titlesAndContent.map(({ title, content }, index) => (
        <TitleContentComponent
          language={language}
          title={title}
          content={content}
          index={index}
        />
      ))}
    </Grid>
  );
};

export default TermsAndConditionsPage;
