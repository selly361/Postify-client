import { Typography } from "Styles"
import styled from "styled-components"

export const StyledForm = styled.form`
    width: 476px;
    min-height: 476px;
    border: 1px solid #633CFF;
    background: #fff;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    button {
        margin: auto;
    }
`

export const Title = styled.h2`
    ${Typography.HeadingM}
    text-align: center;
    margin-bottom: 3px;
`


export const StyledFieldset = styled.fieldset`
    display: grid;
    gap: 3px;

`

export const StyledInput = styled.input`


`

export const StyledLabel = styled.label`
    ${Typography.BodyM}

`
export const UploadImageContainer = styled.div`
    display: flex;
    align-items: center;
    
`
