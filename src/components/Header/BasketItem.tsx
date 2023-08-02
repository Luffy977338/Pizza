import React from 'react'
import cl from './Header.module.css'
import information from '../../context/information'
import deleteItemSvg from '../../images/deleteItem.svg'

interface BasketItemProps {
   name: string,
   price: number,
   size: number,
   type: string,
   id: number,
   deleteItem: (id: number) => void
}

const BasketItem: React.FC<BasketItemProps> = ({ name, price, size, type, id, deleteItem }) => {

   const [count, setCount] = React.useState<number>(1)
   const context = React.useContext(information)

   const countIncrement = () => {
      if (count > 1) {
         setCount(count - 1)
      } else {
         deleteItem(id)
      }
   }


   const countDecrement = () => {
      if (count < 99) {
         setCount(count + 1)
      }
   }



   const checkType = () => {
      switch (type) {
         case 'Классическое':
            return `${type}, ${size} см`
         case 'Тонкое':
            return `${type}, ${size} см`
         case 'beverage':
            return `${size} л`
         case 'snack':
            return `${size} порция`
         case 'desert':
            return `${size} шт`
         case 'sauce':
            return `${size} мл`
      }
   }

   const deleteLastItemIconRender = () => {
      if (count === 1) {
         return <img width={30} height={30} src={deleteItemSvg} alt="" />
      } else {
         return <div className={cl.counter__increment} ></div>
      }
   }

   let totalPrice = price * count

   return (
      <div className={cl.basket}>
         <div className={cl.info}>
            <div className={cl.basket__name} >
               {name}
            </div>
            <div className={cl.basket__description} >
               {checkType()}
            </div>
         </div>
         <div className={cl.counter}>
            <button onClick={countIncrement} className={cl.counter__button}>
               {deleteLastItemIconRender()}
            </button>
            <div className={cl.counter__count}>
               {count}
            </div>
            <button onClick={countDecrement} className={cl.counter__button}>
               <div className={cl.counter__decrement} ></div>
            </button>
         </div>
         <div className={cl.basket__price} >
            {totalPrice} ₽
         </div>
      </div>
   )
}

export default BasketItem
