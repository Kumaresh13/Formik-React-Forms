import React from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
        width: 100%;
        color: #f51000;         
        font-size: 36px;
        text-align: center;
        margin-bottom: 10px;   
    `

const Heading2 = (props) => {
    
    return (
        <H2>
            {props.children}
        </H2>
    )
}

export default Heading2