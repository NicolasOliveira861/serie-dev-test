export interface ImageProps {
  source: string;
  text: string;
}

export interface ProductProps {
  id: string;
  title: string;
  image: ImageProps;
  price: number;
  listPrice: number;
  installments: number;
}
