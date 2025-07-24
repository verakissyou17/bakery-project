import styled from "styled-components";

export const CheckoutMainStyled = styled.main`
  max-width: 32rem;
  padding: 1em;
  margin-top: calc(var(--header-height) + 5vh);

  .page-title {
    font-weight: 700;
    margin-bottom: 1.125rem;
  }

  .checkout-grid {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    align-items: start;
    border: 5px solid orange;
  }

  @media (min-width: 55em) {
    max-width: 68.75rem;

    .checkout-grid {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      row-gap: 0;
      align-items: auto;
    }
  }
`;
