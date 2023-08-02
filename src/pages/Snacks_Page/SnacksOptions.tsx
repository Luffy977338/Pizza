import React from 'react'
import cl from './style.module.css'

interface SnacksOptionsProps {
   size: any,
   setSize: any,
   type: any,
   setType: any
}

const SnacksOptions: React.FC<SnacksOptionsProps> = ({ setSize, size, type, setType }) => {

   const toggleSize = (size: number) => {
      switch (size) {
         case 1:
            setSize(1)
            break;
      }
   }


   React.useEffect(() => {
      toggleSize(1)
      setType('snack')
   }, [])


   return (
      <div className={cl.options}>
         <div className={cl.options__size}>
            <div>
               <button onClick={() => toggleSize(1)} className={cl.options__size_button_active}>
                  1 порция
               </button>
            </div>
         </div>
      </div>
   )
}

export default SnacksOptions
