import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import styled, { ThemeProvider } from "styled-components";
import Image from "react-bootstrap/Image";
import { HiOutlineUpload } from "react-icons/hi";
import OCRResultsModal from "../components/OCRResultsModal";
import theme from "../themes/theme";
import Spinner from "react-bootstrap/Spinner";
import OCRTypeToggle from "../components/OCRTypeToggle";

import { useSelector } from "react-redux";

import { api_URL } from "../config/urls";

export default function Home() {
  const [file, setFile] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState("");
  const [OcrError, setOcrError] = useState(false);
  const [ocrType, setOcrType] = useState("Printed"); // Default mode is printed OCR
  const [isLoading, setIsLoading] = useState(false);

  const loggedIn = useSelector((state) => state.auth.loggedIn);

  useEffect(() => {
    if (!loggedIn) {
      setFile(null);
    }
  }, [loggedIn]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files[0];
    setFile(selectedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleOCRTypeChange = (value) => {
    setOcrType(value);
  };

  const handleRecognize = () => {
    setIsLoading(true);
    setOcrError("");

    if (!file) {
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    fetch(api_URL + "/ocr", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ocrType: `${ocrType}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.message === "Success") {
          setResults(data.recognized_text);
          setShowResults(true);
        } else {
          // console.log(data.message); // Handle error
          setOcrError(data.message);
          setShowResults(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        // console.log("Error:", error); // Handle error
        setOcrError(error);
        setShowResults(true);
      });
  };

  return (
    <ThemeProvider theme={theme}>
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
          <div
            style={{
              display: "flex",
              width: "500px",
              justifyContent: "space-around",
              // marginTop: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              {file ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={URL.createObjectURL(file)}
                    alt="Uploaded Image"
                    height={window.innerHeight * 0.45}
                    style={{
                      borderRadius: "10px",
                      border: "2px solid #ccc",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                  <StyledButtonActive
                    // make this button select another image onclick by triggering the file input
                    onClick={() => setFile(null)}
                    // style this button to not have width of 100%
                    style={{
                      width: "auto",
                      marginTop: "30px",
                      marginBottom: "30px",
                    }}
                  >
                    Another Image
                  </StyledButtonActive>
                </div>
              ) : (
                <>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() =>
                      document.getElementById("file-input").click()
                    }
                    style={{
                      width: "100%",
                      height: "250px",
                      border: "2px dashed #999",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "30px",
                      cursor: "pointer",
                      flexDirection: "column",
                    }}
                  >
                    <label>
                      <StyledIcon as={HiOutlineUpload} />
                    </label>
                    <p>
                      Drag and drop an image file here, or click to select file
                    </p>
                  </div>
                </>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div>
                  <OCRTypeToggle onOCRTypeChange={handleOCRTypeChange} />
                </div>
                <StyledButtonActive
                  onClick={handleRecognize}
                  disabled={isLoading || !file || !loggedIn}
                >
                  {isLoading ? (
                    <Spinner
                      animation="border"
                      role="status"
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginTop: 0,
                        marginRight: "32px",
                        marginLeft: "32px",
                      }}
                    ></Spinner>
                  ) : (
                    "Recognize"
                  )}
                </StyledButtonActive>
              </div>
              {!loggedIn ? (
                <p
                  style={{
                    marginTop: "10px",
                    color: "gray",
                  }}
                >
                  Please log in or sign up first.
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <OCRResultsModal
            show={showResults}
            error={OcrError}
            results={results}
            setShow={setShowResults}
          />
        </Container>
      </div>
    </ThemeProvider>
  );
}

const StyledButtonActive = styled(Button)`
  background-color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.primary};
  margin-left: 10px;
  &:hover {
    background-color: ${(props) => props.theme.darkerPrimary};
    border-color: ${(props) => props.theme.darkerPrimary};
    color: ${(props) => props.theme.white};
  }
  &:active {
    background-color: ${(props) => props.theme.primary} !important;
    border-color: ${(props) => props.theme.primary} !important;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    color: ${(props) => props.theme.white};
  }
  &:disabled {
    background-color: ${(props) => props.theme.opaquePrimary} !important;
    border-color: ${(props) => props.theme.opaquePrimary} !important;
    color: ${(props) => props.theme.white};
  }
`;

const StyledIcon = styled.i`
  font-size: 4rem;
  color: ${(props) => props.theme.primary};
  &:hover {
    cursor: pointer;
  }
`;
