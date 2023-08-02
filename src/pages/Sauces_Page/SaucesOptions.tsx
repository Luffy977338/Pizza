import React from 'react'
import cl from '../../components/UI/PizzaBar/PizzaBar.module.css'


interface SaucesOptionsProps {
   size: any,
   setSize: any,
   type: any,
   setType: any
}

const SaucesOptions: React.FC<SaucesOptionsProps> = ({ size, setSize, type, setType }) => {

   const toggleSize = (size: string) => {
      switch (size) {
         case 'small':
            setSize(25)
            break;
      }
   }


   React.useEffect(() => {
      toggleSize('small')
      setType('sauce')
   }, [])


   return (
      <div className={cl.options}>
         <div className={cl.options__size}>
            <div>
               <button onClick={() => toggleSize('small')} className={cl.options__size_button_active}>
                  25 мл
               </button>
            </div>
         </div>
      </div>
   )
}

export default SaucesOptions
