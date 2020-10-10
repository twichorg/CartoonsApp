import React from 'react';
import './card.style.css';

export  const Card = (props) => (
<div className='card-container'>
<img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set&size=180x180`}></img>
<h2> {props.monster.name} </h2>
</div>
)