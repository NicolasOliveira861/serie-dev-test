import styled from "styled-components";

export const Container = styled.div`
  background: #8158c5;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0 3.625rem;

  @media screen and (max-width: 768px) {
    padding: 3.625rem 0;
  }
`;

export const FormArea = styled.div`
  padding-top: 3.4375rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 80%;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 1.5625rem;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #ffffff;
  font-weight: 300;
  margin-bottom: 4.375rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  column-gap: 1.125rem;

  > input {
    color: #ffffff;
    border-bottom: 1px solid #ffffff;

    &[name="name"] {
      width: 180px;
    }

    ::placeholder {
      color: #ffffff90;
    }
  }

  > button {
    padding: 0.8125rem 1.0625rem;
    color: #ffffff;
    text-transform: uppercase;
    background: #ffa200;
  }

  @media screen and (max-width: 520px) {
    flex-direction: column;
    row-gap: 1rem;

    > input[name="name"] {
      width: unset;
    }
  }
`;
