import Slider from "nuka-carousel";
import React from "react";
import banner from "assets/banner.png";
import arrow from "assets/arrow.png";
import { Container } from "./styles";

const Carousel: React.FC = () => {
  return (
    <Container>
      <Slider
        slidesToShow={1}
        autoplay
        wrapAround
        renderCenterRightControls={({ nextSlide }) => {
          return (
            <button type="button" onClick={nextSlide}>
              <img src={arrow} alt="Ícone de seta" />
            </button>
          );
        }}
        renderCenterLeftControls={({ previousSlide }) => {
          return (
            <button type="button" onClick={previousSlide}>
              <img
                src={arrow}
                alt="Ícone de seta"
                style={{ transform: "rotate(180deg)" }}
              />
            </button>
          );
        }}
        defaultControlsConfig={{
          pagingDotsStyle: { display: "none" },
        }}
      >
        <img src={banner} alt="Imagem de cachorro" />
        <img src={banner} alt="Imagem de cachorro" />
      </Slider>
    </Container>
  );
};

export { Carousel };
