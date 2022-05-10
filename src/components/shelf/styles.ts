import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 2.5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2.5rem;

  > h1 {
    font-size: 1.5rem;
    color: #7f7f7f;
    text-transform: uppercase;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 18px;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 400px;
`;

export const ImgContainer = styled.div`
  position: relative;

  > img {
    max-width: 100%;
    object-fit: contain;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  background: rgba(192, 171, 226, 0.8);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  > a {
    padding: 0.875rem 1.125rem;
    background: #ffa200;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 600;
    font-size: 0.75rem;
  }

  :hover {
    opacity: 1;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Prices = styled.div`
  display: flex;
  column-gap: 17px;
  margin-bottom: 4px;
`;

export const Title = styled.div`
  color: #9f9f9f;
  margin-bottom: 12px;
`;

export const ListPrice = styled.div`
  text-decoration: line-through;
  color: #bbbbbb;
  font-size: 0.875rem;
`;

export const Price = styled.div`
  color: #7f7f7f;
  font-weight: 700;
  font-size: 0.875rem;
`;

export const Installments = styled.div`
  color: #9f9f9f;
  font-size: 0.875rem;
`;
