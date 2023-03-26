import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CustomNavbar() {
  return (
    <StyledNavbar collapseOnSelect expand="lg">
      <Container>
        <StyledBrand as={Link} to={"/"}>
          DARTS
        </StyledBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/create"}>
              Create
            </Nav.Link>
            <Nav.Link as={Link} to={"/explore/longreads"}>
              Explore
            </Nav.Link>
            <Nav.Link as={Link} to={"/profile"}>
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"}>
              About
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <StyledButton variant="outline-success">Search</StyledButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

const StyledNavbar = styled(Navbar)`
  background-color: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  sticky: top;
  stroke: #000000;
`;

// create a styled component for the Navbar.Brand and set the font family to "Catamaran"
const StyledBrand = styled(Navbar.Brand)`
  font-family: "Catamaran", sans-serif;
  font-size: 1.5rem;
  margin-right: 5px;
  margin-bottom: -3px;
  color: #000000;
  text-decoration: none;
  &:hover {
    color: #000000;
  }
`;

// create a styled component for the button and pass it the button component
const StyledButton = styled(Button)`
  background-color: #ffffff;
  color: #005155;
  border-color: #005155;
  &:hover {
    background-color: #005155;
    color: #ffffff;
    border-color: #005155;
  }
`;
