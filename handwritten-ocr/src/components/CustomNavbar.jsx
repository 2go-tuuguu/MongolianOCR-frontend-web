import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Modal,
  Form,
  Alert,
} from "react-bootstrap";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { FaEye } from "react-icons/fa";
import theme from "../themes/theme";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store";

import { api_URL } from "../config/urls";

export default function CustomNavbar() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupError, setSignupError] = useState("");

  const navigate = useNavigate();

  const handleClose = () => {
    setShowLogin(false);
    setShowSignup(false);
    setLoginError("");
    setSignupError("");
  };

  const handleShowLogin = () => setShowLogin(true);

  const handleShowSignup = () => setShowSignup(true);

  const handleLogout = () => {
    // Redirect to the home page
    navigate("/");

    localStorage.removeItem("token");
    // setLoggedIn(false);
    dispatch(logout());
  };

  const handleLogin = async () => {
    if (!isEmailValid(loginEmail)) {
      setLoginError("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch(api_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.access_token);
        // setLoggedIn(true);
        dispatch(login());
        setShowLogin(false);
        setShowSignup(false);
        setLoginError("");
      } else {
        setLoginError(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setLoginError(error);
    }
  };

  const handleSignup = async () => {
    if (!isEmailValid(signupEmail)) {
      setSignupError("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch(api_URL + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: signupEmail,
          password: signupPassword,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setShowLogin(true);
        setLoginEmail("");
        setLoginPassword("");
        setShowSignup(false);
      } else {
        setSignupError(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setSignupError(data.message);
    }
  };

  const handleLoginEmailChange = (e) => {
    setLoginError("");
    setLoginEmail(e.target.value);
  };

  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleSignupEmailChange = (e) => {
    setSignupError("");
    setSignupEmail(e.target.value);
  };

  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
  };

  const isEmailValid = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Check if a token is stored in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // setLoggedIn(true);
      dispatch(login());
    } else {
      dispatch(logout());
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledNavbar collapseOnSelect expand="lg">
        <Container>
          <StyledBrand as={Link} to={"/"}>
            <StyledIcon as={FaEye} />
            Melmii
          </StyledBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>
              {loggedIn ? (
                <Nav.Link as={Link} to={"/profile"}>
                  Profile
                </Nav.Link>
              ) : null}
            </Nav>
            {loggedIn ? (
              <StyledButton variant="outline-success" onClick={handleLogout}>
                Log Out
              </StyledButton>
            ) : (
              <>
                <StyledButton
                  variant="outline-success"
                  onClick={handleShowLogin}
                >
                  Log In
                </StyledButton>
                <StyledButton
                  variant="outline-success"
                  onClick={handleShowSignup}
                  style={{ marginLeft: "15px" }}
                >
                  Sign Up
                </StyledButton>
              </>
            )}
          </Navbar.Collapse>
        </Container>

        {/* Login Modal */}
        <Modal show={showLogin} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {loginError && (
              <Alert
                variant="danger"
                onClose={() => setLoginError("")}
                dismissible
              >
                {loginError}
              </Alert>
            )}
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={loginEmail}
                  onChange={handleLoginEmailChange}
                  isInvalid={loginError}
                />
                <Form.Control.Feedback type="invalid">
                  {loginError}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={handleLoginPasswordChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <StyledButton variant="secondary" onClick={handleClose}>
              Close
            </StyledButton>
            <StyledButton variant="primary" onClick={handleLogin}>
              Log In
            </StyledButton>
          </Modal.Footer>
        </Modal>

        {/* Signup Modal */}
        <Modal show={showSignup} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {signupError && (
              <Alert
                variant="danger"
                onClose={() => setSignupError("")}
                dismissible
              >
                {signupError}
              </Alert>
            )}
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={signupEmail}
                  onChange={handleSignupEmailChange}
                  isInvalid={signupError}
                />
                <Form.Control.Feedback type="invalid">
                  {signupError}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={signupPassword}
                  onChange={handleSignupPasswordChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <StyledButton variant="secondary" onClick={handleClose}>
              Close
            </StyledButton>
            <StyledButton variant="primary" onClick={handleSignup}>
              Sign Up
            </StyledButton>
          </Modal.Footer>
        </Modal>
      </StyledNavbar>
    </ThemeProvider>
  );
}

const StyledNavbar = styled(Navbar)`
  background-color: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  sticky: top;
  stroke: #000000;
  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledBrand = styled(Navbar.Brand)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Catamaran", sans-serif;
  font-size: 1.6rem;
  margin-right: 10px;
  margin-bottom: -3px;
  color: #000000;
  text-decoration: none;
  &:hover {
    color: #000000;
  }
`;

const StyledIcon = styled.i`
  margin-right: 5px;
  margin-bottom: 3px;
  font-size: 2rem;
`;

const StyledButton = styled(Button)`
  &.btn-outline-success {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.primary};
    border-color: ${(props) => props.theme.primary};
    &:hover {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
      border-color: ${(props) => props.theme.primary};
    }
    &:active {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
      border-color: ${(props) => props.theme.primary};
    }
  }
  &.btn-primary {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    border-color: ${(props) => props.theme.primary};
    &:hover {
      background-color: ${(props) => props.theme.darkerPrimary};
      color: ${(props) => props.theme.white};
      border-color: ${(props) => props.theme.primary};
    }
  }
  &.btn-secondary {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.white};
    border-color: ${(props) => props.theme.secondary};
    &:hover {
      background-color: ${(props) => props.theme.darkerSecondary};
      color: ${(props) => props.theme.white};
      border-color: ${(props) => props.theme.darkerSecondary};
    }
  }
`;
