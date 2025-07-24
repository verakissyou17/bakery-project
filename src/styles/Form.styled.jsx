import styled from "styled-components";

export const FormStyled = styled.form`
  .delivery-options-title {
    line-height: 1;
    margin-bottom: 0.75em;
  }

  .form-group {
    display: flex;
    gap: 0.5rem;
    border: 2px solid var(--bg-header);
    border-radius: 0.25rem;
    padding: 1em;
    margin-bottom: 1.5rem;
  }

  .radio-group,
  .delivery-option,
  .delivery-options-details {
    display: flex;
    gap: 0.5rem;
  }

  .delivery-options-details {
    flex-direction: column;
    flex: 1;
    border: 3px solid yellow;
  }

  .delivery-option input {
    cursor: pointer;
    width: 1.2rem;
    height: 1.2rem;
  }

  .delivery-option-date {
    color: var(--delivery-option-date);
    font-weight: 500;
  }

  .delivery-option-price {
    font-family: "Nunito Sans", sans-serif;
    color: var(--delivery-option-price);
    font-size: 0.9375rem;
  }

  .user-form {
    border: 3px solid yellow;
  }

  .user-form-group {
    display: flex;
  }

  .user-form-group label {
    display: block;
  }

  .user-form-group input {
    background-color: pink;
    flex: 1;
  }

  #number {
    max-width: 2rem;
  }

  #block,
  #stair,
  #apart,
  #floor {
    max-width: 2rem;
  }

  @media (min-width: 65em) {
    gap: 3rem;
  }
`;
