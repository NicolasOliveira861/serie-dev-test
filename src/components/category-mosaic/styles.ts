import styled from "styled-components";

export const Container = styled.div`
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1170px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 18px;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 520px) {
    flex-direction: column;

    img {
      max-width: 100%;
    }
  }
`;
