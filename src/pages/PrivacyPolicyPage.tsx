import { Grid, Sx, Text } from "@mantine/core";
import React from "react";
import { Language, LanguageProp } from "../MainPage";
import {
  NAVBAR_HEIGHT,
  OUTTER_GUTTER,
  OUTTER_GUTTER_MOBILE,
} from "../components/Navbar";
import useMediaQueryMd from "../features/useMediaQueryMd";

export interface TitleContentComponentProps {
  title: Record<Language, string>;
  content: Record<Language, (React.ReactNode | string)[]>;
}

export type TitleContentData = Array<TitleContentComponentProps>;

const titlesAndContent: TitleContentData = [
  {
    title: {
      en: "Privacy Policy",
      pt: "Política de Privacidade",
    },
    content: {
      en: [
        "SELO Estúdio Visual(SU), Limitada has great consideration and respect for the privacy of people with whom it interacts. SELO is committed to protecting your privacy and complying with the Law No. 22/11 of 17 June - Law for the Protection of Personal Data. This covers, in general, the collection and processing of personal data provided by customers, suppliers, users of social media pages and others, including those collected through forms, documents or other forms of communication with SELO Estúdio Visual(SU), Limitada.",
        "This Privacy Policy (Policy) describes how we collect, maintain, use and disclose your personal information, and how we maintain the quality and security of your personal information.",
        "For the convenience of understanding of this Policy, the definitions used are those contemplated in Law No. 22/11 of June 17 - Law for the Protection of Personal Data:",
      ],
      pt: [
        "A SELO Estúdio Visual(SU), Limitada tem grande consideração e respeito pela privacidade das pessoas com as quais interage. A SELO compromete-se em proteger a sua privacidade e a cumprir a Lei n.o 22/11 de 17 de Junho - Lei da Protecção de Dados Pessoais. Isso abrange, de modo geral, a recolha e o tratamento dos dados pessoais fornecidos pelos clientes, fornecedores, usuários das páginas das redes sociais e outros, incluindo aqueles recolhidos por meio de formulários, documentos ou outras formas de comunicação com a SELO Estúdio Visual(SU), Limitada.",
        "Esta Política de Privacidade (Política) descreve a forma como recolhemos, mantemos, utilizamos e divulgamos as suas informações pessoais, e como mantemos a qualidade e segurança das suas informações pessoais.",
        "Para maior facilidade de compreensão desta Política, as definições utilizadas são as contempladas na Lei n.o 22/11 de 17 de Junho - Lei da Protecção de Dados Pessoais:"
      ],
    },
  },
  {
    title: {
      en: "1. Responsible for handling personal data",
      pt: "1. Responsável pelo tratamento dos Dados Pessoais",
    },
    content: {
      en: [
        '1.1 SELO is the entity responsible for the processing of personal data provided by the respective holder when filling out forms, as well as any other personal data which may be or have been provided in any other form, directly or indirectly, or which may have been generated by SELO, whether in the context of previous contacts or in the celebration, execution, renewal or termination of contracts, hereafter referred to as "Personal Data".',
        "1.2 The provision to SELO of personal data collected during pre-contractual procedures or during the hiring process, apart from those cases in which they correspond to information necessary for the fulfilment of SELO's legal obligations, will also be processed for the purposes of this policy.",
        "1.3 Personal data will be processed by the company, the entity responsible for data processing, for the purposes described in point 6 below, in strict compliance with the legislation in the matter of personal data protection.",
      ],
      pt: [
        "1.1 A SELO é a entidade responsável pelo tratamento dos dados pessoais fornecidos pelo respectivo titular no preenchimento de formulários, bem como os demais dados pessoais que venham a ser ou tenham sido fornecidos em qualquer outro suporte, directa ou indirectamente, ou que tenham sido gerados pela SELO, quer no âmbito de contactos prévios quer na celebração, execução, renovação ou cessação de contratos, doravante “Dados Pessoais”.",
        "1.2 O fornecimento, à SELO, dos dados pessoais recolhidos no âmbito de procedimentos pré-contratuais ou no processo de contratação, para além dos casos em que corresponda a informação necessária para cumprimento de obrigações legais da SELO serão também tratados para efeitos da presente política.",
        "1.3 Os dados pessoais serão tratados pela Sociedade, entidade responsável pelo tratamento dos dados, para as finalidades descritas no ponto 6, abaixo, em estrito cumprimento do estabelecido na legislação em vigor em matéria de protecção de dados pessoais.",
      ],
    },
  },
  {
    title: {
      en: "2. Data Protection Officer",
      pt: "2. Encarregado da Proteção de Dados",
    },
    content: {
      en: [
        "2.1 The Data Protection Officer can be contacted in writing at the following addresses:",
        "technical@selovisualstudio.com",
      ],
      pt: [],
    },
  },
  {
    title: {
      en: "3. What is Personal Data?",
      pt: "3. O que são Dados Pessoais?",
    },
    content: {
      en: [
        '3.1 "Personal Data" means any information, whether true or not, and whether recorded in a material form or not, about an identified individual or identifiable individual.',
        "Broadly speaking, this includes information or an opinion that personally identifies you, either directly (for example, your name) or indirectly.",
      ],
      pt: [
        "3.1 São “Dados Pessoais” toda e qualquer informação, verdadeira ou não, e registada sob forma material ou não, sobre um indivíduo identificado ou um indivíduo ou identificável. Em termos gerais, isto inclui informações ou uma opinião que o identifique pessoalmente, quer directamente (por exemplo, o seu nome), quer indirectamente."
      ],
    },
  },
  {
    title: {
      en: "4. Processing of Personal Data",
      pt: "4. Tratamento de Dados Pessoais",
    },
    content: {
      en: [
        "4.1 The Personal Data provided at the time of contact or start of the relationship with SELO, are treated in strict accordance with the precepts established in the legislation applicable to the Protection of Personal Data, namely:",
        "- treated in a lawful, fair and transparent manner;",
        "- collected for specified, legitimate and explicit purposes and never further processed in a way incompatible with those purposes;",
        "- accurate and, as required, kept up to date, while providing for appropriate measures to ensure the deletion and rectification of incomplete or inaccurate data, taking into account the purposes for which they were collected or for which they are further processed;",
        "- kept in a form which permits the identification of data subjects for no longer than is necessary and legally required for the purposes for which the data were collected or for which they are to be further processed.",
      ],
      pt: [
        "4.1 Os Dados Pessoais fornecidos aquando do contacto ou início de relação com a SELO, são tratados considerando estritamente os preceitos contemplados na legislação aplicável a Proteção de Dados Pessoais, nomeadamente:",
        "- tratados de forma lícita, leal e transparente;",
        "- recolhidos para finalidades específicas, legítimas e explícitas, e nunca sendo posteriormente tratados de forma incompatível com tais finalidades;",
        "- exactos e, se necessário, actualizados, disponibilizando igualmente as medidas adequadas para assegurar a eliminação e rectificação de dados incompletos ou inexatos, tendo em conta as finalidades para que foram recolhidos ou para que são tratados posteriormente;",
        "- conservados de maneira que permita a identificação dos seus titulares apenas durante o período estritamente necessário e dentro do legalmente permitido para a prossecução das finalidades de recolha ou do tratamento posterior.",
      ],
    },
  },
  {
    title: {
      en: "5. How do we collect your Personal Data?",
      pt: "5. Como recolhemos os seus Dados Pessoais?",
    },
    content: {
      en: [
        "We collect your personal data directly when you:",
        "- interact with us by phone;",
        "- interact with us in person;",
        "- interact with us online;",
        "- participate in research, surveys or questionnaires;",
        "- participate in a SELO event;",
        "- subscribe to our newsletter and mailing list;",
        "- apply for a position with us as an employee, supplier or volunteer.",
      ],
      pt: [
        "Recolhemos os seus dados pessoais directamente quando:",
        "- interagir connosco por telefone;",
        "- interagir connosco em pessoa;",
        "- interagir connosco On-line;",
        "- Participar em pesquisas, inquéritos ou questionários;",
        "- Participar num evento da SELO;",
        "- subscrever a nossa newsletter e mailing list;",
        "- candidatar-se a um cargo connosco como empregado, fornecedor ou voluntário.",
      ],
    },
  },
  {
    title: {
      en: "6. Purpose of Personal Data Processing",
      pt: "6. Finalidade do Tratamento de Dados Pessoais",
    },
    content: {
      en: [
        "6.1 The personal data provided by the holder or generated during the service provided will be processed and stored electronically for the exclusive use of SELO. We use and collect personal data strictly necessary and requested only for the purpose in question, for legitimate purposes, such as:",
        "- Provide requested information or services;",
        "- Offer a more personalized experience and service;",
        "- Improve the quality of services provided;",
        "- Meet internal administrative ends;",
        "- Perform marketing research and data analysis;",
        "- Comply with legal or regulatory requirements, necessary for the validity of certificates for some of the services offered, such as training initiatives;",
        "- Billing services/products.",
      ],
      pt: [
        "6.1 Os dados pessoais fornecidos pelo titular ou gerados durante o serviço prestado serão processados e armazenados eletronicamente para uso exclusivo da SELO. Utilizamos e recolhemos dados pessoais estritamente necessários e solicitados apenas para o propósito em causa, para fins legítimos, tais como:",
        "- Disponibilizar informações ou serviços requisitados;",
        "- Oferecer uma experiência e serviços mais personalizados;",
        "- Aprimorar a qualidade dos serviços prestados;",
        "- Atender objetivos administrativos internos;",
        "- Realizar pesquisas de marketing e análises de dados;",
        "- Cumprir requisitos legais ou regulamentares, necessários para a validade de certificados de alguns dos serviços oferecidos, como ações de treinamento;",
        "- Faturar serviços/produtos.",
      ],
    },
  },
  {
    title: {
      en: "7. Data Sharing",
      pt: "7. Partilha de Dados",
    },
    content: {
      en: [
        "7.1 SELO may share information with other entities which are directly or indirectly related to SELO, in compliance with the privacy policy implemented in accordance with applicable legal requirements, ensuring confidentiality and not exceeding the original purposes of processing.",
        "7.2 SELO may share information with other entities that provide services to it, in compliance with the privacy policy implemented in accordance with applicable legal requirements, ensuring confidentiality and not exceeding the original purposes of processing.",
      ],
      pt: [
        "7.1 A SELO poderá compartilhar informações com outras entidades que estejam directa ou indirectamente relacionadas à SELO, em cumprimento da política de privacidade implementada de acordo com as exigências legais aplicáveis, assegurando a confidencialidade e não ultrapassando as finalidades originais do tratamento.",
        "7.2 A SELO poderá compartilhar informações com outras entidades que lhe prestem serviços, em cumprimento da política de privacidade implementada de acordo com as exigências legais aplicáveis, assegurando a confidencialidade e não ultrapassando as finalidades originais do tratamento.",
      ],
    },
  },
  {
    title: {
      en: "8. Transferring data outside Angola",
      pt: "8. Transferência de dados para fora de Angola",
    },
    content: {
      en: [
        "8.1 The transfer of personal information outside Angola will only happen with the data owner's consent if it is essential to comply with requests or orders sent to SELO, by legal requirement or for the better internal organisation of the company.",
        "8.2 SELO may also transfer its clients' personal data to comply with legal obligations or judicial requests, in particular, concerning legal responsibilities to collaborate with government institutions and authorities.",
      ],
      pt: [
        "8.1 A transferência de informações pessoais para fora de Angola somente acontecerá mediante autorização do titular dos dados, caso seja essencial para cumprir pedidos ou ordens enviados à SELO, por requisito legal ou para melhor organização interna da empresa.",
        "8.2 A SELO poderá também transferir dados pessoais dos seus clientes para cumprir obrigações legais ou ordens judiciais, em particular no que diz respeito às responsabilidades legais de colaboração com instituições e autoridades governamentais.",
      ],
    },
  },
  {
    title: {
      en: "9. How do we protect your data?",
      pt: "9. Como protegemos os seus dados?",
    },
    content: {
      en: [
        "9.1 SELO ensures appropriate levels of security and protection of personal data and data owners. To this end, it implements multiple organizational, technical and physical security measures, to preserve information against change, dissemination, loss, unauthorized processing or access, as well as any other form of illegal processing.",
      ],
      pt: [
        "9.1 A SELO assegura níveis adequados de segurança e proteção dos dados pessoais dos titulares dos mesmos. Para, implementa múltiplas medidas de segurança organizacionais, técnicas e físicas, com o objetivo de preservar as informações contra a mudança, disseminação, perda, processamento ou acesso não autorizado, bem como qualquer outra forma de tratamento ilegal.",
      ],
    },
  },
  {
    title: {
      en: "10. Online Activity",
      pt: "10. Actividade Online",
    },
    content: {
      en: [
        "10.1 Cookies: SELO uses cookies on its website. These are small files made up of numbers and letters that are installed on your device, with your permission, when you access the site. Cookies allow the website to recognize your device, identifying it on subsequent visits and providing a better experience.",
        "10.1.2 Please note that we do not use cookies to identify you, only to optimize your experience on our site. If you prefer not to use them, you can change your browser settings to not have them automatically downloaded. However, it is important to remember that removing or blocking cookies may negatively affect your experience and functionality of our site.",
        "10.2 Direct Marketing: We may send you direct marketing communications and information about our services, opportunities or events that we consider may be of interest to you if you have requested or consented to receive such communications.",
      ],
      pt: [
        "10.1 Cookies: A SELO utiliza cookies no seu website. Estes são arquivos pequenos compostos por números e letras que são instalados no seu dispositivo, com sua permissão, quando você acessa o site. Os cookies permitem que o site reconheça seu dispositivo, identificando-o em visitas subsequentes e proporcionando uma melhor experiência.",
        "10.1.2 Vale ressaltar que não utilizamos cookies para identificá-lo, apenas para aprimorar sua experiência no nosso site. Caso prefira não utilizá-los, é possível mudar as configurações do seu navegador para não baixá-los automaticamente. Contudo, é importante lembrar que a remoção ou bloqueio de cookies pode afetar negativamente sua experiência e funcionalidade do nosso site.",
        "10.2 Marketing Directo: Podemos enviar-lhe comunicações de marketing directo e informações sobre nossos serviços, oportunidades ou eventos que consideramos que podem ser de seu interesse se você tiver solicitado ou consentido em receber tais comunicações.",
      ],
    },
  },
  {
    title: {
      en: "11. Data retention",
      pt: "11. Conservação e retenção de dados",
    },
    content: {
      en: [
        "11.1 SELO complies with the legal regulations regarding the retention of personal data and may keep such data for:",
        "(a) Up to ten years after the end of the contract;",
        "b) While there are obligations resulting from the contractual relationship.",
      ],
      pt: [
        "11.1 A SELO segue as normas legais referentes à retenção de dados pessoais, podendo manter tais dados por:",
        "a) Até dez anos após o término do contrato;",
        "b) Enquanto houver obrigações resultantes da relação contratual.",
      ],
    },
  },
  {
    title: {
      en: "12. How to access your Data",
      pt: "12. Como aceder aos seus Dados",
    },
    content: {
      en: [
        "12.1 SELO will strive to keep your personal information accurate, complete and up to date. If you wish to request to access and/or correct the personal data we hold about you, please request by contacting us via the contact details provided in number 2.",
      ],
      pt: [
        "12.1 A SELO empenhar-se-á para manter suas informações pessoais precisas, completas e actualizadas. Se você deseja fazer um pedido para acessar e/ou corrigir os dados pessoais que temos sobre você, faça uma solicitação entrando em contato conosco através do contacto disposto no número 2.",
      ],
    },
  },
  {
    title: {
      en: "13. Privacy Policy Update",
      pt: "13. Actualização da Política de Privacidade",
    },
    content: {
      en: [
        "13.1 SELO reserves the right to review, update, modify and replace this policy at any time, always by the principles stipulated in the legislation in force.",
      ],
      pt: [
        "13.1 A SELO reserva o direito de revisão actualização, modificação e substituição da presente política a qualquer altura, sempre de acordo com os princípios dispostos na legislação vigente.",
      ],
    },
  },
];

