// import Button, Form, Row, Col, Card from react-bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import { useRef, useEffect, useState } from "react";

export default function Explore() {
  const longreadsButton = useRef(null);
  const worldsButton = useRef(null);

  const [active, setActive] = useState(true);

  useEffect(() => {
    if (active) longreadsButton.current.focus();
    else worldsButton.current.focus();
  }, [longreadsButton, worldsButton]);

  return (
    <div
      id="explore"
      style={{
        paddingBottom: "30px",
      }}
    >
      <Container>
        <div style={{ textAlign: "center" }}>
          <Nav
            defaultActiveKey="/explore/longreads"
            className="justify-content-center"
          >
            <Nav.Item>
              {active ? (
                <StyledButtonActive
                  as={Link}
                  to="/explore/longreads"
                  ref={longreadsButton}
                  onClick={() => setActive(true)}
                >
                  Longreads
                </StyledButtonActive>
              ) : (
                <StyledButtonInactive
                  as={Link}
                  to="/explore/longreads"
                  ref={longreadsButton}
                  onClick={() => setActive(true)}
                >
                  Longreads
                </StyledButtonInactive>
              )}
            </Nav.Item>
            <Nav.Item>
              {!active ? (
                <StyledButtonActive
                  as={Link}
                  to="/explore/worlds"
                  ref={worldsButton}
                  onClick={() => setActive(false)}
                >
                  Worlds
                </StyledButtonActive>
              ) : (
                <StyledButtonInactive
                  as={Link}
                  to="/explore/worlds"
                  ref={worldsButton}
                  onClick={() => setActive(false)}
                >
                  Worlds
                </StyledButtonInactive>
              )}
            </Nav.Item>
          </Nav>
        </div>
      </Container>
      <Outlet />
    </div>
  );
}

const StyledButtonActive = styled(Button)`
  background-color: rgba(0, 81, 85, 1);
  border-radius: 4px;
  color: #ffffff;
  padding: 0.5rem 1rem;
  display: inline-block;
  text-decoration: none;
  margin: 0.5rem 0.5rem;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  &:hover {
    color: #ffffff;
  }
  &:active {
    background-color: rgba(0, 81, 85, 1);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    color: #ffffff;
  }
`;

const StyledButtonInactive = styled(Button)`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 4px;
  color: #ffffff;
  padding: 0.5rem 1rem;
  display: inline-block;
  text-decoration: none;
  margin: 0.5rem 0.5rem;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  &:hover {
    background-color: rgba(0, 81, 85, 0.5);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    color: #ffffff;
  }
`;
