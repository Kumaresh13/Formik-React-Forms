import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
        border: none;
        padding: 7px 35px;
        cursor: pointer;
        outline: none;
        background: #f2f0f0;
        color: #e3436f;
        font-size: 20px;
        font-weight: bold;
        border-radius: 2px;
        margin-right: 10px;
        margin-top: 10px;
        &:hover{
            background: #aba9a9;
        }
    `

const Button = (props) => {
    return (
        <Btn>
            {props.children}
        </Btn>
    )
}

export default Button;