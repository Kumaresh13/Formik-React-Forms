import React from 'react'
import styled from 'styled-components'

const InputBox1 = styled.div`
        position: relative;
        width: 100%;
        height: 40px;
        color: #e3436f;
        input {
            position: absolute;
            width: 100%;
            height: 100%;
            background: transparent;
            box-shadow: none;
            border: none;
            outline: none;
            font-size: 18px;
            padding: 0 10px;
            z-index: 1;
            color: #e3436f;
        }
        select {
                position: absolute;
                width: 100%;
                height: 100%;
                background: transparent;
                box-shadow: none;
                border: none;
                outline: none;
                font-size: 18px;
                padding: 0 10px;
                z-index: 1;
                color: #e3436f;
        }
    `

const InputBox = (props) => {
    
    return (
        <InputBox1>   
            {props.children}    
        </InputBox1>
    )
}

export default InputBox