import React from "react";

import SeloLogoWhite from "../assets/home/selo-logo-white.svg";
import { PAPER_BG_BLACK } from "../MainPage";
import { ImageComponent } from "../components/ImageComponent";
import { CloseButton } from "@mantine/core";

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
        backgroundColor: PAPER_BG_BLACK,
      }}
    >
      <CloseButton
        onClick={handleClick}
        size="xl"
        sx={{
          position: "absolute",
          top: 30,
          right: 30,
          backgroundColor: "transparent !important",
          svg: { stroke: "white" },
        }}
      />
      <ImageComponent
        imgSrc={SeloLogoWhite}
        onClickHandler={handleClick}
        customBg={PAPER_BG_BLACK}
      />
    </div>
  );
};

export default SleepingPage;
