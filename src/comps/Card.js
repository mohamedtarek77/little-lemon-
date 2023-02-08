import React from 'react'
import Button from './Button'

const Card = ({img,title,price,description}) => {
  return (
    <div className='card'>
        <img src={img} alt={title}/>
        <div className='content' >
        <div className='title' >
            <h4>{title}</h4>
            <p>{price}</p>
        </div>
        <p >{description}</p>
        <Button text='order a delivery' />
        </div>
  
    </div>
  )
}

export default Card