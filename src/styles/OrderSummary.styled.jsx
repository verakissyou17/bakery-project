import styled from "styled-components";

export const OrderSummaryStyled = styled.div`

  .cart-item-container {
    margin-bottom: 1.5em;
    border-radius: 0.25rem;
    padding: 1.125rem;
  }

  .delivery-date {
    color: var(--delivery-option-date);
    font-weight: 700;
    font-size: 1.1875rem;
    margin-top: 0.3125rem;
    margin-bottom: 1.375rem;
  }

  .cart-item-details-grid {
    display: grid;
    grid-template-columns: 8rem 1fr;
    row-gap: 1.5rem;
    column-gap: 1.5rem;
    border: 3px solid orange;
  }

  .checkout-product-image {
    max-height: 8rem;
    margin-right: auto;
  }

  .checkout-product-name {
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  .checkout-product-price {
    font-family: "Nunito Sans", sans-serif;
    color: var(--added);
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  @media (min-width: 65em) {
    .cart-item-details-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
