import React from 'react'
import { stockList } from '../../localLists/stockList'
import PriceBar from '../../components/PriceBar/PriceBar'

const Stocks = () => {

   const typeOptions = 'stock'

   return (
      <main>
         <h1 className='title'>Акции</h1>
         <div className='wrap_center'>
            <div className='wrap'>
               {stockList.map((item: any, index: number) => (
                  <PriceBar key={index} composition={item.composition} name={item.name} id={item.id} img={item.img} typeOptions={typeOptions} />
               ))}
            </div>
         </div>
      </main>
   )
}

export default Stocks
