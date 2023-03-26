import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import styled from "styled-components";
import { Breadcrumb } from "react-bootstrap";
import WorldObjects from "../components/WorldObjects";
import ListGroup from "react-bootstrap/ListGroup";

export default function WorldPage() {
  return (
    <div id="world">
      <Container>
        <Breadcrumb
          style={{
            marginTop: "20px",
          }}
        >
          <StyledBreadcrumb href="/explore/worlds">Worlds</StyledBreadcrumb>
          <StyledBreadcrumb active>Wizarding World</StyledBreadcrumb>
        </Breadcrumb>
        <Row xs={6} sm={2} md={2} lg={3} xl={4} className="g-4">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card
              className="bg-dark text-white"
              style={{
                border: "none",
                height: "300px",
              }}
            >
              <StyledImage src="../assets/bird.jpeg" />
              <Card.ImgOverlay
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Card.Title
                  style={{
                    fontSize: "2.5rem",
                    color: "white",
                  }}
                >
                  The Wizarding World
                </Card.Title>
                <Card.Text>
                  The Wizarding World is a fantasy media franchise and shared
                  fictional universe centred on the Harry Potter novel series by
                  J. K. Rowling.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                marginRight: "20px",
                marginBottom: "20px",
                flexBasis: "60%",
                flexGrow: 1,
              }}
            >
              <WorldObjects />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexBasis: "35%",
                marginBottom: "20px",
                flexGrow: 1,
              }}
            >
              <h3>Longreads</h3>
              <ListGroup>
                <ListGroup.Item>
                  Fantastic Beasts and Where to Find Them
                </ListGroup.Item>
                <ListGroup.Item>
                  A Journey Through a History of Magic
                </ListGroup.Item>
                <ListGroup.Item>
                  Hogwarts: An Incomplete and Unreliable Guide
                </ListGroup.Item>
                <ListGroup.Item>Quidditch Through the Ages</ListGroup.Item>
                <ListGroup.Item>Harry Potter: The Prequel</ListGroup.Item>
              </ListGroup>
            </div>
          </div>
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

const StyledBreadcrumb = styled(Breadcrumb.Item)`
  &:not(:first-child):before {
    content: "/" !important;
    color: rgba(0, 81, 85, 0.5) !important;ß
  }

  color: rgba(0, 81, 85, 0.5) !important;

  a {
    text-decoration: none;
    color: rgba(0, 81, 85, 1);
  }
`;

const StyledBreadcrumbActive = styled(Breadcrumb.Item)`
  // change the color
  color: rgba(0, 81, 85, 1) !important;
`;
