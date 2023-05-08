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

// export interface TitleContentComponentNodeProps {
//   title: Record<Language, string>;
//   content: Record<Language, (string | React.ReactNode)[]>;
// }

const titlesAndContent: TitleContentData = [
  {
    title: {
      en: "Terms and Conditions page",
      pt: "",
    },
    content: {
      en: [
        "SELO Estúdio Visual(SU), Lda",
        "Our Terms and Conditions were last updated on 03/2023",
        "Please read these terms and conditions carefully before using our service(s).",
      ],
      pt: [],
    },
  },
  {
    title: {
      en: "Interpretation and definitions",
      pt: "",
    },
    content: {
      en: [
        <h3>Interpretation</h3>,
        "Expressions beginning with a capital letter have precise meanings under the following circumstances. Subsequent definitions retain the same meaning regardless of whether they appear in singular or plural form.",
        <h3>Definitions</h3>,
        `For the purpose of these Terms and Conditions:`,
        `- "Account" means a unique account created for you to access our Service or parts of our Service.`,
        `- "Company" (referred to in this Agreement as "the Company", "We", "Us" or "Our") refers to SELO Estúdio Visual Prestação de Serviços Lda, registered in the Conservatória do Registo Comercial under the number 16294 22/220504, Tax ID 5001019600.`,
        `- "Country" refers to Angola and/or the Angolan national territory.`,
        `- "Content" refers to content such as text, images, or other information that may be published, uploaded, linked to, or otherwise made available by you, regardless of the form of that content.`,
        `- "Device" refers to any device that allows or uses you to access the Service, whether a cell phone, computer or tablet.`,
        `- "Feedback" refers to communication, feedback or suggestions submitted by You regarding attributes, performance or features of our Service.`,
        `- "Products" refers to the items or products posted for sale on the Service.`,
        `- "Service" refers to the website.`,
        `- "Terms and Conditions" (also referred to as "Terms") refers to these Terms and Conditions which form the entire agreement between You and the Company regarding the use of the Service.`,
        `- "Third Party Social Media Service" refers to any services or content (including data, information, products or services) provided by third parties that may be made available, included in or displayed by the Service.`,
        `- "Website" refers to the Company's online site, accessible through the selovisualstudio.com`,
        `- "You"(including its graphical variations and synonyms) refers to the individual accessing or using the Service, or the company, or other legal entity that through such individual accesses or uses the Service.`,
      ],
      pt: [],
    },
  },
  {
    title: {
      en: "",
      pt: "",
    },
    content: {
      en: [""],
      pt: [],
    },
  },

  {
    title: {
      en: "",
      pt: "",
    },
    content: {
      en: [""],
      pt: [],
    },
  },
  {
    title: {
      en: "",
      pt: "",
    },
    content: {
      en: [""],
      pt: [],
    },
  },
  {
    title: {
      en: "",
      pt: "",
    },
    content: {
      en: [""],
      pt: [],
    },
  },
  {
    title: {
      en: "",
      pt: "",
    },
    content: {
      en: [""],
      pt: [],
    },
  },
  {
    title: {
      en: "",
      pt: "",
    },
    content: {
      en: [""],
      pt: [],
    },
  },
  {
    title: {
      en: "",
      pt: "",
    },
    content: {
      en: [""],
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
