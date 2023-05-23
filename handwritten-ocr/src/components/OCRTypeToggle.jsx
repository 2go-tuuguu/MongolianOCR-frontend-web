import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import styled from "styled-components";

function OCRTypeToggle(props) {
  const { onOCRTypeChange } = props;

  const [radioValue, setRadioValue] = useState("Printed");

  const radios = [
    { name: "Printed", value: "Printed" },
    { name: "Handwritten", value: "Handwritten" },
  ];

  const handleRadioChange = (value) => {
    setRadioValue(value);
    onOCRTypeChange(value);
  };

  return (
    <>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <StyledToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={"outline-success"}
            name={radio.name}
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => handleRadioChange(e.currentTarget.value)}
          >
            {radio.name}
          </StyledToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

const StyledToggleButton = styled(ToggleButton)`
  &.btn-outline-success {
    background-color: ${(props) => props.theme.grey};
    color: ${(props) => props.theme.primary};
    border-color: ${(props) => props.theme.primary};
    &:hover {
      background-color: ${(props) => props.theme.opaquePrimary};
      color: ${(props) => props.theme.white};
      border-color: ${(props) => props.theme.opaquePrimary};
    }
  }
  --bs-btn-active-color: ${(props) => props.theme.white};
  --bs-btn-active-bg: ${(props) => props.theme.primary};
  --bs-btn-active-border-color: ${(props) => props.theme.primary};
`;

export default OCRTypeToggle;
