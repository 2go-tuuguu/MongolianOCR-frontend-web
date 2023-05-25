import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <Container
      style={{
        paddingTop: "100px",
      }}
    >
      <Row>
        <Col>
          <h1>OCR Service for Traditional Mongolian Script</h1>
          <p>
            Our OCR service uses advanced technology to recognize both printed
            and handwritten text in traditional Mongolian script.
          </p>
          <p>
            Traditional Mongolian script has a unique structure and shape that
            can be challenging for other OCR services to recognize, but our
            service has been specifically designed to handle these complexities.
          </p>
          <p>
            With our service, you can easily digitize your traditional Mongolian
            documents. Whether you're a historian, a genealogist, or just
            someone interested in preserving traditional Mongolian culture, our
            OCR service can help.
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            paddingTop: "20px",
            paddingBottom: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="assets/mongolian-printed.jpg"
            alt="Example of printed Mongolian text"
            fluid
            style={{
              borderRadius: "10px",
              border: "2px solid #ccc",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Col>
        <Col
          style={{
            paddingTop: "20px",
            paddingBottom: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="assets/mongolian-handwritten.jpg"
            alt="Example of handwritten Mongolian script"
            fluid
            style={{
              borderRadius: "10px",
              border: "2px solid #ccc",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Our OCR service is fast, accurate, and easy to use. Simply upload
            your traditional Mongolian documents to our website, and we'll take
            care of the rest. You can copy the result to your clipboard, or
            download it as a text file.
          </p>
          <p>
            We're passionate about preserving traditional Mongolian culture, and
            we believe that our OCR service can help. By making traditional
            Mongolian documents more accessible and searchable, we hope to
            promote a deeper understanding and appreciation of this beautiful
            language and script.
          </p>
        </Col>
      </Row>

      <section id="api-usage">
        <h2>API Usage</h2>
        <p>
          Our OCR service is available via an API. The API is simple to use and
          can be integrated with any programming language.
        </p>
        <p>
          To use the API, you will need to first obtain an API key. You can do
          this by visiting our website and creating an account. Once you have an
          API key, you can start using the API.
        </p>
        <p>The API has the following main endpoint:</p>
        <ul>
          <li>
            <code
              style={{
                fontFamily: "monospace",
                fontSize: "16px",
                marginRight: "10px",
                color: "#3d8cd5",
              }}
            >
              /api/ocr
            </code>
            This endpoint is used to recognize handwritten traditional mongolian
            text from an image.
          </li>
        </ul>
        <p>
          The following is an example of a request to the{" "}
          <code
            style={{
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#3d8cd5",
            }}
          >
            /api/ocr
          </code>{" "}
          endpoint:
        </p>
        <pre>
          <code
            style={{
              maxHeight: "200px",
              display: "block",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              // make the code block look like a terminal
              backgroundColor: "#303030",
              color: "#fff",
              padding: "10px",
              borderRadius: "10px",
              // add syntax highlighting
              fontFamily: "monospace",
            }}
          >
            {"curl -X POST \\"}
            {"\n"}
            {'-H "API-Key: YOUR_API_KEY" \\'}
            {"\n"}
            {'-H "Content-Type: multipart/form-data" \\'}
            {"\n"}
            {'-H "ocrType: Handwritten" \\'}
            {"\n"}
            {'-F "image=@image.png" \\'}
            {"\n"}
            {"https://api.melmii-ocr.ru/api/ocr"}
          </code>
        </pre>
        <p>
          This request will recognize the text from the image{" "}
          <code
            style={{
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#3d8cd5",
            }}
          >
            image.png
          </code>{" "}
          and return the results as JSON.
        </p>
      </section>
    </Container>
  );
}

export default About;
