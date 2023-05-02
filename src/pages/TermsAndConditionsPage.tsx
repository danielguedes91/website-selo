import React from "react";
import { CloseButton, Text } from "@mantine/core";
import { PAPER_BG } from "../MainPage";

interface TermsAndConditionsPageProps {
  onClose: () => void;
}

const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({
  onClose,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        right: 0,
        overflow: "hidden",
        zIndex: 100,
        backgroundColor: PAPER_BG,
        // pointerEvents: "none",
      }}
    >
      <div>
        <CloseButton
          onClick={onClose}
          size="xl"
          sx={{
            position: "absolute",
            top: 30,
            right: 30,
            backgroundColor: "transparent !important",
            // svg: { stroke: "white" },
          }}
        />
        <Text>Terms and Conditions page</Text>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
