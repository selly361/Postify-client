import { Typography } from "Styles";
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: calc(100vw - 48px);
  height: 78px;
  padding: 16px 24px;

  border-radius: 12px;
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