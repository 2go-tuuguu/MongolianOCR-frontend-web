import { Button } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import styled from "styled-components";
import Image from "react-bootstrap/Image";

export default function Create() {
  return (
    <div
      id="create"
      style={{
        display: "flex",
        flexGrow: 1,
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "0px",
          }}
        >
          CREATE NEW
        </h1>
        <div
          style={{
            display: "flex",
            width: "500px",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src="../assets/planets.png"
              alt="World Icon"
              height="130px"
            />
            <StyledButtonActive>World</StyledButtonActive>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src="../assets/writing.png"
              alt="Longread Icon"
              height="130px"
            />
            <StyledButtonActive>Longread</StyledButtonActive>
          </div>
        </div>
      </Container>
    </div>
  );
}

const StyledButtonActive = styled(Button)`
  background-color: rgba(0, 81, 85, 1);
  border-radius: 4px;
  border: none;
  color: #ffffff;
  padding: 0.5rem 1rem;
  display: inline-block;
  text-decoration: none;
  margin: 0.5rem 0.5rem;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  &:hover {
    background-color: rgba(0, 81, 85, 0.5);
    color: #ffffff;
  }
  &:active {
    background-color: rgba(0, 81, 85, 1) !important;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    color: #ffffff;
  }
`;
