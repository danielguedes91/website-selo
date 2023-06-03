import React from "react";
import { Language, LanguageProp, PAPER_BG } from "../MainPage";
import SeloLogoGrey from "../assets/home/selo-logo-grey.svg";
import SeloLogoWhite from "../assets/home/selo-logo-white.svg";

// Hamburger menu icon
import { ActionIcon, Drawer } from "@mantine/core";
import { Burger } from "@mantine/core";

import "../css/App.css";
import useMediaQueryMd from "../features/useMediaQueryMd";

interface NavbarProps {
  handleLanguageClick: () => void;
  // show?: boolean;
  handleLinkClick: () => void;
  handleLogoClick: () => void;
}

export const SMALL_SCREEN_BREAKPOINT = 700;
export const GRAY_COLOR: string = "#3a3a3a";
export const OUTTER_GUTTER: number = 100;
export const OUTTER_GUTTER_MOBILE: number = 30;
export const NAVBAR_HEIGHT = 80;

export const Navbar: React.FC<NavbarProps & LanguageProp> = ({
  language,
  // show: isFixedMenu,
  handleLanguageClick,
  handleLinkClick,
  handleLogoClick,
}) => {
  const isSmallScreen = useMediaQueryMd();

  // Scroll menu fixed
  const [isFixedMenu, setIsFixedMenu] = React.useState<boolean>(false);
  const lastScrollTop = React.useRef<number>(0);

  const handleScrollMenuFixed = () => {
    const distanceTop = document.documentElement.scrollTop;

    // Down scroll
    if (distanceTop > lastScrollTop.current) {
      setIsFixedMenu(false);
      // Up scroll
    } else if (distanceTop < lastScrollTop.current) {
      setIsFixedMenu(true);
    }
    // Update last scroll to top
    lastScrollTop.current = distanceTop <= 0 ? 0 : distanceTop;
  };

  const addScrollSleepingEventListener = () =>
    window.addEventListener("scroll", () => {
      handleScrollMenuFixed();
      // resetIdleTimeout();
    });
  const removeScrollSleepingEventListener = () =>
    window.removeEventListener("scroll", () => {
      handleScrollMenuFixed();
      // sendIdleEvent();
    });

  React.useEffect(() => {
    addScrollSleepingEventListener();
    return () => removeScrollSleepingEventListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      height: NAVBAR_HEIGHT,
      zIndex: 10,
      padding: `0px ${isSmallScreen ? OUTTER_GUTTER_MOBILE : OUTTER_GUTTER}px`,
      opacity: isFixedMenu ? 1 : 0,
      transition: "all 300ms ease-in",
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
              onClickCapture={handleLinkClick}
              onClick={() => handleMenuClick(item.href)}
              style={{ textDecoration: "none" }}
            >
              <p
                style={{
                  textDecoration: "none !important",
                  color: isSmallScreen ? "white" : GRAY_COLOR,
                  fontSize: isSmallScreen ? "3rem" : "14px",
                  fontWeight: "bold",
                  margin: isSmallScreen ? 0 : undefined,
                }}
              >
                {item.content[language].toUpperCase()}
              </p>
            </a>
          </div>
        ))}

        {!isSmallScreen ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <button onClick={handleLanguageClick} style={styles.languageButton}>
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
          <a href="#home" onClick={handleLogoClick}>
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
          onClose={() => {
            setOpen(false);
          }}
          transitionProps={{ duration: 600, timingFunction: "ease-in-out" }}
          title={<img
            src={SeloLogoWhite}
            alt="selo-logo-topbar"
            style={{ height: 60 - 24 }}
          />}
          sx={{
            height: "100vh",
            zIndex: 99,
            "& .mantine-Paper-root": { height: "100%" },
            "& .mantine-Drawer-header": {
              backgroundColor: GRAY_COLOR,
              padding: "2rem",
              "button": {
                height: "40px",
                width: "40px"
              },
              "button *": {
                color: "white !important",
              },
              "svg": {
                height: "100%",
                width: "100%"
              }
            },
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
