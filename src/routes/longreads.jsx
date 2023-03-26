import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import LongreadCard from "../components/LongreadCard";

export default function Longreads() {
  return (
    <div id="longreads">
      <Container>
        <Row xs={1} sm={1} md={1} lg={1} xl={2} className="g-4">
          <Col xl={12}>
            <Card
              className="bg-dark text-white"
              style={{
                border: "none",
                height: "300px",
              }}
            >
              <StyledImage src="../assets/dune.jpg" />
              <Card.ImgOverlay>
                <Card.Title>DUNE</Card.Title>
                <Card.Text>___________________</Card.Text>
                <Card.Text>Editor's pick</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col>
              <LongreadCard
                title="Fantastic Beasts and Where to Find Them"
                desc="Fantastic Beasts and Where to Find Them is a 2001 guide book written by British author J. K. Rowling about the magical creatures in the Harry Potter universe."
                img="../assets/fb.webp"
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
`;
