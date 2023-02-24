import React from "react";
import { Language, LanguageProp } from "../MainPage";
import SeloLogoGrey from "../assets/home/selo-logo-grey.svg";

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
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      border: "1px solid blue",
      height: "60px",
      zIndex: 10,
      margin: '0 auto',
      padding: '0px 50px',
    },
    logoContainer: {},
    links: {
      display: "flex",
      flexDirection: "row",
      border: '1px solid green',

    },
    languageButton: {
      width: "50px",
    },
  };

  return (
    <div style={styles.main}>
      <div style={styles.logoContainer}>
        <div>
          <a href="#home">
            <img
              src={SeloLogoGrey}
              alt="selo-logo-topbar"
              style={{ height: 60 - 24 }}
            />
          </a>
        </div>
      </div>

      <div style={styles.links}>
        {links.map((item, index) => (
          <div style={{ margin: "0px 5px" }}>
            <a
              key={`content-${language}-${index}`}
              href={item.href}
              style={{ textDecoration: "none" }}
            >
              {item.content[language]}
            </a>
          </div>
        ))}
        <button onClick={handleClick} style={styles.languageButton}>
          {language}
        </button>
      </div>
    </div>
  );
};
