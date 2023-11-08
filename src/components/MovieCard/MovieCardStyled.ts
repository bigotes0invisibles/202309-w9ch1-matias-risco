import { styled } from "styled-components";

const MovieCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 30px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.cardContainer};

  .movie-card {
    &__content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }

    &__information {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    &__genres {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px;
    }

    &__image {
      width: calc(100vw - 80px);
      max-width: 300px;
      height: 150px;
      object-fit: cover;
    }

    &__checkbox {
      padding: 5px;
      width: 30px;
      height: 30px;
      align-self: center;
      filter: invert(100%);
    }
  }
`;

export default MovieCardStyled;
