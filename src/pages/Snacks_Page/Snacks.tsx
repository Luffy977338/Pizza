import React from 'react'
import { snackList } from '../../localLists/snackList'
import PriceBar from '../../components/PriceBar/PriceBar'

const Snacks = () => {

   const typeOptions = 'snack'

   return (
      <main>
         <h1 className='title'>Закуски</h1>
         <div className='wrap_center'>
            <div className='wrap'>
               {snackList.map((item: any, index: number) => (
                  <PriceBar key={index} typeOptions={typeOptions} id={item.id} name={item.name} composition={item.composition} img={item.img} price={item.price} />
               ))}
            </div>
         </div>
      </main>
   )
}

export default Snacks
