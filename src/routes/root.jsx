import { Outlet } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
// import Row and Col from react-bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScrollToTop from "../components/ScrollToTop";

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
    <ScrollToTop>
      <div
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(27,40,51,0) 13%, rgba(27,40,51,0.13817401960784315) 44%, rgba(52,66,78,0.7124037114845938) 100%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <GlobalStyle />
        <CustomNavbar />
        <Outlet />
        <footer
          style={{
            marginTop: "auto",
            width: "100%",
            backgroundColor: "#0E171F",
            color: "#ffffff",
            textAlign: "center",
            padding: "30px",
          }}
        >
          <Container>
            <Row className="justify-space-between">
              <Col className="justify-space-between">
                <h5 style={{ textAlign: "left" }}>
                  CREATE WORLDS
                  <br />
                  USING OUR PLATFORM
                </h5>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </footer>
      </div>
    </ScrollToTop>
  );
}
