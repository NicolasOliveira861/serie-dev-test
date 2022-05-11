import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { BackToTop, Container, WhatsappBtn } from "./styles";

const FloatingIcons = () => {
  return (
    <Container>
      <BackToTop
        type="button"
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        <FaArrowUp size={24} fill="#ffffff" />
      </BackToTop>

      <WhatsappBtn type="button">
        <FaWhatsapp size={24} fill="#ffffff" />
      </WhatsappBtn>
    </Container>
  );
};

export { FloatingIcons };
