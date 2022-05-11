import styled from "styled-components";

export const Container = styled.div`
  background: #ffa200;
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Content = styled.div`
  max-width: 1170px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 18px;
  column-gap: 18px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 18px;
    margin: 20px;

    a {
      width: 100%;

      img {
        display: block;
        min-width: 100%;
        object-fit: contain;
      }
    }
  }
`;
