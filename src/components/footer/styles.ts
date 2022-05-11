import styled from "styled-components";

const Rounded = styled.a`
  border-radius: 50%;
  height: 1.875rem;
  width: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1170px;
  padding: 2.5rem 0;
  margin: 0 auto;
  border-bottom: 1px solid #f0f0f0;

  @media screen and (max-width: 520px) {
    flex-direction: column;
    padding: 2.5rem 1rem;
    row-gap: 2rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    > img {
      max-width: 100%;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 31px auto 23px;
`;

export const Facebook = styled(Rounded)`
  background: #ffa200;
`;

export const Instagram = styled(Rounded)`
  background: #7f7f7f;
`;

export const Twitter = styled(Rounded)`
  background: #7f7f7f;
`;

export const Address = styled.div`
  text-align: center;

  > p {
    font-size: 0.75rem;
    color: #888888;
  }
`;

export const CommonLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinksTitle = styled.h1`
  color: #8158c5;
  margin-bottom: 1.3125rem;
  text-transform: uppercase;
`;

export const Link = styled.a`
  color: #7f7f7f;
  font-size: 0.875rem;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 1.1875rem;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaymentFlags = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 9px;

  > img {
    flex: calc(24% - 9px);
    width: 23px;
    max-height: 26px;
    object-fit: contain;
  }
`;
