import React from 'react'
import styled from 'styled-components'

const Row1 = styled.div`
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));     
    `

const Row = (props) => {
    
    return (
        <Row1>   
            {props.children}        
        </Row1>
    )
}

export default Row