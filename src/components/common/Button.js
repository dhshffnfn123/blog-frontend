import React from "react";
import styled from "styled-components";
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    
    background: ${palette.gray[8]};
    &:hover {
        background: ${palette.gray[6]};
    }
    `;

    const Button = props => <StyledButton { ...props} />; // 버튼이 받아오는 props를 모두 StyledButton에 전달함

    export default Button;