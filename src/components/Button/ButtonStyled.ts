import { styled } from "styled-components";

const ButtonStyled = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.color.backgroud};
  color: ${({ theme }) => theme.color.titleFont};
  width: fit-content;
  height: fit-content;
`;

export default ButtonStyled;
