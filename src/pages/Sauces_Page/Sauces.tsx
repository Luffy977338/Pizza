import React from 'react'
import { saucesList } from '../../localLists/saucesList'
import PriceBar from '../../components/PriceBar/PriceBar'

const Sauces = () => {

   const typeOptions = 'sauce'

   return (
      <main>
         <h1 className='title'>Соусы</h1>
         <div className="wrap_center">
            <div className="wrap">
               {saucesList.map((item: any, index: number) => (
                  <PriceBar key={index} name={item.name} price={item.price} composition={item.composition} id={item.id} img={item.img} typeOptions={typeOptions} />
               ))}
            </div>
         </div>
      </main>
   )
}

export default Sauces
