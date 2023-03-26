import styled from "styled-components";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import { useNavigate } from "react-router-dom";

export default function WorldObjectCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/worlds/${props.id}/objects/${props.objectId}`);
  };

  return (
    <Card
      style={{
        width: "100%",
        border: "none",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <StyledImage src={props.img} />
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
          {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "-5px",
              marginBottom: "-15px",
            }}
          >
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "-5px",
              marginBottom: "-15px",
            }}
          >
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "-5px",
              marginBottom: "-15px",
            }}
          >
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <StyledButtonActive onClick={handleClick}>Open</StyledButtonActive>
      </Card.Body>
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
    color: #ffffff;
  }
`;

const StyledImage = styled(Card.Img)`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 4px;
`;
