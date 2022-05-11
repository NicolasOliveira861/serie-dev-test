import { CollectionMosaic } from "components/collection-mosaic";
import { FloatingIcons } from "components/floating-icons";
import { Header } from "components/header";
import { Shelf } from "components/shelf";
import { Carousel } from "components/slider";
import { useState } from "react";
import productJson from "lib/products.json";
import { CategoryMosaic } from "components/category-mosaic";
import { Newsletter } from "components/newsletter";
import { Footer } from "components/footer";
import { Credits } from "components/credits";
import styled from "styled-components";

const Container = styled.div`
  height: 420vh;
  min-height: 100vh;
`;

const Home = () => {
  const [floatActive, setFloatActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      setFloatActive(true);
    } else {
      setFloatActive(false);
    }
  });

  return (
    <Container>
      <Header />

      <Carousel />

      <CollectionMosaic />

      <Shelf shelfTitle="Novidades" products={productJson.new} />

      <CategoryMosaic />

      <Shelf shelfTitle="Destaques" products={productJson.highlights} />

      <Newsletter />

      <Footer />
      <Credits />

      {floatActive ? <FloatingIcons /> : <></>}
    </Container>
  );
};

export { Home };
