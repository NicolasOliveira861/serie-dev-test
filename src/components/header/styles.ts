import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 0;
  max-width: 1170px;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 33%;
  }
`;

export const SearchContainer = styled.div`
  height: 45px;

  > input {
    border: 1px solid #c6c6c6;
    border-right: none;
    padding: 12px 8px;
    height: 100%;
  }

  > span {
    border: 1px solid #c6c6c6;
    border-left: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.div``;

export const UserControls = styled.div`
  display: flex;
  column-gap: 10px;

  img {
    cursor: pointer;
  }
`;

export const CartBox = styled.div`
  position: relative;
`;

export const FloatingNumber = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: #ffa200;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 10px;
`;
