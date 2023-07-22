import { Typography } from "Styles";
import styled from "styled-components";

export const StyledForm = styled.form`
  width: 476px;
  min-height: 476px;
  background: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  gap: 12px;

  button {
    width: 100%;
    margin: auto;
  }
`;

export const Title = styled.h2`
  ${Typography.HeadingM}
  text-align: center;
  margin-bottom: 3px;
`;

export const StyledFieldset = styled.fieldset`
  display: grid;
  gap: 3px;
`;

export const StyledInput = styled.input``;

export const StyledLabel = styled.label`
  ${Typography.BodyM}
`;
