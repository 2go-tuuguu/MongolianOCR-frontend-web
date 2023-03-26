import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import styled from "styled-components";
import WorldCard from "../components/WorldCard";

export default function Worlds() {
  return (
    <div id="worlds">
      <Container>
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card
              className="bg-dark text-white"
              style={{
                border: "none",
                height: "300px",
              }}
            >
              <StyledImage src="../assets/samurai.jpg" />
              <Card.ImgOverlay>
                <Card.Title>The Last Samurai</Card.Title>
                <Card.Text>___________________</Card.Text>
                <Card.Text>Editor's pick</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col>
              <WorldCard
                id={idx}
                title="Wizarding World"
                desc="The Wizarding World is a fantasy media franchise and shared fictional universe centred on the Harry Potter novel series by J. K. Rowling."
                img="../assets/ww.jpg"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

const StyledImage = styled(Card.Img)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
