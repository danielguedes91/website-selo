import React from "react";
import { Language, LanguageProp, PAPER_BG } from "../MainPage";
import SeloLogoGrey from "../assets/home/selo-logo-grey.svg";

interface NavbarProps {
  handleClick: () => void;
}

export const BLACK_COLOR: string = '#3a3a3a';
export const OUTTER_GUTTER: number = 100;

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
      top: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: PAPER_BG,
      height: "60px",
      zIndex: 10,
      padding: `0px ${OUTTER_GUTTER}px`,
    },
    logoContainer: {},
    links: {
      display: "flex",
      flexDirection: "row",
      fontSize: "15px",
      fontWeight: "bold", // TODO: check import font files
      gap: "30px",
    },
    languageButton: {
      all: "unset",
      color: BLACK_COLOR,
      opacity: 0.5,
      cursor: 'pointer',
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
          <div>
            <a
              key={`content-${language}-${index}`}
              href={item.href}
              style={{ textDecoration: "none", color: BLACK_COLOR }}
            >
              {item.content[language].toUpperCase()}
            </a>
          </div>
        ))}
        <div>
          <button onClick={handleClick} style={styles.languageButton}>
            {language.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};
