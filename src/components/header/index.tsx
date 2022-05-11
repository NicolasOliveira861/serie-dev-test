import {
  Container,
  CartBox,
  FloatingNumber,
  Logo,
  SearchContainer,
  UserControls,
} from "./styles";

import logo from "assets/logo.png";
import cart from "assets/cart.png";
import user from "assets/user.png";
import menu from "assets/menu.png";

import { AiOutlineSearch } from "react-icons/ai";
import { Menu } from "components/menu";

const Header = () => {
  return (
    <>
      <Container>
        <SearchContainer>
          <img className="menu" src={menu} alt="Ícone do menu" />
          <input type="text" placeholder="Pesquisar..." />
          <span>
            <AiOutlineSearch size={24} />
          </span>
        </SearchContainer>

        <Logo>
          <img src={logo} alt="Logo da Pet Store" />
        </Logo>

        <UserControls>
          <img src={user} alt="Ícone de usuário" />
          <CartBox>
            <img src={cart} alt="Ícone de carrinho" />
            <FloatingNumber>99</FloatingNumber>
          </CartBox>
        </UserControls>
      </Container>

      <Menu />
    </>
  );
};

export { Header };
