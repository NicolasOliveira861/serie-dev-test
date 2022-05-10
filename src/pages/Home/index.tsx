import { CollectionMosaic } from "components/collection-mosaic";
import { FloatingIcons } from "components/floating-icons";
import { Header } from "components/header";
import { Shelf } from "components/shelf";
import { Carousel } from "components/slider";
import { useState } from "react";
import productJson from "lib/products.json";
import { CategoryMosaic } from "components/category-mosaic";
import { Newsletter } from "components/newsletter";

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
    <div style={{ height: "200vh" }}>
      <Header />

      <Carousel />

      <CollectionMosaic />

      <Shelf shelfTitle="Novidades" products={productJson.new} />

      <CategoryMosaic />

      <Shelf shelfTitle="Destaques" products={productJson.highlights} />

      <Newsletter />

      {floatActive ? <FloatingIcons /> : <></>}
    </div>
  );
};

export { Home };
