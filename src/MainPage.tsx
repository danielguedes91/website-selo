import React from "react";
import "./css/App.css";

// Section components
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Steps } from "./pages/Steps";
// import { Connect } from "./pages/Connect";

// Components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Button, Grid, Sx } from "@mantine/core";

// TODO Dani e Goncalo
// Netlify deployment
// Customize and send form info
// Responsive
// Think about effects in the background
// Change index.html favicon and content
// Ask the girls about the favicon

export const PAPER_BG: string = "#f5f3f2";
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

  const ContactSection = () => {
    const buttonStyles: Sx = {
      transition: "all 400ms",
      "&:hover": {
        color: "white",
        // borderWidth: "100px",
        boxShadow: 'inset 0 0 0 40px black',
      },
    };

    return (
      <Grid
        sx={{
          height: "15vh",
          minHeight: "150px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outline"
          color="dark"
          radius="xl"
          size="lg"
          sx={buttonStyles}
        >
          {language === "en" ? "Get in touch" : "Entrar em contato"}
        </Button>
      </Grid>
    );
  };

  return (
    <div style={styles.main}>
      <Navbar language={language} handleClick={toggleLanguage} />

      <Home language={language} />
      <About language={language} />
      <Services language={language} />
      <Steps language={language} />
      <ContactSection />
      {/* <Connect language={language} /> */}

      <Footer />
    </div>
  );
};

export default App;
