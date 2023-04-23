import React from "react";

import SeloLogo from "../assets/home/selo-logo-grey.svg";
import { ImageComponent } from "../components/ImageComponent";
import { PAPER_BG } from "../MainPage";

interface SleepingPageProps {
     handleClick: () => void;
}

const SleepingPage: React.FC<SleepingPageProps> = ({ handleClick }) => {
  return (
    <div
      id="sleeping-page"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: 100,
        overflow: "hidden",
        backgroundColor: PAPER_BG,
      }}
    >
      <ImageComponent imgSrc={SeloLogo} onClickHandler={handleClick} />
    </div>
  );
};

export default SleepingPage;
