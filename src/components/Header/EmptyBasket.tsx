import React from 'react'
import cl from './Header.module.css'
import emptyBasket from '../../images/emptyBasket.svg'

interface EmptyBasketProps {
}

const EmptyBasket: React.FC<EmptyBasketProps> = ({ }) => {

   return (
      <div className={cl.navigation__basket_emptyBasket}>
         <img width={180} height={180} src={emptyBasket} alt="empty basket" />
         <p>В корзине ничего нет</p>
      </div>
   )
}

export default EmptyBasket
