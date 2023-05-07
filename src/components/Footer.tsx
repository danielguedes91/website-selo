import React from "react";
import { PAPER_BG } from "../MainPage";
import { GRAY_COLOR, OUTTER_GUTTER } from "./Navbar";
import useMediaQueryMd from "../features/useMediaQueryMd";

export const Footer: React.FC = () => {
  const styles: Record<string, React.CSSProperties> = {
    main: {
      // position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: PAPER_BG,
      height: "60px",
      marginTop: "10px",
      padding: `0px ${OUTTER_GUTTER}px`,
    },
    mainContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "14px",
    },
    logo: {},
    links: {},
    anchor: {
      textDecoration: "none",
      color: GRAY_COLOR,
    },
  };

  const FooterScreen = () => (
    <div style={styles.mainContainer}>
      <div style={styles.anchorContainer}>
        <a
          className="footer-link"
          href="#home"
          rel="noreferrer"
          style={styles.anchor}
        >
          SELO VISUAL STUDIO
        </a>
      </div>

      <div style={styles.anchorContainer}>
        <a
          className="footer-link"
          href="https://grafemadesign.com/"
          target="_blank"
          rel="noreferrer"
          style={styles.anchor}
        >
          BY GRAFEMA DESIGN
        </a>
      </div>

      <div style={styles.anchorContainer}>
        <a
          className="footer-link"
          href="https://www.facebook.com/selovisualstudio"
          target="_blank"
          rel="noreferrer"
          style={styles.anchor}
        >
          FACEBOOK
        </a>
      </div>
      <div style={styles.anchorContainer}>
        <a
          className="footer-link"
          href="https://vimeo.com/selovisuals"
          target="_blank"
          rel="noreferrer"
          style={styles.anchor}
        >
          VIMEO
        </a>
      </div>

      <div style={styles.anchorContainer}>
        <a
          className="footer-link"
          href="https://behance.net/selovisuals"
          target="_blank"
          rel="noreferrer"
          style={styles.anchor}
        >
          BEHANCE
        </a>
      </div>
      <div style={styles.anchorContainer}>
        <a
          className="footer-link"
          href="https://www.instagram.com/selovisuals/"
          target="_blank"
          rel="noreferrer"
          style={styles.anchor}
        >
          INSTAGRAM
        </a>
      </div>
    </div>
  );

  const FooterMobile = () => (
    <div>
      <div>
        <div style={styles.anchorContainer}>
          <a
            className="footer-link"
            href="#home"
            rel="noreferrer"
            style={styles.anchor}
          >
            SELO VISUAL STUDIO
          </a>
        </div>
      </div>
      <div style={{ width: "100%", margin: "30px 0px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ ...styles.anchorContainer, minWidth: 200 }}>
            <a
              className="footer-link"
              href="https://www.facebook.com/selovisualstudio"
              target="_blank"
              rel="noreferrer"
              style={{ ...styles.anchor, fontWeight: "bold" }}
            >
              FACEBOOK
            </a>
          </div>
          <div style={{ ...styles.anchorContainer, minWidth: 200 }}>
            <a
              className="footer-link"
              href="https://vimeo.com/selovisuals"
              target="_blank"
              rel="noreferrer"
              style={{ ...styles.anchor, fontWeight: "bold" }}
            >
              VIMEO
            </a>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ ...styles.anchorContainer, minWidth: 200 }}>
            <a
              className="footer-link"
              href="https://behance.net/selovisuals"
              target="_blank"
              rel="noreferrer"
              style={{ ...styles.anchor, fontWeight: "bold" }}
            >
              BEHANCE
            </a>
          </div>
          <div style={{ ...styles.anchorContainer, minWidth: 200 }}>
            <a
              className="footer-link"
              href="https://www.instagram.com/selovisuals/"
              target="_blank"
              rel="noreferrer"
              style={{ ...styles.anchor, fontWeight: "bold" }}
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
      <div>
        <a
          className="footer-link"
          href="https://grafemadesign.com/"
          target="_blank"
          rel="noreferrer"
          style={{ ...styles.anchor, fontStyle: "italic" }}
        >
          BY GRAFEMA DESIGN
        </a>
      </div>
    </div>
  );

  const isSmallScreen = useMediaQueryMd();

  return (
    <div style={styles.main}>
      {isSmallScreen ? <FooterMobile /> : <FooterScreen />}
    </div>
  );
};
