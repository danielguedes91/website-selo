import React from "react";
import "./css/App.css";

// Section components
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Steps } from "./pages/Steps";
import { Connect } from "./pages/Connect";

import SleepingPage from "./pages/SleepingPage";

// Components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

export const PAPER_BG: string = "#f5f3f2";
export const PAPER_BG_BLACK: string = "#393A3A";
export type Language = "en" | "pt";

const TIMEOUT_MS = 60000; // 1 minute
export interface LanguageProp {
  language: Language;
}

const App: React.FC = () => {
  // Language
  const [language, setLanguage] = React.useState<Language>("en");
  const toggleLanguage = () => setLanguage(language === "en" ? "pt" : "en");

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

  // External pages
  const [showTCPage, setShowTCPage] = React.useState<boolean>(false);
  const [showPPPage, setShowPPPage] = React.useState<boolean>(false);

  const handleNavLinkClick = () => {
    showTCPage && setShowTCPage(false);
    showPPPage && setShowPPPage(false);
  };

  // Sleeping page
  const [isSleepingPage, setIsSleepingPage] = React.useState<boolean>(false);
  let timeout: any;
  const sendIdleEvent = () => {
    removerScrollSleepingEventListener();
    setIsSleepingPage(true);
  };

  const resetIdleTimeout = () => {
    clearTimeout(timeout);
    timeout = setTimeout(sendIdleEvent, TIMEOUT_MS);
  };

  const addScrollSleepingEventListener = () =>
    window.addEventListener("scroll", () => {
      handleScrollMenuFixed();
      resetIdleTimeout();
    });
  const removerScrollSleepingEventListener = () =>
    window.removeEventListener("scroll", () => {
      handleScrollMenuFixed();
      sendIdleEvent();
    });

  const handleSleepingPageClick = () => {
    setIsSleepingPage(false);
    resetIdleTimeout();
    removerScrollSleepingEventListener();
    addScrollSleepingEventListener();
  };

  React.useEffect(() => {
    addScrollSleepingEventListener();
    resetIdleTimeout();
    return () => removerScrollSleepingEventListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styles: Record<string, React.CSSProperties> = {
    main: {
      width: "100%",
      height: "100vh",
      overflow: isSleepingPage ? "hidden" : undefined,
    },
  };

  const MainPages = () => {
    return (
      <>
        <Home language={language} />
        <About language={language} />
        <Services language={language} />
        <Steps language={language} />
        <Connect
          language={language}
          showTCPage={showTCPage}
          handleShowTCPage={(value: boolean) => {
            window.scrollTo(0, 0);
            setShowTCPage(value);
          }}
          showPPPage={showPPPage}
          handleShowPPPage={(value: boolean) => {
            window.scrollTo(0, 0);
            setShowPPPage(value);
          }}
        />
      </>
    );
  };

  return (
    <div style={styles.main}>
      <Navbar
        language={language}
        handleLanguageClick={toggleLanguage}
        show={isFixedMenu}
        handleLinkClick={handleNavLinkClick}
      />

      {showPPPage ? (
        <PrivacyPolicyPage language={language} />
      ) : showTCPage ? (
        <TermsAndConditionsPage language={language} />
      ) : (
        <MainPages />
      )}

      <Footer />

      {isSleepingPage && <SleepingPage handleClick={handleSleepingPageClick} />}
    </div>
  );
};

export default App;
