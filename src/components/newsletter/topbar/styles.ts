import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  border-bottom: 2px solid #ffa200;
  display: flex;
  justify-content: space-around;
  padding: 0 20px 20px;
  flex-wrap: wrap;
  row-gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    max-width: 80%;
  }
`;

export const Item = styled.div`
  display: flex;
  column-gap: 10px;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;
