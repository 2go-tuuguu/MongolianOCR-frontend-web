import React, { useState, useEffect, useRef } from "react";
import { Button, Modal, Table, Container } from "react-bootstrap";
import styled, { ThemeProvider } from "styled-components";
import theme from "../themes/theme";
import { useNavigate } from "react-router-dom";

import { api_URL } from "../config/urls";

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store";

function formatDate(datetimeStr) {
  const datetimeObj = new Date(datetimeStr);
  const year = datetimeObj.getFullYear();
  const month = String(datetimeObj.getMonth() + 1).padStart(2, "0");
  const day = String(datetimeObj.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

const Profile = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();

  const [apiKeys, setApiKeys] = useState([]);
  const [showNewModal, setShowNewModal] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [keyName, setKeyName] = useState("");
  const [updated, setUpdated] = useState(false);
  const [newKey, setNewKey] = useState("");
  const [copied, setCopied] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  const inputRef = useRef(null);

  useEffect(() => {
    if (showNewModal) {
      inputRef.current.focus();
    }
  }, [showNewModal]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCreateKey();
    }
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(newKey);
    setCopied(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // setLoggedIn(true);
      dispatch(login());
    } else {
      dispatch(logout());
      navigate("/");
      return;
    }

    const fetchApiKeys = async () => {
      try {
        const response = await fetch(api_URL + "/api-keys", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setApiKeys(data.api_keys);
      } catch (error) {
        // Handle error if necessary
      }
    };

    const fetchUserEmail = async () => {
      try {
        const response = await fetch(api_URL + "/user", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUserEmail(data.email);
      } catch (error) {
        // Handle error if necessary
      }
    };

    fetchApiKeys();
    fetchUserEmail();
  }, [updated]);

  const handleCreateKey = async () => {
    // Create a new API key
    const response = await fetch(api_URL + "/api-keys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ api_key_name: keyName }),
    });

    const data = await response.json();

    if (response.ok) {
      setKeyName("");
      setShowNewModal(false);
      setShowKeyModal(true);
      setNewKey(data.api_key);
      setUpdated(!updated);
    } else {
      alert(data.message);
    }
  };

  const handleDeleteKey = (apiKeyId) => {
    // Display a confirmation dialog
    const confirmed = window.confirm(
      "Are you sure you want to delete this API key?"
    );

    if (confirmed) {
      // Delete the API key
      fetch(api_URL + `/api-keys/${apiKeyId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setApiKeys(apiKeys.filter((key) => key.id !== apiKeyId));
        });
    }
  };

  const handleCloseModal = () => {
    setShowNewModal(false);
  };

  const handleCloseKeyModal = () => {
    setShowKeyModal(false);
    setNewKey("");
    setCopied(false);
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (confirmed) {
      // Delete the user account
      fetch(api_URL + "/user", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => {
        if (response.ok) {
          // Account deletion successful, redirect to the home page or perform any other desired action
          navigate("/");
          dispatch(logout());
          localStorage.removeItem("token");
        } else {
          // Handle the error message
          alert(response.json().message);
        }
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          paddingTop: "100px",
        }}
      >
        <h1>Profile</h1>
        <p>Email: {userEmail}</p>
        <Button variant="danger" onClick={handleDeleteAccount}>
          Delete Account
        </Button>
        <h2
          style={{
            marginTop: "30px",
          }}
        >
          API Keys
        </h2>
        {apiKeys.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Key Prefix</th>
                <th>Creation Date</th>
                <th>Expiration Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.map((key, index) => (
                <tr key={`${key.id}-${Date.now()}-${index}`}>
                  <td>{key.name}</td>
                  <td>{key.prefix}</td>
                  <td>{formatDate(key.created_at)}</td>
                  <td>{formatDate(key.expires_at)}</td>
                  <td>
                    <StyledButton
                      variant="danger"
                      onClick={() => handleDeleteKey(key.id)}
                    >
                      Delete
                    </StyledButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>You don't have any active keys.</p>
        )}
        {apiKeys.length >= 3 ? (
          <p>You have reached the maximum number of keys.</p>
        ) : (
          <></>
        )}
        <StyledButton
          variant="primary"
          onClick={() => setShowNewModal(true)}
          disabled={apiKeys.length >= 3}
        >
          Create New API Key
        </StyledButton>
        <Modal
          show={showNewModal}
          onHide={handleCloseModal}
          onKeyPress={handleKeyPress}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create New API Key</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              ref={inputRef}
              type="text"
              placeholder="Key Name"
              value={keyName}
              onChange={(e) => setKeyName(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <StyledButton variant="secondary" onClick={handleCloseModal}>
              Cancel
            </StyledButton>
            <StyledButton variant="primary" onClick={handleCreateKey}>
              Create
            </StyledButton>
          </Modal.Footer>
        </Modal>

        <Modal show={showKeyModal} onHide={handleCloseKeyModal}>
          <Modal.Header closeButton>
            <Modal.Title>New API Key</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Here is your API Key.</p>
            <p>
              This will be shown here ONLY ONCE. Make sure to copy and save it
              in a safe place.
            </p>
            <code
              style={{
                // make the code block look like a terminal
                backgroundColor: "#303030",
                color: "#fff",
                padding: "10px",
                borderRadius: "10px",
                // add syntax highlighting
                fontFamily: "monospace",
              }}
            >
              {newKey}
            </code>
          </Modal.Body>
          <Modal.Footer>
            <StyledButton variant="secondary" onClick={handleCloseKeyModal}>
              Close
            </StyledButton>
            <StyledButton variant="primary" onClick={handleCopyKey}>
              {copied ? "Copied!" : "Copy to Clipboard"}
            </StyledButton>
          </Modal.Footer>
        </Modal>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;

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
