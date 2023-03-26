import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";

export default function LongreadCard(props) {
  return (
    <Card
      style={{
        border: "none",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Row noGutters>
        <Col
          md={5}
          style={{
            marginRight: "-15px",
          }}
        >
          <StyledImage src={props.img} alt={props.title} />
        </Col>
        <Col md={7} className="d-flex flex-column">
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text
              style={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                lineClamp: "3",
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
              }}
            >
              {props.desc}
            </Card.Text>
          </Card.Body>
          <div
            className="mt-auto"
            style={{
              marginLeft: "15px",
              marginBottom: "15px",
            }}
          >
            <StyledButtonActive>Read</StyledButtonActive>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

const StyledButtonActive = styled(Button)`
  background-color: rgba(0, 81, 85, 1);
  border: none;
  border-radius: 4px;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    background-color: rgba(0, 81, 85, 0.7);
    color: #ffffff;
  }
  &:active {
    background-color: rgba(0, 81, 85, 1) !important;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    color: #ffffff;
  }
`;

const StyledImage = styled(Card.Img)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
