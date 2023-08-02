import React, { FC } from 'react'
import cl from './CityItem.module.css'


interface CitySelectProps {
   onClick: () => void;
   name: string;
}

const CityItem: FC<CitySelectProps> = ({ onClick, name }) => {
   return (
      <div onClick={onClick} className={cl.cityItem}>
         {name}
      </div>
   )
}

export default CityItem
