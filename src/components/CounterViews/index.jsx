import React from "react";
import { Container } from "./styles";

const CounterViews = ({counterType}) => {
  return (
    <Container>
      <div className="member-count-view">
        <span>Vizualizando 1 - 7 de 7 {counterType} ativos</span>
      </div>
    </Container>
  )
}

export default CounterViews;