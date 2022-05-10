import { FaArrowCircleUp, FaWhatsapp } from "react-icons/fa";
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
        <FaArrowCircleUp size={36} fill="#7F7F7F" path="#ffffff" />
      </BackToTop>

      <WhatsappBtn type="button">
        <FaWhatsapp size={24} fill="#ffffff" />
      </WhatsappBtn>
    </Container>
  );
};

export { FloatingIcons };
