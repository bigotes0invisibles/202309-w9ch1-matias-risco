import { styled } from "styled-components";

const MovieCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 30px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.cardContainer};
`;

export default MovieCardStyled;
