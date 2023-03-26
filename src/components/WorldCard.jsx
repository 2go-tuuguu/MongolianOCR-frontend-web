import styled from "styled-components";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

export default function WorldCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/worlds/${props.id}`);
  };

  return (
    <Card
      style={{
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
            WebkitLineClamp: "2",
            lineClamp: "2",
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
          }}
        >
          {props.desc}
        </Card.Text>
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
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
