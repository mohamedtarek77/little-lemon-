import React from 'react'
import {Button , Card} from './index'
import {greekSalad,lemonDessert} from '../assets/index'
const Specials  = () => {
  return (
    <div className='Specials'>
    
    <div className='container' >
      <div className='content' >
      <h2>Special</h2>
        <Button  text="Online menu"/>
      </div>
      <div className='cards' >
        <Card 
        img={greekSalad}
          title='Grade Salat'
          price='$ 10.99'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        />
           <Card 
        img={lemonDessert}
          title='lemon Dessert'
          price='$ 10.99'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        />
           <Card 
        img={lemonDessert}
          title='lemon Dessert'
          price='$ 10.99'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        />
      </div>
    </div>
     </div>
  )
}

export default Specials 