import React, { FC, useEffect, useRef } from 'react'
import cl from './Header.module.css'
import delivery from '../../images/delivery.svg'
import curryout from '../../images/curryout.svg'
import show__more from '../../images/show__more.svg'

interface DeliveryTypeProps {
   toggleMenu: () => any;
   isOpen: boolean;
   deliveryType: string;
   toggleDeliveryType: (item: string) => void;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DeliveryType: FC<DeliveryTypeProps> = ({ toggleMenu, isOpen, deliveryType, toggleDeliveryType, setIsOpen }) => {

   const optionsRef = useRef<any>(null)

   const _handleClickAway = (event: any) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
         setIsOpen(false);
      }
   }

   useEffect(() => {
      document.addEventListener('mousedown', _handleClickAway);
      return () => {
         document.removeEventListener('mousedown', _handleClickAway);
      };
   });

   return (
      <button onClick={toggleMenu} className={cl.header__delivery}>
         {isOpen
            ?
            <div>
               <div>
                  <img className={cl.header__delivery_icon} src={deliveryType === 'Доставка' ? delivery : curryout} alt="" />
                  <span>{deliveryType}</span>
                  <img className={cl.header__delivery_icon} src={show__more} alt="" />
               </div>
               <div ref={optionsRef} className={cl.header__delivery_options}>
                  <div onClick={() => toggleDeliveryType('Доставка')}>
                     <img className={cl.header__delivery_icon} src={delivery} alt="" />
                     <span>Доставка</span>
                  </div>
                  <hr />
                  <div onClick={() => toggleDeliveryType('На вынос')}>
                     <img className={cl.header__delivery_icon} src={curryout} alt="" />
                     <span>На вынос</span>
                  </div>
               </div>
            </div>
            :
            <div>
               <img className={cl.header__delivery_icon} src={deliveryType === 'Доставка' ? delivery : curryout} alt="" />
               <span>{deliveryType}</span>
               <img className={cl.header__delivery_icon} src={show__more} alt="" />
            </div>
         }
      </button>
   )
}

export default DeliveryType
