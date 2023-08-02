import React, { FC } from 'react'
import cl from './Modal.module.css'

interface ModalProps {
   children: React.ReactNode;
   visible: boolean;
   setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ children, visible, setVisible }) => {

   const visibleClass = [cl.myModal]

   if (visible === true) {
      visibleClass.push(cl.active)
   }

   return (
      <div className={visibleClass.join(' ')} onClick={() => setVisible(false)}>
         <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}

export default Modal
