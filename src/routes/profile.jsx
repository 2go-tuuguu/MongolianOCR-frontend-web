import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Profile() {
  return (
    <div id="Profile">
      <Container>
        <Image
          src="../assets/profile.png"
          roundedCircle
          style={{
            width: "200px",
            height: "200px",
            marginTop: "1.2rem",
            marginBottom: "1.2rem",
            objectFit: "cover",
            border: "3px solid rgba(0, 81, 85, 1)",
            backgroundColor: "#fff",
            padding: "5px",
          }}
        />
        <Row>
          <Col xs={12} md={8}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1 style={{ margin: 0 }}>DALL•E 2</h1>
              <Badge
                pill
                bg=""
                style={{
                  backgroundColor: "rgba(0, 81, 85, 1)",
                  marginLeft: "10px",
                  fontSize: "1rem",
                  paddingTop: "0.3rem",
                  paddingBottom: "0.3rem",
                }}
              >
                Artist
              </Badge>
            </div>
          </Col>
        </Row>

        <p>Freelance artist who loves to design worlds</p>
        <h2>Worlds</h2>
        <ul>
          <li>World 1</li>
          <li>World 2</li>
          <li>World 3</li>
        </ul>
        <h2>Longreads</h2>
        <ul>
          <li>Longread 1</li>
          <li>Longread 2</li>
          <li>Longread 3</li>
        </ul>
      </Container>
    </div>
  );
}
