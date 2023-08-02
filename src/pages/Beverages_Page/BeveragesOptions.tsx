import React from 'react'
import cl from '../../components/UI/PizzaBar/PizzaBar.module.css'

interface beveragesOptionsProps {
   size: any,
   setSize: any,
   type: any,
   setType: any
}

const BeveragesOptions: React.FC<beveragesOptionsProps> = ({ size, setSize, type, setType }) => {

   const buttonStyle = (item: number) => {
      return item === size ? cl.options__size_button_active : cl.options__size_button;
   }

   const toggleSize = (size: string) => {
      switch (size) {
         case 'small':
            setSize(0.5)
            break;
         case 'big':
            setSize(1)
            break;
      }
   }

   React.useEffect(() => {
      toggleSize('small')
      setType('beverage')
   }, [])


   return (
      <div className={cl.options}>
         <div className={cl.options__size}>
            <div>
               <button onClick={() => toggleSize('small')} className={buttonStyle(0.5)}>
                  0.5 л
               </button>
            </div>
            <div>
               <button onClick={() => toggleSize('big')} className={buttonStyle(1)}>
                  1 л
               </button>
            </div>
         </div>
      </div>
   )
}

export default BeveragesOptions
