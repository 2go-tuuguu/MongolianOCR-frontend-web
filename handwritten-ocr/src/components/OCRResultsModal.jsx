import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styled, { ThemeProvider } from "styled-components";
import theme from "../themes/theme";

function OCRResultsModal({ show, error, results, setShow }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(results).then(() => {
      setCopied(true);
    });
  };

  const handleSaveClick = () => {
    const blob = new Blob([results], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ocr-results.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleClose = () => {
    setCopied(false);
    setShow(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {error ? "Recognition Error" : "Recognized Text"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error ? (
            <p>{error}</p>
          ) : (
            <StyledVerticalPanel>{results}</StyledVerticalPanel>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!error && (
            <>
              <StyledButton variant="primary" onClick={handleCopyClick}>
                {copied ? "Copied!" : "Copy to Clipboard"}
              </StyledButton>
              <StyledButton variant="primary" onClick={handleSaveClick}>
                Save to File
              </StyledButton>
            </>
          )}
          <StyledButton variant="secondary" onClick={handleClose}>
            Close
          </StyledButton>
        </Modal.Footer>
      </Modal>
    </ThemeProvider>
  );
}

export default OCRResultsModal;

const StyledVerticalPanel = styled.div`
  writing-mode: vertical-lr;
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
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
