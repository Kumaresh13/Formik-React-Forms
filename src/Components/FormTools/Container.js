import React from 'react'
import styled from 'styled-components'

const ContainerDiv = styled.div`
    width: 60%;
    padding: 20px;    
    `

const Container = (props) => {
    
    return (
        <ContainerDiv>
            {props.children}
        </ContainerDiv>
    )
}

export default Container