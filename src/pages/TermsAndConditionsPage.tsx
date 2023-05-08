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
      en: "Terms and Conditions",
      pt: "",
    },
    content: {
      en: [
        `The Terms and Conditions herein govern the use of this Service and the agreement between the Client and the Company. These clauses establish the rights and duties of all users in relation to the use of the Service.`,
        `To access and use the Service, it is necessary for the User to agree and comply with the current Terms and Conditions. Such conditions apply to any visitor, user or other who accesses the Service.`,
        `By using the Service, the Client accepts the Terms and Conditions. In case of disagreement with any part of these Terms, access to the Service will not be allowed.`,
        `The User must be over 18 years old, in case of minor age, the access to the Service must be supervised by someone or some entity over 18 years old or through credible and efficient tools such as parental control. The Company shall not be liable for improper access to or use of the Service.`,
        `In addition, access to and use of the Service is subject to compliance with the Company's Privacy Policy. Such document sets forth the policies and procedures regarding the collection, use and disclosure of User's personal data when using the Website. The Privacy Policy also informs the User's privacy rights and legal protection. Before using the service, it is important that the User reads the Privacy Policy carefully.`,
      ],
      pt: [],
    },
  },

  {
    title: {
      en: "1. User Account",
      pt: "",
    },
    content: {
      en: [
        "1.1 By subscribing to our Service, you are required to provide accurate, complete and up-to-date information at all times. Failure to do so constitutes a breach of our Terms and may result in the immediate termination of your account.",
        "1.2 You are responsible for protecting your password to access the Service or any measure made available for the informational security of the Service, and for any activity carried out with your password, regardless of whether you are using Our Service or a Third Party Social Media Service.",
        "1.3 You agree not to disclose your password or any measure made available for the informational security thereof to any third party, and you must inform Us immediately if you detect any breach of security or unauthorized use of your account.",
        "1.4 You may not use as a username the name of another person or entity, a name or trademark that is subject to the proprietary rights of a person or entity other than yourself, without proper authorization, or a name that is considered offensive or obscene.",
      ],
      pt: [],
    },
  },
  {
    title: {
      en: "2. Content",
      pt: "",
    },
    content: {
      en: [
        <h3>Permission to upload content</h3>,
        "2.1 Through Our Service, and through Our own procedures, We allow You to upload content. It is Your responsibility to ensure the legality, reliability and adequacy of the Content You post on the Service.",
        "2.2 By posting Content on the Service, You grant Us the right and license to use, modify, publicly perform, publicly display, reproduce and distribute such Content on and through the Service. You retain all of your rights in any Content that you submit, post or display on or through our Service, and you are responsible for protecting those rights. You agree that this license includes the right to make your Content available to other users of the Service, who may also use your Content, subject to these terms.",
        "2.3 The User declares and guarantees that:",
        "● You own the Content or have the right to use it and grant us the rights and licenses that are set forth in these Terms;",
        "● Posting your Content on or through the Service does not violate the privacy, copyright, publicity, contractual or any other rights of any third party.",
      ],
      pt: [],
    },
  },
  {
    title: {
      en: "3. Content Backup",
      pt: "",
    },
    content: {
      en: [
        "3.1 Although regular backups of Content are made, the Company does not guarantee that no data will be lost or corrupted.",
        "3.1.2 Corrupt or invalid backup points may be caused by, without limitation, Content that is corrupted before a backup is made or that changes during the time a backup is made.",
        "3.2 Company will provide support and attempt to solve any known or discovered problems that may affect Content backups, but You acknowledge that Company has no liability related to the integrity of Content or the inability to successfully restore Content to a usable state.",
        "3.4 You agree to maintain a complete and accurate copy of any Content in a location independent of the Service.",
      ],
      pt: [],
    },
  },
  {
    title: {
      en: "4. Content Restrictions",
      pt: "",
    },
    content: {
      en: [
        "4.1 Any Content that is illegal, offensive, disturbing, intended to repel, threatening, libellous, defamatory, obscene or otherwise objectionable is expressly restricted from being posted on the Service.",
        "4.2 The Company has the right, but not the obligation, to evaluate and determine whether the content is appropriate and complies with the terms of use, and may refuse or remove such content. In addition, the Company may format, edit or modify the content at its convenience.",
        "4.3 You understand that by using the Service, you may be exposed to content that you find offensive, inaccurate or inappropriate, and you agree that under no circumstances shall the Company be liable for any errors or omissions in such content, or for any loss or damage resulting from its use.",
      ],
      pt: [],
    },
  },
  {
    title: {
      en: "5. Intellectual Property",
      pt: "",
    },
    content: {
      en: [
        "5.1 The Service, and its original content (excluding Content provided by You or other users), features and functionalities are and will remain the exclusive property of the Company and its licensors.",
        "5.2 The Service is protected by copyright, trademark and other laws of the Country and foreign countries.",
        "5.3 The use of our trademarks and brand imagery in connection with any product or service without the Company's prior written consent is prohibited.",
      ],
      pt: [],
    },
  },
  {
    title: {
      en: "6. Violation of Intellectual Property",
      pt: "",
    },
    content: {
      en: [
        "6.1 It is Our policy to respect the intellectual property rights of others. If there is a complaint about the infringement or violation of someone's copyright or intellectual property rights in relation to content posted on the Service, We will respond promptly.",
        "6.2 If you are the copyright owner, or have permission on its behalf, and believe that a copyrighted work has been copied in a way that constitutes copyright infringement or violation through the Service, you must submit a notification by email to technical@selovisualstudio.com, and include in your notice a detailed description of the alleged infringement, supported by the procedures and provisions of the Law n.o 3/92 of 28 February, Industrial Property Law and other applicable laws.",
        "6.1 If the User presents false and misleading information that the content is infringing his copyright, he may be held responsible for damages, including costs and attorney's fees."
      ],
      pt: [],
    },
  },
  {
    title: {
      en: "7. Your Feedback to Us",
      pt: "",
    },
    content: {
      en: ["7.1 By providing any Feedback to the Company, You assign all of Your rights, title and interest in such Feedback. In the case of such assignment becoming ineffective for any reason, You agree to grant Company a worldwide, perpetual, irrevocable, royalty-free, non-exclusive right and license to use, reproduce, disclose, sublicense, distribute, modify, and exploit such Feedback without any restriction."],
      pt: [],
    },
  },
  {
    title: {
      en: "8. Links to Other Websites",
      pt: "",
    },
    content: {
      en: [
        "8.1 Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.",
        "8.2 The Company has no control over and takes no responsibility for the content, privacy policies, or practices of any third-party websites or services.",
        "8.3 You further acknowledge and agree that the Company shall not be liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, goods or services available on or through any such websites or services. You are strongly advised to carefully read the terms and conditions and privacy policies of any third-party websites or services that you visit.",
      ],
      pt: [],
    },
  },
  {
    title: {
      en: "9. Termination",
      pt: "",
    },
    content: {
      en: ["9.1 We may terminate or suspend your Account immediately, without notice or liability, for any reason, including, but not limited to, violations of these Terms and Conditions. Upon termination, your authorization to use the Service will immediately terminate. If you wish to stop using the Service, your account will be terminated immediately, or you may simply stop using the Service."],
      pt: [],
    },
  },
  {
    title: {
      en: "10. Limitation of liability",
      pt: "",
    },
    content: {
      en: [
        "10. 1 To the fullest extent permitted by applicable law, in no case shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal loss of privacy arising out of or in any way connected with the use or inability to use the Service, third party software and/or hardware used with the Service, or in any other way related to any clause of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the solution fails to achieve its essential purpose.",
        "10.1.2 In some countries, the exclusion of implied warranties or the limitation of liability for incidental or consequential damages is not permitted. This means that some of the above limitations may not apply. In such countries, each party's liability will be limited to the fullest extent permitted by law.",
      ],
      pt: [],
    },
  },
  {
    title: {
      en: "11. Limit of Liability on Warranty",
      pt: "",
    },
    content: {
      en: [
        "11.1 The Company and its suppliers make no warranty, express or implied, as to the operation or availability of the Service, or the information, content and materials or products included therein, that the Service will be uninterrupted or error-free, as to the accuracy, reliability or timeliness of any information or Content provided through the Service, that the Service, its servers, content or emails sent by the Company are free of viruses or other harmful components.",
        "11.1.2 In some countries, certain types of guarantees or statutory rights of the User may not be excluded, which means that some or all of the above exclusions and limitations may not apply to the User. However, the exclusions and limitations set out in this section will apply to the fullest extent permitted by applicable law.",
      ],
      pt: [],
    },
  },
  {
    title: {
      en: "12. Applicable Law",
      pt: "",
    },
    content: {
      en: ["12.1 The laws of the Country will govern these Terms and Your use of the Service. Your use of the Service may also be subject to other local, state, national, or international laws."],
      pt: [],
    },
  },
  {
    title: {
      en: "13. Settlement of Litigation",
      pt: "",
    },
    content: {
      en: ["13.1 Any existing or potential litigation regarding these Terms or the use of the Service, which has not been resolved amicably, should be referred to the Provincial Court of Luanda."],
      pt: [],
    },
  },
  {
    title: {
      en: "14. Changes and Updates to the Terms",
      pt: "",
    },
    content: {
      en: [
        "14.1 The Company reserves the right to revise, update, replace and change these Terms at any time in accordance with the principles as defined by applicable law.",
        "14.2 By continuing to access or use Our Service after such revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms or any update, in whole or in part, please stop using the Service.",
      ],
      pt: [],
    },
  },
  {
    title: {
      en: "Contact us",
      pt: "",
    },
    content: {
      en: ["If you have any questions regarding the present Terms and Conditions, You can contact us by e-mail: technical@selovisualstudio.com."],
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
