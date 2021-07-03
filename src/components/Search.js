import React, { useState } from 'react';
import { Header, HeadImage } from '../styles'
import shopeeImage from '../assets/shopee.png'

function Search(props){
  const [inputState, setInputState] = useState(props.keySearch)

  function onChange(e){
    const { value } = e.target;
    setInputState(value);
  }

  function onKeyDown(e){
    if(e.keyCode === 13) props.newSearch(inputState)
  }

  return(
    <div>
      <center>
        <HeadImage src={shopeeImage} />
      </center>
      <Header>
        <input 
          placeholder="Faça sua busca ..."
          value={inputState} 
          onChange={onChange} 
          onKeyDown={onKeyDown} 
          type="text"
        />
        <button onClick={
          () => props.newSearch(inputState)
        }>BUSCAR</button>
      </Header>
    </div>
  )
}

export default Search;