import React from 'react'
import styled from 'styled-components'

const TextBox1 = styled.div`
        position: relative;
        width: 100%;
        height: 100px;
        padding: 10px 0;
    `

const TextBox = (props) => {
    
    return (
        <TextBox1>
            {props.children}
        </TextBox1>
    )
}

export default TextBox