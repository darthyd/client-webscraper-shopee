import React from 'react';

function Card(props){
  return(
    <div>
      <a href={props.produto.link}>
          <img src={props.produto.image} alt={props.produto.produto} />
          <p>{props.produto.produto}</p>
          <strong>{'R$ ' + props.produto.preco}</strong>
      </a>
    </div>
  )
}

export default Card;