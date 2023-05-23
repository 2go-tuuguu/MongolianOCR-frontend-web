import { Outlet } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

import store from "../store";
import { Provider } from "react-redux";

// // create global style and set the font-family to "Catamaran for headings and "Lexend Deca" for body
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    font-family: "Lexend Deca", sans-serif;
    min-height: 100%;

    display: flex;
    flex-direction: column;
  }
  h1, h2, h3, h4 {
    font-family: "Catamaran", sans-serif;
  }
  h5, h6 {
    font-family: "Lexend Deca", sans-serif;
  }
`;

export default function Root() {
  return (
    <div
      style={{
        // backgroundImage:
        //   "linear-gradient(0deg, rgba(27,40,51,0) 13%, rgba(27,40,51,0.13817401960784315) 44%, rgba(52,66,78,0.7124037114845938) 100%)",
        // backgroundAttachment: "fixed",
        backgroundColor: "#f1f1f1",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <GlobalStyle />
      <Provider store={store}>
        <CustomNavbar />
        <Outlet />
      </Provider>
      <footer
        style={{
          marginTop: "auto",
          width: "100%",
          backgroundColor: "#16314a",
          color: "#ffffff",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Container>
          <Row className="justify-space-between">
            <Col className="justify-space-between">
              <h6 style={{ textAlign: "left" }}>
                OCR Handwritten Text Recognition
                <br />
                For Traditional Mongolian Script
              </h6>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  marginTop: "10px",
                }}
              >
                {new Date().getFullYear()} Higher School of Economics
              </p>
            </Col>
            <Col>
              <h6 style={{ textAlign: "right" }}>
                Service for translating to cyrillic:
              </h6>
              <Link href="https://kimo.mngl.net/" target="_blank">
                <h6 style={{ textAlign: "right" }}>KIMO</h6>
              </Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

const Link = styled.a`
  color: #00cc66;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    text-decoration: none;
  }
`;
