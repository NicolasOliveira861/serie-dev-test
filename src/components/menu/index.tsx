import { Container, Item, Items } from "./styles";
import menu from "assets/menu.png";

const Menu = () => {
  const navItems = [
    "Cachorros",
    "Gatos",
    "Pássaros",
    "Peixes",
    "Outros Pets",
    "Casa e Jardim",
    "Promoções",
  ];

  return (
    <Container>
      <Items>
        {navItems.map((item, idx) => (
          <Item href="#" key={idx}>
            {item}
          </Item>
        ))}

        <img src={menu} alt="Ícone do menu" />
      </Items>
    </Container>
  );
};

export { Menu };
