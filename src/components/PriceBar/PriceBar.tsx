import React from 'react'
import { IPizza } from '../../types/types'
import cl from './PriceBar.module.css'
import PizzaOptions from '../UI/PizzaBar/PizzaOptions'
import information from '../../context/information'
import SnacksOptions from '../../pages/Snacks_Page/SnacksOptions'
import BeveragesOptions from '../../pages/Beverages_Page/BeveragesOptions'
import DesertsOptions from '../../pages/Deserts_Page/DesertsOptions'
import SaucesOptions from '../../pages/Sauces_Page/SaucesOptions'

const PriceBar: React.FC<IPizza> = ({ id, name, price, composition, img, typeOptions }) => {

   const context = React.useContext(information);
   const [isClicked, setIsClicked] = React.useState<boolean>(false);
   const [size, setSize] = React.useState<number>(0);
   const [type, setType] = React.useState<string>('');
   const [addedObject, setAddedObject] = React.useState<any>({ size, type, name, price, id })

   React.useEffect(() => {
      setAddedObject((prevPosts: object) => ({
         ...prevPosts,
         size: size,
         type: type,
      }));
   }, [size, type]);

   const addNewPost = () => {
      context.filterList(addedObject)
   }

   const switchType = (barType = typeOptions) => {
      switch (barType) {
         case 'pizza':
            return <PizzaOptions size={size} setSize={setSize} type={type} setType={setType} />
         case 'snack':
            return <SnacksOptions size={size} setSize={setSize} type={type} setType={setType} />
         case 'stock':
            return null
         case 'desert':
            return <DesertsOptions size={size} setSize={setSize} type={type} setType={setType} />
         case 'beverage':
            return <BeveragesOptions size={size} setSize={setSize} type={type} setType={setType} />
         case 'sauce':
            return <SaucesOptions size={size} setSize={setSize} type={type} setType={setType} />
      }
   }

   return (
      <div>
         {isClicked
            ?
            <div className={cl.priceBar}>
               <div onClick={() => setIsClicked(false)} className={cl.priceBar__img}>
                  <img src={img} alt="" />
               </div>
               <div className={cl.priceBar__wrap_active}>
                  <div className={cl.priceBar__info_active}>
                     <div className={cl.priceBar__info_name}>
                        {name}
                     </div>
                     <div className={cl.priceBar__info_active_composition}>
                        {composition}
                     </div>
                     {
                        switchType()
                     }
                  </div>
                  <div className={cl.priceBar__add}>
                     <div className={cl.priceBar__add_button}>
                        <button onClick={addNewPost} style={{ width: 250, background: 'red', color: '#fff' }} >Добавить</button>
                     </div>
                  </div>
               </div>
            </div>
            :
            <div className={cl.priceBar}>
               <div onClick={() => setIsClicked(false)} className={cl.priceBar__img}>
                  <img src={img} alt="" />
               </div>
               <div className={cl.priceBar__wrap_default}>
                  <div className={cl.priceBar__info}>
                     <div className={cl.priceBar__info_name}>
                        {name}
                     </div>
                     <div className={cl.priceBar__info_composition}>
                        {composition}
                     </div>
                  </div>
                  {
                     typeOptions === 'stock'
                        ?
                        <div style={{ width: '100%' }} className={cl.priceBar__add_button}>
                           <button style={{ width: '100%' }}>Воспользоваться</button>
                        </div>
                        :
                        <div className={cl.priceBar__add}>
                           <div className={cl.priceBar__add_button}>
                              <button onClick={() => setIsClicked(true)} >Выбрать</button>
                           </div>
                           <div className={cl.priceBar__add_price}>
                              {typeOptions === 'pizza' ? 'от' : ''} {price} ₽
                           </div>
                        </div>
                  }
               </div>
            </div>
         }
      </div>
   )
}

export default PriceBar
