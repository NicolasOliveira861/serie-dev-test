import React from "react";
import logo from "assets/serie.png";
import { Container } from "./styles";

const Credits = () => {
  return (
    <Container>
      <p>Tecnologia e Desenvolvimento:</p>
      <img src={logo} alt="Logo Serie Design" />
    </Container>
  );
};

export { Credits };
