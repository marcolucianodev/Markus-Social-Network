import React from "react";
import { Container } from "./styles";

const CounterViews = ({counterNumber, counterCategory}) => {
  return (
    <Container>
      <div className="member-count-view">
        <span>Vizualizando 1 - {counterNumber} de {counterNumber} {counterCategory}</span>
      </div>
    </Container>
  )
}

export default CounterViews;