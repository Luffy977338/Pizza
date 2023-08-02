import React from 'react'
import { beveragesList } from '../../localLists/beveragesList'
import PriceBar from '../../components/PriceBar/PriceBar'

const Beverages = () => {

   const typeOptions = 'beverage'

   return (
      <main>
         <h1 className='title'>Напитки</h1>
         <div className='wrap_center'>
            <div className='wrap'>
               {beveragesList.map((item: any, index: number) => (
                  <PriceBar key={index} name={item.name} img={item.img} price={item.price} id={item.id} composition={item.composition} typeOptions={typeOptions} />
               ))}
            </div>
         </div>
      </main>
   )
}

export default Beverages
