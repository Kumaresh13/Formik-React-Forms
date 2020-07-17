import React, { Fragment } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import styled from 'styled-components'

function Selection() {
  const state1 = {
    options: [
      { name: "Owner1" },
      { name: "Sam" },
      { name: "Sam" },
      { name: "Sam" },
      { name: "Sam" },
    ],
  };
  
  const onSelect = (selectedList, selectedItem) =>{
    selectedList.push(selectedItem)
  }
  
  const onRemove = (selectedList, removedItem) => {
    selectedList.remove(removedItem)
  }  

  const Text = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
  padding: 0 10px;
  display: block;
  transition: 0.5s;
  pointer-events: none;
        
`;
const Line = styled.span`
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 2px;
  background: #f2f0f0;
  transition: 0.5s;
  border-radius: 2px; 
  pointer-events: none;
`;

  const style={
    searchBox: {
        position: 'absolute',
        width: '100%',
        height: '40px',
        background: 'transparent',
        boxShadow: 'none',
        border: 'none',
        outline: 'none',
        fontSize: '18px',
        padding: '0 10px',
        zIndex: '1',
        color: '#e3436f'
    },
    inputField:{
        color: '#e3436f',
        fontSize: '20px',
        fontWeight: 'Bolder',
        margin: '0',
        padding: '0',
    }
  }

  return (
    <Fragment>
      <Multiselect
        options={state1.options}
        selectedValues={state1.selectedValue}
        displayValue="name"
        placeholder=""
        style={style}
        />     
      <Text>Owners</Text>
      <Line></Line>  
    </Fragment>
  );
}

export default Selection;
