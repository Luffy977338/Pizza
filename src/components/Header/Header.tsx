
import React, { useState, FC, useRef } from 'react'
import cl from './Header.module.css'
import location from '../../images/location.svg'
import show__more from '../../images/show__more.svg'
import vk from '../../images/vk.svg'
import tel from '../../images/tel.svg'
import inst from '../../images/inst.svg'
import { useNavigate } from 'react-router-dom'
import Modal from '../UI/Modal/Modal'
import CityItem from '../UI/CitySelect/CityItem'
import DeliveryType from './DeliveryType'
import { cityList } from '../../localLists/cityList'

const Header = () => {

   const [isLoggin, setIsLoggin] = useState<boolean>(false)
   const [isOpen, setIsOpen] = useState<boolean>(false)
   const [deliveryType, setDeliveryType] = useState<'Доставка' | 'На вынос'>('Доставка')
   const [geolocation, setGeolocation] = useState<string>('Москва')
   const [visiblYCityBar, setVisiblyCityBar] = useState<boolean>(false);

   const toggleLoggin = () => {
      setIsLoggin(!isLoggin)
   }

   const toggleMenu = () => {
      setIsOpen(!isOpen)
   }

   const toggleDeliveryType = (item: string) => {
      switch (item) {
         case 'Доставка':
            setDeliveryType('Доставка');
            setIsOpen(false)
            break;
         case 'На вынос':
            setDeliveryType('На вынос');
            setIsOpen(false)
            break
      }
   }


   return (
      <div className={cl.header}>
         <div className={cl.options}>
            <button onClick={() => setVisiblyCityBar(true)} className={cl.header__city} >
               <img className={cl.header__city_location} src={location} alt="" />
               {geolocation}
               <img className={cl.header__city_showMore} src={show__more} alt="" />
            </button>
            <DeliveryType setIsOpen={setIsOpen} toggleMenu={toggleMenu} isOpen={isOpen} deliveryType={deliveryType} toggleDeliveryType={toggleDeliveryType} />
         </div>
         <div className={cl.header__number} >
            +7 (924) 128-54-92
         </div>
         <div className={cl.header__contacts} >
            <div className={cl.header__contacts_title}>
               Наши контакты
            </div>
            <div>
               <a href='#'><img className={cl.header__contacts_vk} src={vk} alt="" /></a>
               <a href='#'><img className={cl.header__contacts_inst} src={inst} alt="" /></a>
               <a href='#'><img className={cl.header__contacts_tel} src={tel} alt="" /></a>
            </div>
         </div>
         <div onClick={() => toggleLoggin()} className={cl.header__account} >
            {isLoggin ? 'Выйти' : 'Войти'}
         </div>
         <Modal visible={visiblYCityBar} setVisible={setVisiblyCityBar} >
            <div className={cl.header__modal}>
               {cityList.map((city) => (
                  <CityItem key={city.id} onClick={() => {
                     setGeolocation(city.city)
                     setVisiblyCityBar(false)
                  }} name={city.city} />
               ))}
            </div>
         </Modal>
      </div>
   )
}

export default Header
