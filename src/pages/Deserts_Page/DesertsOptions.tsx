import React from 'react'
import cl from '../../components/UI/PizzaBar/PizzaBar.module.css'

interface DesertsOptionsProps {
   size: any,
   setSize: any,
   type: any,
   setType: any
}

const DesertsOptions: React.FC<DesertsOptionsProps> = ({ setSize, size, type, setType }) => {

   const toggleSize = (size: number) => {
      switch (size) {
         case 1:
            setSize(1)
            break;
      }
   }


   React.useEffect(() => {
      toggleSize(1)
      setType('desert')
   }, [])


   return (
      <div className={cl.options}>
         <div className={cl.options__size}>
            <div>
               <button className={cl.options__size_button_active}>
                  1 шт
               </button>
            </div>
         </div>
      </div>
   )
}

export default DesertsOptions
