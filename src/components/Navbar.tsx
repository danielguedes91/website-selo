import React from "react";
import { Language, LanguageProp, PAPER_BG } from "../MainPage";
import SeloLogoGrey from "../assets/home/selo-logo-grey.svg";
import { useMediaQuery } from "@mantine/hooks";

// Hamburger menu icon
import { ActionIcon, Drawer } from "@mantine/core";
import { Burger } from "@mantine/core";

import '../css/App.css';

interface NavbarProps {
  handleClick: () => void;
}

export const SMALL_SCREEN_BREAKPOINT = 700;
export const GRAY_COLOR: string = "#3a3a3a";
export const OUTTER_GUTTER: number = 100;

export const Navbar: React.FC<NavbarProps & LanguageProp> = ({
  language,
  handleClick,
}) => {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  window.addEventListener('scroll', () => setIsScrolled(true));

  const isSmallScreen = useMediaQuery(
    `(max-width: ${SMALL_SCREEN_BREAKPOINT}px)`
  );
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
  ];

  const styles: Record<string, React.CSSProperties> = {
    main: {
      // position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: PAPER_BG,
      height: "80px",
      zIndex: 10,
      padding: `0px ${OUTTER_GUTTER}px`,
      opacity: isScrolled ? 1 : 0,
      transition: 'all 300ms ease-in',
    },
    logoContainer: {},
    links: {
      display: "flex",
      flexDirection: "row",
      fontSize: "15px",
      fontWeight: "bold",
      gap: "30px",
    },
    languageButton: {
      all: "unset",
      color: GRAY_COLOR,
      opacity: 0.5,
      cursor: "pointer",
    },
  };

  const handleMenuClick = (href: string) => {
    window.location.assign(href);
    setOpen(false);
  };

  const [open, setOpen] = React.useState<boolean>(false);
  const toggleOpen = () => setOpen((prevValue) => !prevValue);

  const MenuComponents = () => {
    return (
      <>
        {links.map((item, index) => (
          <div key={`nav-link-${index}`} className="hover-link">
              <a
                className="navbar-link"
                key={`content-${language}-${index}`}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: isSmallScreen ? "white" : GRAY_COLOR,
                  fontSize: isSmallScreen ? "3rem" : "15px",
                  fontWeight: "normal",
                }}
                onClick={() => handleMenuClick(item.href)}
              >
                {item.content[language].toUpperCase()}
              </a>
          </div>
        ))}

        {!isSmallScreen ? (
          <div>
            <button onClick={handleClick} style={styles.languageButton}>
              {language.toUpperCase()}
            </button>
          </div>
        ) : null}
      </>
    );
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
        {isSmallScreen ? (
          <div style={{ zIndex: 100 }}>
            <ActionIcon size="xl" radius="xl" variant="transparent">
              <Burger
                opened={open}
                onClick={toggleOpen}
                aria-label=""
                color={open ? "white" : "black"}
              />
            </ActionIcon>
          </div>
        ) : (
          <MenuComponents />
        )}

        <Drawer
          opened={open}
          position="top"
          onClose={() => {}}
          transitionTimingFunction="ease-in-out"
          transitionDuration={600}
          sx={{
            height: "100vh",
            zIndex: 99,
            "& .mantine-Paper-root": { height: "100%" },
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              backgroundColor: GRAY_COLOR,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MenuComponents />
          </div>
        </Drawer>
      </div>
    </div>
  );
};
