import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #8158c5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  color: #ffffff;
  font-weight: 400;

  @media screen and (max-width: 520px) {
    display: none;
  }
`;

export const Items = styled.div`
  display: flex;
  column-gap: 43px;
  max-width: 1170px;
  width: 100%;
  justify-content: center;

  img {
    cursor: pointer;
  }
`;

export const Item = styled.a``;
