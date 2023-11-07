import { styled } from "styled-components";

const HeaderStyled = styled.header`
  font-weight: 800;
  color: ${({ theme }) => theme.color.titleFont};
`;

export default HeaderStyled;
