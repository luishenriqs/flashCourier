import styled, { css } from 'styled-components'

interface ContainerProps {
    isFocused: boolean
    isFilled: boolean
}

export const Container = styled.div<ContainerProps>`
    background: #fff;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    border: 2px solid #fff;
    margin: 15px 0 0 0;

    ${(props) =>
        props.isFocused &&
        css`
            border-color: #3f5398;
        `}

    ${(props) =>
        props.isFilled &&
        css`
            border-color: #e6b733;
        `}

  input {
        background: transparent;
        color: #4f4f4f;
        flex: 1;
        border: none;

        &::placeholder {
            color: #969cb3;
        }
    }
`
