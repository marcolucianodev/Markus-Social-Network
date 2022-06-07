import React from "react";
import { Container } from "./styles";

const CounterViews = ({counterNumber, counterType}) => {
  return (
    <Container>
      <div className="member-count-view">
        <span>Vizualizando 1 - {counterNumber} de {counterNumber} {counterType}</span>
      </div>
    </Container>
  )
}

export default CounterViews;