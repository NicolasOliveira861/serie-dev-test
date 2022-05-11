import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from "react-icons/ri";

import logo from "assets/logo.png";
import visa from "assets/visa.png";
import mastercard from "assets/mastercard.png";
import american from "assets/american.png";
import diners from "assets/dinersclub.png";
import hipercard from "assets/hipercard.png";
import aura from "assets/aura.png";
import elo from "assets/elo.png";
import boleto from "assets/boleto.png";
import {
  Container,
  Facebook,
  Info,
  Social,
  Address,
  CommonLinks,
  ContactLinks,
  Instagram,
  Link,
  PaymentFlags,
  Twitter,
  LinksTitle,
  ImgContainer,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Info>
        <img src={logo} alt="Logo da PetStore" />

        <Social>
          <Facebook href="#">
            <RiFacebookFill size={20} fill="#ffffff" />
          </Facebook>

          <Instagram href="#">
            <RiInstagramLine size={20} fill="#ffffff" />
          </Instagram>

          <Twitter href="#">
            <RiTwitterFill size={20} fill="#ffffff" />
          </Twitter>
        </Social>

        <Address>
          <p>2019. CNPJ 00.000.000/0000-00</p>
          <p>Rua Tal de Tal, 123 - Cidade Estado</p>
        </Address>
      </Info>

      <CommonLinks>
        <LinksTitle>Pet Store</LinksTitle>
        <Link href="#">Quem Somos</Link>
        <Link href="#">Como Comprar</Link>
        <Link href="#">Trocas e Devoluções</Link>
        <Link href="#">Frete e Entregas</Link>
      </CommonLinks>

      <ContactLinks>
        <LinksTitle>Contato</LinksTitle>
        <Link href="#">(99) 99999-9999</Link>
        <Link href="#">(99) 99999-9999</Link>
        <Link href="#">petstore@petstore.com</Link>
      </ContactLinks>

      <PaymentFlags>
        <LinksTitle>Pagamento</LinksTitle>
        <ImgContainer>
          <img src={visa} alt="Logo Cartão Visa" />
          <img src={mastercard} alt="Logo Cartão Mastercard" />
          <img src={american} alt="Logo Cartão American Express" />
          <img src={diners} alt="Logo Cartão Diners" />
          <img src={hipercard} alt="Logo Cartão Hipercard" />
          <img src={aura} alt="Logo Cartão Aura" />
          <img src={elo} alt="Logo Cartão Elo" />
          <img src={boleto} alt="Logo código de barras" />
        </ImgContainer>
      </PaymentFlags>
    </Container>
  );
};

export { Footer };
