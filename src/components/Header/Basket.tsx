import React from 'react'
import information from '../../context/information'
import cl from './Header.module.css'
import BasketItem from './BasketItem'
import EmptyBasket from './EmptyBasket'


interface BasketProps {
   deleteItem: (id: number) => void
}

const Basket: React.FC<BasketProps> = ({ deleteItem }) => {

   const context = React.useContext(information)


   return (
      <div>
         <div className={cl.navigation__basket_wrap}>
            {context.buyList.map((item: any, index: any) => (
               <BasketItem
                  key={index}
                  id={index + 1}
                  deleteItem={deleteItem}
                  name={item.name}
                  price={item.price}
                  size={item.size}
                  type={item.type}
               />
            ))}
         </div>
         <div className={cl.button}>
            <hr />
            <button>
               <span>
                  Оформить
               </span>
            </button>
         </div>
      </div>
   )
}

export default Basket
