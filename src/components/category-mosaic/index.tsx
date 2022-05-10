import cat from "assets/cat-sleeping.png";
import dog from "assets/dog.png";
import { Container, Content } from "./styles";

const CategoryMosaic = () => {
  return (
    <Container>
      <Content>
        <a href="#">
          <img src={cat} alt="Imagem de rações de animais" />
        </a>

        <a href="#">
          <img src={dog} alt="Imagem de brinquedos para animais" />
        </a>
      </Content>
    </Container>
  );
};

export { CategoryMosaic };
