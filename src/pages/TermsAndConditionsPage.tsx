import React from "react";
import { Grid } from "@mantine/core";
import { LanguageProp } from "../MainPage";
import {
  TitleContentComponent,
  TitleContentData,
  externalPageContentStyle,
} from "./PrivacyPolicyPage";

import useMediaQueryMd from "../features/useMediaQueryMd";

const titlesAndContent: TitleContentData = [
  {
    title: {
      en: "Terms and Conditions page",
      pt: "Termos e Condições de Serviço",
    },
    content: {
      en: [
        "SELO Estúdio Visual(SU), Lda",
        "Our Terms and Conditions were last updated on 03/2023",
        "Please read these terms and conditions carefully before using our service(s).",
      ],
      pt: [
        "SELO Estúdio Visual(SU), Lda",
        "Os Nossos Termos e Condições foram actualizados pela última vez em 20/03/2023",
        "Por favor, leia atentamente estes termos e condições antes de utilizar o(s) nosso(s) serviço(s).",
      ],
    },
  },
  {
    title: {
      en: "Interpretation and definitions",
      pt: "Interpretação e Definições",
    },
    content: {
      en: [
        <h3>Interpretation</h3>,
        "Expressions beginning with a capital letter have precise meanings under the following circumstances. Subsequent definitions retain the same meaning regardless of whether they appear in singular or plural form.",
        <h3>Definitions</h3>,
        `For the purpose of these Terms and Conditions:`,
        <>- <span style={{ fontWeight: "bold" }}>"Account"</span> means a unique account created for you to access our Service or parts of our Service.</>,
        <>- <span style={{ fontWeight: "bold" }}>"Company"</span> (referred to in this Agreement as "the Company", "We", "Us" or "Our") refers to SELO Estúdio Visual Prestação de Serviços Lda, registered in the Conservatória do Registo Comercial under the number 16294 22/220504, Tax ID 5001019600.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Country"</span> refers to Angola and/or the Angolan national territory.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Content"</span> refers to content such as text, images, or other information that may be published, uploaded, linked to, or otherwise made available by you, regardless of the form of that content.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Device"</span> refers to any device that allows or uses you to access the Service, whether a cell phone, computer or tablet.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Feedback"</span> refers to communication, feedback or suggestions submitted by You regarding attributes, performance or features of our Service.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Products"</span> refers to the items or products posted for sale on the Service.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Service"</span> refers to the website.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Terms and Conditions"</span> (also referred to as "Terms") refers to these Terms and Conditions which form the entire agreement between You and the Company regarding the use of the Service.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Third Party Social Media Service"</span> refers to any services or content (including data, information, products or services) provided by third parties that may be made available, included in or displayed by the Service.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Website"</span> refers to the Company's online site, accessible through the selovisualstudio.com`</>,
        <>- <span style={{ fontWeight: "bold" }}>"You"</span>(including its graphical variations and synonyms) refers to the individual accessing or using the Service, or the company, or other legal entity that through such individual accesses or uses the Service.`</>,
      ],
      pt: [
        <h3>Interpretação e Definições Interpretação</h3>,
        "As expressões que começam com letra maiúscula possuem significados precisos sob as seguintes circunstâncias. As definições subsequentes mantêm o mesmo sentido, independentemente de aparecerem na forma singular ou plural.",
        <h3>Definições</h3>,
        `Para o propósito dos presentes Termos e Condições:`,
        <>- <span style={{ fontWeight: "bold" }}>"Conta"</span> significa uma conta única criada para que possa aceder ao nosso Serviço ou a partes do nosso Serviço.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Empresa"</span> (referida no presente Acordo como "a Empresa", "Nós", "Nosso" ou "Nosso") refere-se a SELO Estúdio Visual Prestação de Serviços Lda, registada na Conservatória do Registo Comercial sob o número 16294 22/220504, Contribuinte Fiscal 5001019600.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"País"</span> refere-se a Angola e/ou ao território nacional angolano.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Conteúdo"</span> refere-se a conteúdo como texto, imagens, ou outras informações que podem ser publicadas, carregadas, vinculadas ou disponibilizadas de outra forma por si, independentemente da forma desse conteúdo.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Dispositivo"</span> refere-se a qualquer dispositivo que lhe permita ou use para aceder ao Serviço, seja um telemóvel, computador ou um tablet.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Feedback"</span> refere-se a comunicação, feedback ou sugestões enviadas por Si referente a atributos, desempenho ou características do nosso Serviço.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Produtos"</span> refere-se aos itens ou produtos colocados para venda no Serviço.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Serviço"</span> refere-se ao website.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Termos e Condições"</span> (também referido como "Termos") refere-se aos presentes Termos e Condições que formam o total acordo entre Si e a Empresa referente ao uso do Serviço.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Serviço de Mídia Social de Terceiros"</span> refere-se a quaisquer serviços ou conteúdos (incluindo dados, informações, produtos ou serviços) fornecidos por terceiros que possam ser disponibilizados, incluídos ou exibidos pelo Serviço.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Website"</span> refere-se ao sítio online da Empresa, acessível através da ligação selovisualstudio.com.`</>,
        <>- <span style={{ fontWeight: "bold" }}>"Você"</span>(incluindo as suas variações gráficas e sinónimas) refere-se ao indivíduo que acesse ou use o Serviço, ou a empresa, ou outra entidade legal que através desta tal indivíduo acessa ou usa o Serviço.`</>,
      ],
    },
  },
  {
    title: {
      en: "Terms and Conditions",
      pt: "Termos e Condições",
    },
    content: {
      en: [
        `The Terms and Conditions herein govern the use of this Service and the agreement between the Client and the Company. These clauses establish the rights and duties of all users in relation to the use of the Service.`,
        `To access and use the Service, it is necessary for the User to agree and comply with the current Terms and Conditions. Such conditions apply to any visitor, user or other who accesses the Service.`,
        `By using the Service, the Client accepts the Terms and Conditions. In case of disagreement with any part of these Terms, access to the Service will not be allowed.`,
        `The User must be over 18 years old, in case of minor age, the access to the Service must be supervised by someone or some entity over 18 years old or through credible and efficient tools such as parental control. The Company shall not be liable for improper access to or use of the Service.`,
        `In addition, access to and use of the Service is subject to compliance with the Company's Privacy Policy. Such document sets forth the policies and procedures regarding the collection, use and disclosure of User's personal data when using the Website. The Privacy Policy also informs the User's privacy rights and legal protection. Before using the service, it is important that the User reads the Privacy Policy carefully.`,
      ],
      pt: [
        `Os Termos e Condições aqui presentes regulamentam o uso deste Serviço e o acordo que vigora entre o Cliente e a Empresa. Estas cláusulas estabelecem os direitos e deveres de todos os utilizadores em relação à utilização do Serviço.`,
        `Para ter acesso e usar o Serviço, é necessário que o Utilizador concorde e cumpra com os Termos e Condições vigentes. Tais condições aplicam-se a qualquer visitante, utilizador ou outro que acesse o Serviço.`,
        `Ao utilizar o Serviço, o Cliente aceita os Termos e Condições. Caso haja discordância com alguma parte destes Termos, o acesso ao Serviço não será permitido.`,
        `O Utilizador deve ter idade superior a 18 anos, em caso de idade inferior à anteriormente citada o acesso ao Serviço deve ser supervisionado por alguém ou alguma entidade de idade superior a 18 anos ou através de ferramentas credíveis e eficientes como o controlo parental. A Empresa não se responsabilizará pelo acesso ou utilização indevida do Serviço.`,
        `Além disso, o acesso e uso do Serviço estão sujeitos a conformidade com a Política de Privacidade da Empresa. Tal documento estabelece as políticas e procedimentos relativos à recolha, uso e divulgação de dados pessoais do Utilizador ao utilizar o Website. A Política de Privacidade também informa os direitos de privacidade e proteção legal do Utilizador. Antes de usar o serviço, é importante que o Utilizador leia atentamente a Política de Privacidade.`,
      ],
    },
  },

  {
    title: {
      en: "1. User Account",
      pt: "1. Contas de Utilizador",
    },
    content: {
      en: [
        "1.1 By subscribing to our Service, you are required to provide accurate, complete and up-to-date information at all times. Failure to do so constitutes a breach of our Terms and may result in the immediate termination of your account.",
        "1.2 You are responsible for protecting your password to access the Service or any measure made available for the informational security of the Service, and for any activity carried out with your password, regardless of whether you are using Our Service or a Third Party Social Media Service.",
        "1.3 You agree not to disclose your password or any measure made available for the informational security thereof to any third party, and you must inform Us immediately if you detect any breach of security or unauthorized use of your account.",
        "1.4 You may not use as a username the name of another person or entity, a name or trademark that is subject to the proprietary rights of a person or entity other than yourself, without proper authorization, or a name that is considered offensive or obscene.",
      ],
      pt: [
        "1.1 Ao subscrever ao nosso Serviço, é necessário que o Utilizador forneça informações precisas, completas e actualizadas em todos os momentos. O não cumprimento dessas condições constitui uma violação dos nossos Termos, podendo resultar no encerramento imediato da sua conta.",
        "1.2 O Utilizador é responsável por proteger a sua palavra-passe de acesso ao Serviço ou qualquer medida disponibilizada para a segurança informacional do mesmo, bem como por qualquer atividade realizada com a sua palavra-passe, independentemente de estar a utilizar o Nosso Serviço ou um Serviço de Mídia Social de Terceiros.",
        "1.3 O Cliente concorda em não divulgar a sua palavra-passe ou qualquer medida disponibilizada para a segurança informacional do mesmo a terceiros, e deve informar-nos imediatamente caso detecte qualquer violação de segurança ou uso não autorizado da sua conta.",
        "1.4 O Utilizador não pode utilizar como nome de utilizador o nome de outra pessoa ou entidade, um nome ou marca comercial que esteja sujeito a direitos de propriedade de outra pessoa ou entidade que não seja o próprio Utilizador, sem autorização adequada, ou nome que seja considerado ofensivo, vulgar ou obsceno.",
      ],
    },
  },
  {
    title: {
      en: "2. Content",
      pt: "2. Conteúdo",
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
      pt: [
        <h3>Permissão para publicar conteúdo</h3>,
        "2.1 Através do Nosso Serviço, e através de procedimentos próprios, permitimos ao Utilizador publicar conteúdo. É da responsabilidade do Utilizador garantir a legalidade, confiabilidade e adequação do Conteúdo que publica no Serviço.",
        "2.2 Ao publicar Conteúdo no Serviço, o Utilizador concede-nos o direito e licença para utilizar, modificar , executar publicamente, exibir publicamente, reproduzir e distribuir tal Conteúdo no e através do Serviço. O Utilizador mantém todos os seus direitos sobre qualquer conteúdo que submeta, publique ou exiba no ou através do nosso Serviço, sendo responsável por proteger esses direitos. O Utilizador concorda que esta licença inclui o direito de disponibilizar o seu Conteúdo a outros utilizadores do Serviço, que também podem utilizar o seu conteúdo, sujeito a estes termos.",
        "2.3 O Utilizador declara e garante que:",
        "● O Conteúdo é seu ou tem o direito de utilizá-lo e nos conceder os direitos e licenças previstos nestes Termos;",
        "● A publicação do seu Conteúdo no ou através do Serviço não viola os direitos de privacidade, autorais, de publicidade, contratuais ou quaisquer outros direitos de terceiros.",
      ],
    },
  },
  {
    title: {
      en: "3. Content Backup",
      pt: "3. Cópia de segurança de Conteúdo",
    },
    content: {
      en: [
        "3.1 Although regular backups of Content are made, the Company does not guarantee that no data will be lost or corrupted.",
        "3.1.2 Corrupt or invalid backup points may be caused by, without limitation, Content that is corrupted before a backup is made or that changes during the time a backup is made.",
        "3.2 Company will provide support and attempt to solve any known or discovered problems that may affect Content backups, but You acknowledge that Company has no liability related to the integrity of Content or the inability to successfully restore Content to a usable state.",
        "3.4 You agree to maintain a complete and accurate copy of any Content in a location independent of the Service.",
      ],
      pt: [
        "3.1 Embora sejam efectuados backups regulares de Conteúdo, a Empresa não garante que não haverá perda ou corrupção de dados.",
        "3.1.2 Pontos de backup corrompidos ou inválidos podem ser causados, sem limitação a, por Conteúdo corrompido antes de ser efectuado um backup ou que muda durante o tempo em que um backup é efectuado.",
        "3.2 A Empresa prestará apoio e tentará resolver quaisquer problemas conhecidos ou descobertos que possam afectar as cópias de segurança de Conteúdo, mas Você reconhece que a Empresa não tem qualquer responsabilidade relacionada com a integridade do Conteúdo ou com a incapacidade de restaurar com sucesso o Conteúdo a um estado utilizável.",
        "3.4 O utilizador concorda em manter uma cópia completa e exacta de qualquer Conteúdo num local independente do Serviço.",
      ],
    },
  },
  {
    title: {
      en: "4. Content Restrictions",
      pt: "4. Restrições ao Conteúdo",
    },
    content: {
      en: [
        "4.1 Any Content that is illegal, offensive, disturbing, intended to repel, threatening, libellous, defamatory, obscene or otherwise objectionable is expressly restricted from being posted on the Service.",
        "4.2 The Company has the right, but not the obligation, to evaluate and determine whether the content is appropriate and complies with the terms of use, and may refuse or remove such content. In addition, the Company may format, edit or modify the content at its convenience.",
        "4.3 You understand that by using the Service, you may be exposed to content that you find offensive, inaccurate or inappropriate, and you agree that under no circumstances shall the Company be liable for any errors or omissions in such content, or for any loss or damage resulting from its use.",
      ],
      pt: [
        "4.1 Qualquer Conteúdo que seja ilegal, ofensivo, perturbador, destinado a repugnância, ameaçador, calunioso, difamatório, obsceno ou de outra forma censurável, calunioso, difamatório, obsceno ou de outra forma censurável, é expressamente restrito ao Serviço.",
        "4.2 A Empresa tem o direito, mas não a obrigação, de avaliar e determinar se o conteúdo é apropriado e está em conformidade com os termos de uso, podendo recusar ou remover tal conteúdo. Além disso, a Empresa pode formatar, editar ou modificar o conteúdo de acordo com sua conveniência.",
        "4.3 O Utilizador compreende que, ao utilizar o Serviço, poderá ficar exposto a conteúdos que considere ofensivos, incorretos ou inapropriados, e concorda que em nenhuma circunstância a Empresa será responsável por quaisquer erros ou omissões em tal conteúdo, ou por quaisquer perdas ou danos resultantes de seu uso.",
      ],
    },
  },
  {
    title: {
      en: "5. Intellectual Property",
      pt: "5. Propriedade Intelectual",
    },
    content: {
      en: [
        "5.1 The Service, and its original content (excluding Content provided by You or other users), features and functionalities are and will remain the exclusive property of the Company and its licensors.",
        "5.2 The Service is protected by copyright, trademark and other laws of the Country and foreign countries.",
        "5.3 The use of our trademarks and brand imagery in connection with any product or service without the Company's prior written consent is prohibited.",
      ],
      pt: [
        "5.1 O Serviço, bem como ao seu conteúdo original (excluindo o Conteúdo fornecido por si ou por outros utilizadores), características e funcionalidades são e continuarão a ser de propriedade exclusiva da Empresa e de seus licenciadores.",
        "5.2 O serviço é protegido por direitos de autor, marcas registadas e outras leis do País e de países estrangeiros.",
        "5.3 A utilização de nossas marcas registadas e imagem comercial em relação a qualquer produto ou serviço sem o consentimento prévio por escrito da empresa é proibida.",
      ],
    },
  },
  {
    title: {
      en: "6. Violation of Intellectual Property",
      pt: "6. Violação da Propriedade Intelectual",
    },
    content: {
      en: [
        "6.1 It is Our policy to respect the intellectual property rights of others. If there is a complaint about the infringement or violation of someone's copyright or intellectual property rights in relation to content posted on the Service, We will respond promptly.",
        "6.2 If you are the copyright owner, or have permission on its behalf, and believe that a copyrighted work has been copied in a way that constitutes copyright infringement or violation through the Service, you must submit a notification by email to technical@selovisualstudio.com, and include in your notice a detailed description of the alleged infringement, supported by the procedures and provisions of the Law n.o 3/92 of 28 February, Industrial Property Law and other applicable laws.",
        "6.1 If the User presents false and misleading information that the content is infringing his copyright, he may be held responsible for damages, including costs and attorney's fees.",
      ],
      pt: [
        "6.1 É Nossa política respeitar os direitos de propriedade intelectual dos outros. Caso haja alguma reclamação sobre a infração ou violação dos direitos de autor ou de propriedade intelectual de alguém em relação ao conteúdo publicado no Serviço, responderemos em prontidão.",
        "6.2 Se o Utilizador for o proprietário dos direitos de autor ou possui autorização em nome deste e acredita que o trabalho protegido por direitos autor foi copiado de maneira que constitua uma infração ou violação dos direitos autor através do Serviço, deverá submeter uma notificação pelo correio eletrónico technical@selovisualstudio.com, e incluir na sua notificação uma descrição detalhada do alegada infracção, suportada pelos procedimentos e dispostos na Lei n.o 3/92 de 28 de Fevereiro, Lei da Propriedade Industrial e outros diplomas aplicáveis.",
        "6.1 Caso o Utilizador apresente informações falsas e enganosas de que o conteúdo está infringindo seus direitos autorais, este poderá ser responsabilizado por danos, incluindo custos e honorários advocatícios.",
      ],
    },
  },
  {
    title: {
      en: "7. Your Feedback to Us",
      pt: "7. O seu Feedback para nós",
    },
    content: {
      en: [
        "7.1 By providing any Feedback to the Company, You assign all of Your rights, title and interest in such Feedback. In the case of such assignment becoming ineffective for any reason, You agree to grant Company a worldwide, perpetual, irrevocable, royalty-free, non-exclusive right and license to use, reproduce, disclose, sublicense, distribute, modify, and exploit such Feedback without any restriction.",
      ],
      pt: [
        "7.1 Ao fornecer qualquer Feedback à Empresa, Você atribui todos os seus direitos, títulos e interesses sobre ele. Caso essa cessão seja ineficaz por algum motivo, Você concorda em conceder à Empresa um direito e licença mundial, perpétua, irrevogável, livre de royalties e não exclusiva para utilizar, reproduzir, divulgar, sublicenciar, distribuir, modificar e explorar tal Feedback sem nenhuma restrição.",
      ],
    },
  },
  {
    title: {
      en: "8. Links to Other Websites",
      pt: "8. Links para Outros websites",
    },
    content: {
      en: [
        "8.1 Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.",
        "8.2 The Company has no control over and takes no responsibility for the content, privacy policies, or practices of any third-party websites or services.",
        "8.3 You further acknowledge and agree that the Company shall not be liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, goods or services available on or through any such websites or services. You are strongly advised to carefully read the terms and conditions and privacy policies of any third-party websites or services that you visit.",
      ],
      pt: [
        "8.1 O nosso Serviço pode conter links para websites ou serviços de terceiros que não sejam propriedade ou controlados pela Empresa.",
        "8.2 A Empresa não tem qualquer controlo e não assume qualquer responsabilidade pelo conteúdo, políticas de privacidade, ou práticas de quaisquer sites ou serviços de terceiros.",
        "8.3 O utilizador reconhece e concorda ainda que a Empresa não será responsável, directa ou indirectamente, por qualquer dano ou perda causada ou alegadamente causada por ou em conexão com a utilização ou confiança em qualquer conteúdo, bens ou serviços disponíveis em ou através de tais websites ou serviços. É altamente recomendado que o usuário leia atentamente os termos e condições e as políticas de privacidade de quaisquer sites ou serviços de terceiros que visitar.",
      ],
    },
  },
  {
    title: {
      en: "9. Termination",
      pt: "9. Cessação",
    },
    content: {
      en: [
        "9.1 We may terminate or suspend your Account immediately, without notice or liability, for any reason, including, but not limited to, violations of these Terms and Conditions. Upon termination, your authorization to use the Service will immediately terminate. If you wish to stop using the Service, your account will be terminated immediately, or you may simply stop using the Service.",
      ],
      pt: [
        "9.1 Podemos encerrar ou suspender a sua Conta imediatamente, sem aviso prévio ou responsabilidade, por qualquer razão, incluindo, mas não se limitando a, violações destes Termos e Condições. Após a rescisão, sua autorização para usar o Serviço será imediatamente cancelada. Se você deseja encerrar o Serviço, sua conta será cancelada de imediato, ou você pode simplesmente parar de usar o Serviço.",
      ],
    },
  },
  {
    title: {
      en: "10. Limitation of liability",
      pt: "10. Limite de responsabilidade",
    },
    content: {
      en: [
        "10. 1 To the fullest extent permitted by applicable law, in no case shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal loss of privacy arising out of or in any way connected with the use or inability to use the Service, third party software and/or hardware used with the Service, or in any other way related to any clause of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the solution fails to achieve its essential purpose.",
        "10.1.2 In some countries, the exclusion of implied warranties or the limitation of liability for incidental or consequential damages is not permitted. This means that some of the above limitations may not apply. In such countries, each party's liability will be limited to the fullest extent permitted by law.",
      ],
      pt: [
        "10.1 Na extensão máxima permitida pela legislação aplicável, em nenhum caso a Empresa ou os seus fornecedores serão responsáveis por quaisquer danos especiais, acidentais, indirectos ou consequenciais (incluindo, mas não se limitando a, danos por perda de lucros, perda de dados ou outras informações, por interrupção de negócios, por danos pessoais, perda de privacidade resultante ou de qualquer forma relacionada com a utilização ou incapacidade de utilizar o Serviço, software e/ou hardware de terceiros utilizados com o Serviço, ou de qualquer outra forma relacionada com qualquer disposição dos presentes Termos), mesmo que a Empresa ou qualquer fornecedor tenha sido informado da possibilidade de tais danos e mesmo que a solução falhe em atingir o seu propósito essencial.",
        "10.1.2 Em alguns países, não é permitida a exclusão de garantias implícitas ou a limitação de responsabilidade por danos incidentais ou consequentes. Isso significa que algumas das limitações acima mencionadas podem não se aplicar. Nessas países, a responsabilidade de cada parte será limitada na medida máxima permitida por lei.",
      ],
    },
  },
  {
    title: {
      en: "11. Limit of Liability on Warranty",
      pt: "11. Limite de responsabilidade sobre a garantia",
    },
    content: {
      en: [
        "11.1 The Company and its suppliers make no warranty, express or implied, as to the operation or availability of the Service, or the information, content and materials or products included therein, that the Service will be uninterrupted or error-free, as to the accuracy, reliability or timeliness of any information or Content provided through the Service, that the Service, its servers, content or emails sent by the Company are free of viruses or other harmful components.",
        "11.1.2 In some countries, certain types of guarantees or statutory rights of the User may not be excluded, which means that some or all of the above exclusions and limitations may not apply to the User. However, the exclusions and limitations set out in this section will apply to the fullest extent permitted by applicable law.",
      ],
      pt: [
        "11.1 A Empresa e seus fornecedores não representam nenhuma garantia, expressa ou implícita, quanto ao funcionamento ou disponibilidade do Serviço, ou a informação, conteúdo e materiais ou produtos incluídos no mesmo, de que o Serviço será ininterrupto ou sem erros, quanto a exactidão, fiabilidade ou actualidade de qualquer informação ou Conteúdo fornecido através do Serviço, de que o Serviço, seus servidores, conteúdo ou e-mails enviados pela Empresa estejam livres de vírus ou outros componentes prejudiciais.",
        "11.1.2 Em alguns países, certos tipos de garantias ou direitos estatutários do Utilizador podem não ser excluídos, o que significa que algumas ou todas as exclusões e limitações mencionadas acima podem não se aplicar ao Utilizador. No entanto, as exclusões e limitações estabelecidas nesta secção serão aplicadas na medida máxima permitida pela lei aplicável.",
      ],
    },
  },
  {
    title: {
      en: "12. Applicable Law",
      pt: "12. Legislação aplicável",
    },
    content: {
      en: [
        "12.1 The laws of the Country will govern these Terms and Your use of the Service. Your use of the Service may also be subject to other local, state, national, or international laws.",
      ],
      pt: [
        "12.1 As leis do País regerão os presentes Termos e a Sua utilização do Serviço. A utilização do Serviço pode também estar sujeita a outras leis locais, estatais, nacionais, ou internacionais.",
      ],
    },
  },
  {
    title: {
      en: "13. Settlement of Litigation",
      pt: "13. Resolução de Litígio",
    },
    content: {
      en: [
        "13.1 Any existing or potential litigation regarding these Terms or the use of the Service, which has not been resolved amicably, should be referred to the Provincial Court of Luanda.",
      ],
      pt: [
        "13.1 Qualquer questão litigiosa existente ou que possa vir a surgir relativamente aos presentes Termos ou ao uso do Serviço, que não tenha sido solucionada amigavelmente, deverá ser encaminhada ao Tribunal Provincial de Luanda.",
      ],
    },
  },
  {
    title: {
      en: "14. Changes and Updates to the Terms",
      pt: "14. Mudanças e actualizações nos Termos",
    },
    content: {
      en: [
        "14.1 The Company reserves the right to revise, update, replace and change these Terms at any time in accordance with the principles as defined by applicable law.",
        "14.2 By continuing to access or use Our Service after such revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms or any update, in whole or in part, please stop using the Service.",
      ],
      pt: [
        "14.1 A Empresa reserva o direito de revisão, actualização, substituição e mudança dos presentes Termos a qualquer altura, sempre de acordo com os princípios dispostos na legislação vigente.",
        "14.2 Ao continuar a aceder ou utilizar o Nosso Serviço após essas revisões entrarem em vigor, o Uilizador concorda em ficar vinculado aos termos revistos. Se não concordar com os novos termos ou alguma actualização, no todo ou em parte, por favor deixe de utilizar o Serviço.",
      ],
    },
  },
  {
    title: {
      en: "Contact us",
      pt: "Entre em contacto conosco",
    },
    content: {
      en: [
        "If you have any questions regarding the present Terms and Conditions, You can contact us by e-mail: technical@selovisualstudio.com.",
      ],
      pt: ["Entre em contacto conosco"],
    },
  },
];

const TermsAndConditionsPage: React.FC<LanguageProp> = ({ language }) => {
  const isSmallScreen = useMediaQueryMd();

  return (
    <Grid sx={externalPageContentStyle(isSmallScreen)}>
      {titlesAndContent.map(({ title, content }, index) => (
        <TitleContentComponent
          language={language}
          title={title}
          content={content}
          index={index}
          key={index + "-title-content"}
        />
      ))}
    </Grid>
  );
};

export default TermsAndConditionsPage;
