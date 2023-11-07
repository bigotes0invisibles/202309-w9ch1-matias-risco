import { styled } from "styled-components";

const HeaderStyled = styled.header`
  font-weight: 800;
  color: ${({ theme }) => theme.color.titleFont};
  background-color: ${({ theme }) => theme.color.backgroud};
  padding: 5px 30px;
  border-radius: 5px 125px;
  filter: invert(100%);
`;

export default HeaderStyled;
