import React from 'react'
import { desertList } from '../../localLists/desertList'
import PriceBar from '../../components/PriceBar/PriceBar'

const Deserts = () => {

   const typeOptions = 'desert'

   return (
      <main>
         <h1 className='title' >Десерты</h1>
         <div className='wrap_center'>
            <div className='wrap'>
               {desertList.map((item: any, index: number) => (
                  <PriceBar key={index} composition={item.composition} name={item.name} price={item.price} id={item.id} img={item.img} typeOptions={typeOptions} />
               ))}
            </div>
         </div>
      </main>
   )
}

export default Deserts
