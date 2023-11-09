import { styled } from "styled-components";

const FormMovieStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.color.cardContainer};

  padding: 20px;

  .form-movie {
    &__input {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: start;
      gap: 20px;
    }

    &__image {
      object-fit: cover;
      width: calc(100vw - 80px);
      max-width: 300px;
    }

    &__checkbox {
      width: 20px;
      height: 20px;
      filter: invert(100%);
    }

    &__button {
      padding: 10px 20px;
    }
  }
`;

export default FormMovieStyled;
