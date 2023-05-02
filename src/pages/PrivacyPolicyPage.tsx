import { CloseButton, Text } from "@mantine/core";
import React from "react";
import { PAPER_BG } from "../MainPage";

interface PrivacyPolicyPageProps {
  onClose: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onClose }) => {
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
        overflow: 'hidden',
        zIndex: 100,
        backgroundColor: PAPER_BG,
      }}
    >
      <CloseButton
        onClick={onClose}
        size="xl"
        sx={{
          position: "absolute",
          top: 30,
          right: 30,
          backgroundColor: "transparent !important",
        }}
      />
      <Text>Privacy policy page</Text>
    </div>
  );
};

export default PrivacyPolicyPage;
