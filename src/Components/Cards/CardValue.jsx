import React from "react";
import { StyledCardValue } from "./StyledCardValue";

export const CardValue = ({ titleCard, bodyCard, imageCard }) => {
  return (
    <StyledCardValue>
      <div className="CardContainer">
        <div className="CardHeader">{titleCard}</div>
        <div className="CardBody">{bodyCard}</div>
      </div>
    </StyledCardValue>
  );
};
