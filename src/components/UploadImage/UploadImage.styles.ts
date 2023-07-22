import { Typography } from "Styles";
import styled from "styled-components";

export const UploadImageContainer = styled.div`
  height: 193px;
  position: relative;

  & input {
    width: 193px;
    height: 193px;
    opacity: 0;
    position: absolute;
    z-index: 10;
    cursor: pointer;
    inset: 0;
    margin: auto;
  }
`;

export const StyledImage = styled.div<{ image: string }>`
  height: 193px;
  width: 193px;
  object-fit: contain;
  display: grid;
  place-items: center;
  background: url(${(props) => props.image}), #efebff;
  ${props => props.image ? `box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.7);` : ``}
  border-radius: 12px;
  position: absolute;
  inset: 0;
  margin: auto;
  cursor: pointer;
  background-position: center;

  path {
    fill: ${props => props.image ? 'white' : ''};
  }

  & div h3 {
    color: ${props => props.image ? 'white' : ''};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-direction: column;
  filter: blur(0px);

  h3 {
    ${Typography.HeadingS}
    color: #633CFF;
  }
`;
