import { ImageProps, ProductProps } from "lib/props";
import {
  Container,
  Details,
  ImgContainer,
  Installments,
  ListPrice,
  Overlay,
  Price,
  Prices,
  Product,
  Products,
  Title,
} from "./styles";

interface Props {
  shelfTitle: string;
  products: ProductProps[];
}

const Shelf = ({ products, shelfTitle }: Props) => {
  if (products.length > 0) {
    return (
      <Container>
        <h1>{shelfTitle}</h1>

        <Products>
          {products.map(
            ({ id, image, installments, listPrice, price, title }) => (
              <Product key={id}>
                <ImgContainer>
                  <img src={image.source} alt={image.text} />
                  <Overlay>
                    <a href="#">Compra Rápida</a>
                  </Overlay>
                </ImgContainer>
                <Title>{title}</Title>

                <Details>
                  <Prices>
                    {listPrice !== price && (
                      <ListPrice>
                        R$ {listPrice.toFixed(2).replaceAll(".", ",")}
                      </ListPrice>
                    )}

                    <Price>R$ {price.toFixed(2).replaceAll(".", ",")}</Price>
                  </Prices>

                  {installments > 1 && (
                    <Installments>
                      {installments}x de R$
                      {(price / installments).toFixed(2).replaceAll(".", ",")}
                    </Installments>
                  )}
                </Details>
              </Product>
            )
          )}
        </Products>
      </Container>
    );
  }

  return <></>;
};

export { Shelf };
