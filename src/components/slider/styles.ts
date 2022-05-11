import styled from "styled-components";

export const Container = styled.div`
  .slider-frame img {
    object-fit: cover;
    max-width: 100%;
    min-height: 100%;
  }

  @media screen and (max-width: 520px) {
    .slider-frame img {
      max-width: 200%;
    }
  }

  @media screen and (max-width: 1024px) {
    .slider-control-centerright,
    .slider-control-centerleft {
      display: none;
    }
  }

  .slider-control-centerright {
    right: 18% !important;
  }

  .slider-control-centerleft {
    left: 18% !important;
  }
`;
