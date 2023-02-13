import React from "react";
import { Language, LanguageProp } from "../MainPage";

interface NavbarProps {
  handleClick: () => void;
}

// TODO Dani
// - Aplicar estilos nos links na direita
// - Aplicar estilo no botão da língua
// - Inserir logo 

export const Navbar: React.FC<NavbarProps & LanguageProp> = ({
  language,
  handleClick,
}) => {
  const links: Array<{ href: string; content: Record<Language, string> }> = [
    {
      href: "#about",
      content: {
        en: "About",
        pt: "Sobre",
      },
    },
    {
      href: "#services",
      content: {
        en: "Services",
        pt: "Serviços",
      },
    },
    {
      href: "#steps",
      content: {
        en: "Steps",
        pt: "Passos",
      },
    },
    {
      href: "#connect",
      content: {
        en: "Connect",
        pt: "Conectar",
      },
    },
  ];

  const styles: Record<string, React.CSSProperties> = {
    main: {
      position: "fixed",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      border: "1px solid blue",
      height: "60px",
      zIndex: 10,
    },
    logo: {},
    links: {
      display: 'flex',
      flexDirection: 'row',
    },
    languageButton: {
      width: "50px",
    },
  };

  return (
    <div style={styles.main}>

      <div style={styles.logo}>
        <div>
          <a href="#home">Home</a>
        </div>
      </div>

      <div style={styles.links}>
        {links.map((item, index) => (
          <div style={{ margin: '0px 5px' }}>
            <a key={`content-${language}-${index}`} href={item.href} style={{ textDecoration: 'none' }}>{item.content[language]}</a>
          </div>
        ))}
        <button onClick={handleClick} style={styles.languageButton}>
          {language}
        </button>
      </div>
    </div>
  );
};
