import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 0 16px;
  max-width: 1170px;
  width: 100%;
  column-gap: 25px;
  margin: 0 auto;

  > p {
    color: #7f7f7f;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 500;
  }
`;
