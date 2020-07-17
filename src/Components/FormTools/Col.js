import React from 'react'
import styled from 'styled-components'

const Col1 = styled.div`
        position: relative;
        width: 100%;
        padding: 0 10px;
        margin: 30px 0 10px;
        transition: 0.5s;   
    `

const Col = (props) => {
    
    return (
        <Col1>   
            {props.children}         
        </Col1>
    )
}

export default Col