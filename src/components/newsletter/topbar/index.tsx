import logo from "assets/logo-pata.png";
import { Container, Item } from "./styles";

const Topbar = () => {
  return (
    <Container>
      <Item>
        <img src={logo} alt="Ícone de pata de cachorro" />
        <p>
          <strong>Entrega gratuita</strong> a partir de R$ 99
        </p>
      </Item>

      <Item>
        <img src={logo} alt="Ícone de pata de cachorro" />
        <p>
          <strong>Parcelamento</strong> sem juros
        </p>
      </Item>

      <Item>
        <img src={logo} alt="Ícone de pata de cachorro" />
        <p>
          <strong>Cadastre-se</strong> e ganhe desconto
        </p>
      </Item>
    </Container>
  );
};

export { Topbar };
