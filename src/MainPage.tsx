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

export const PAPER_BG: string = "#f5f3f2";
export type Language = "en" | "pt";

const TIMEOUT_MS = 5000;
export interface LanguageProp {
  language: Language;
}

const App: React.FC = () => {
  const [isSleepingPage, setIsSleepingPage] = React.useState<boolean>(false);
  const [language, setLanguage] = React.useState<Language>("en"); // estado central

  let timeout: any;

  const sendIdleEvent = () => {
    removeListener();
    setIsSleepingPage(true);
  }

  const resetIdleTimeout = () => {
    clearTimeout(timeout);
    timeout = setTimeout(sendIdleEvent, TIMEOUT_MS);
  }

  resetIdleTimeout();

  const addEventListener = () => window.addEventListener('scroll', sendIdleEvent);
  const removeListener = () => window.removeEventListener('scroll', sendIdleEvent);

  const handleSleepingPageClick = () => {
    setIsSleepingPage(false);
    sendIdleEvent();
  };

  React.useEffect(() => {
    addEventListener();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // let sleepingPageTimeout: NodeJS.Timeout;
  // clearTimeout(sleepingPageTimeout);

  // const scrollFunction = () => {
  //   clearTimeout(sleepingPageTimeout);
  //   sleepingPageTimeout = setTimeout(() => {
  //     clearTimeout(sleepingPageTimeout);
  //     setIsSleepingPage(true);
  //     console.log('1');
  //   }, TIMEOUT_MS);
  // }
  // function sendIdleEvent() {
  //   window.removeEventListener('scroll', scrollFunction);
  // }

  // window.addEventListener("scroll", scrollFunction);

  // function resetIdleEvent() {
  //   clearTimeout()
  // }

  // sleepingPageTimeout = setTimeout(() => {
  //   clearTimeout(sleepingPageTimeout);
  //   setIsSleepingPage(true);
  //   console.log('0')
  // }, TIMEOUT_MS);


  // const handleSleepingPageClick = () => {
  //   setIsSleepingPage(false);
  //   sleepingPageTimeout = setTimeout(() => {
  //     clearTimeout(sleepingPageTimeout);
  //     setIsSleepingPage(true);
  //     console.log('2');
  //   }, TIMEOUT_MS);
  // };

  const toggleLanguage = () => setLanguage(language === "en" ? "pt" : "en");

  const styles: Record<string, React.CSSProperties> = {
    main: {
      width: "100%",
      height: "100vh",
      overflow: isSleepingPage ? "hidden" : undefined,
    },
  };

  return (
    <div style={styles.main}>
      <Navbar language={language} handleClick={toggleLanguage} />

      <Home language={language} />
      <About language={language} />
      <Services language={language} />
      <Steps language={language} />
      <Connect language={language} />

      <Footer />

      {isSleepingPage && <SleepingPage handleClick={handleSleepingPageClick} />}
    </div>
  );
};

export default App;
