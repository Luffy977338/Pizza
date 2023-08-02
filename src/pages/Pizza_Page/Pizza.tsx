import React from 'react'
import './style.css'
import PriceBar from '../../components/PriceBar/PriceBar'
import { pizzaList } from '../../localLists/pizzaList'

function Pizza() {

   const typeOptions = 'pizza'

   return (
      <main>
         <h1 className='title' >Пицца</h1>
         <div className='wrap_center'>
            <div className='wrap'>
               {pizzaList.map((item) => (
                  <PriceBar typeOptions={typeOptions} key={item.id} id={item.id} img={item.img} name={item.name} price={item.price} composition={item.composition} />
               ))}
            </div>
         </div>
      </main>
   )
}

export default Pizza
