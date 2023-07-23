import { Typography } from "Styles";
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 78px;
  padding: 16px 72px;

  background: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNav = styled.nav`
    width: max-content;

    display: flex;
    gap: 16px;
    align-items: center;
`

export const Title = styled.h1`
  ${Typography.HeadingM}
`