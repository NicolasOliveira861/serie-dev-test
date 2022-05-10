import racoes from "assets/racoes.png";
import toys from "assets/toys.png";
import acessorios from "assets/acessorios.png";
import { Container, Content } from "./styles";

const CollectionMosaic = () => {
  return (
    <Container>
      <Content>
        <a href="#">
          <img src={racoes} alt="Imagem de rações de animais" />
        </a>

        <a href="#">
          <img src={toys} alt="Imagem de brinquedos para animais" />
        </a>

        <a href="#">
          <img src={acessorios} alt="Imagem de acessórios para animais" />
        </a>
      </Content>
    </Container>
  );
};

export { CollectionMosaic };
