import React from "react";
import { Language } from "../MainPage";

interface NavbarProps {
  language: Language;
  onClick: () => void;
}

export default function Navbar({
  language,
  onClick: toggleLanguage,
}: NavbarProps): JSX.Element {
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
    },
    logo: {},
    links: {},
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
        {links.map((item) => (
          <a href={item.href}>{item.content[language]}</a>
        ))}
        <button onClick={toggleLanguage} style={styles.languageButton}>
          {language}
        </button>
      </div>
    </div>
  );
}