export const TitleContentComponent = ({
  title,
  content,
  language,
  index,
}: TitleContentComponentProps & { language: Language; index: number }) => {
  return (
    <>
      <Grid.Col
        xs={12}
        md={6}
        sx={{ marginTop: index === 0 ? undefined : `${OUTTER_GUTTER}px` }}
      >
        <Text fz="xl" fw={700}>
          {title[language]}
        </Text>
      </Grid.Col>
      <Grid.Col
        xs={12}
        md={6}
        sx={{ marginTop: index === 0 ? undefined : `${OUTTER_GUTTER}px` }}
      >
        {content[language].map((unitContent, index) => {
          return <Text key={index + '-text-item'}>{unitContent}</Text>;
        })}
      </Grid.Col>
    </>
  );
};

export const externalPageContentStyle: (isSmallScreen: boolean) => Sx = (isSmallScreen) => {
  return {
    padding: `${NAVBAR_HEIGHT + OUTTER_GUTTER}px ${
      isSmallScreen ? OUTTER_GUTTER_MOBILE : OUTTER_GUTTER
    }px`,
    maxWidth: "100%",
    flexWrap: "wrap",
  }
};

const PrivacyPolicyPage: React.FC<LanguageProp> = ({ language }) => {
  const isSmallScreen = useMediaQueryMd();
  return (
    <Grid sx={externalPageContentStyle(isSmallScreen)}>
      {titlesAndContent.map(({ title, content }, index) => (
        <TitleContentComponent
          language={language}
          title={title}
          content={content}
          index={index}
          key={index + '-title-page-content'}
        />
      ))}
    </Grid>
  );
};

export default PrivacyPolicyPage;
