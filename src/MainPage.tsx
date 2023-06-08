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

export interface LanguageProp {
  language: Language;
}

/** Sleeping page timeout ms */
const TIMEOUT_MS = 60000; // 1 minute
/** Sleeping page timeout */
let timeout: NodeJS.Timeout;

const App: React.FC = () => {
  // Language
  const [language, setLanguage] = React.useState<Language>("en");
  const toggleLanguage = () => setLanguage(language === "en" ? "pt" : "en");

  // External pages
  const [showTCPage, setShowTCPage] = React.useState<boolean>(false);
  const [showPPPage, setShowPPPage] = React.useState<boolean>(false);

  const handleNavLinkClick = () => {
    showTCPage && setShowTCPage(false);
    showPPPage && setShowPPPage(false);
  };

  // Sleeping page
  const [isSleepingPage, setIsSleepingPage] = React.useState<boolean>(false);

  const sendIdleEvent = () => {
    setIsSleepingPage(true);
  };

  const resetIdleTimeout = () => {
    clearTimeout(timeout);
    timeout = setTimeout(sendIdleEvent, TIMEOUT_MS);
  };

  const handleSleepingPageClick = () => {
    setIsSleepingPage(false);
    resetIdleTimeout();
  };

  const handleGoToHome = () => {
    setShowTCPage(false);
    setShowPPPage(false);
  };

  React.useEffect(() => {
    resetIdleTimeout();
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
    <div style={styles.main} onTouchEnd={() => {if(!isSleepingPage) handleSleepingPageClick()}} onClick={() => {if(!isSleepingPage) handleSleepingPageClick()}} onScroll={() => {if(!isSleepingPage) handleSleepingPageClick()}} onMouseMove={() => {if(!isSleepingPage) handleSleepingPageClick()}}>
      <Navbar
        language={language}
        handleLanguageClick={toggleLanguage}
        // show={isFixedMenu}
        handleLinkClick={handleNavLinkClick}
        handleLogoClick={handleGoToHome}
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
