import { Container, FormArea, FormContainer, Subtitle, Title } from "./styles";
import { Topbar } from "./topbar";

const Newsletter = () => {
  return (
    <Container>
      <Topbar />

      <FormArea>
        <Title>Assine nossa newsletter</Title>
        <Subtitle>
          Cadastre-se para receber nossas novidades e descontos exclusivos!
        </Subtitle>

        <FormContainer>
          <input type="text" name="name" placeholder="Nome" />
          <input type="email" name="email" placeholder="E-mail" />
          <button type="submit">Enviar</button>
        </FormContainer>
      </FormArea>
    </Container>
  );
};

export { Newsletter };
