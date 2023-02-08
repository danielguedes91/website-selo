import React from "react";
import "./css/App.css";

// Section components
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Steps } from "./pages/Steps";
import { Connect } from "./pages/Connect";

// Components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// TODO Dani e Goncalo
// Netlify deployment
// Customize and send form info
// Responsive
// Think about effects in the background
// Change index.html favicon and content

export type Language = "en" | "pt";
export interface LanguageProp {
  language: Language;
}

const App: React.FC = () => {
  const [language, setLanguage] = React.useState<Language>("en"); // estado central

  const toggleLanguage = () => setLanguage(language === "en" ? "pt" : "en");

  const styles: Record<string, React.CSSProperties> = {
    main: {
      width: "100%",
      height: "100vh",
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
    </div>
  );
};

export default App;
