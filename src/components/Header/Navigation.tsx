import React, { useState } from "react";
import cl from "./Header.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import basket from "../../images/basket.svg";
import information from "../../context/information";
import EmptyBasket from "./EmptyBasket";
import Basket from "./Basket";

interface NavigationProps {
   deleteItem: (id: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ deleteItem }) => {
   let path = useNavigate();
   const context = React.useContext(information);
   const location = useLocation();
   const [activeLink, setActiveLink] = useState<string>(location.pathname);
   const [isClicked, setIsClicked] = useState<boolean>(false);
   const basketImgRef = React.useRef<any>(null);
   const basketRef = React.useRef<any>(null);

   const _handleClickAway = (event: any) => {
      if (
         basketRef.current &&
         !basketRef.current.contains(event.target) &&
         !basketImgRef.current.contains(event.target)
      ) {
         setIsClicked(false);
      }
   };

   React.useEffect(() => {
      document.addEventListener("mousedown", _handleClickAway);
      return () => {
         document.removeEventListener("mousedown", _handleClickAway);
      };
   });

   React.useEffect(() => {
      setActiveLink(location.pathname);
   }, [location]);

   return (
      <nav className={cl.navigation}>
         <div onClick={() => path("/home")} className={cl.navigation__logo}>
            Pizza
         </div>
         <div>
            <Link
               className={`${
                  activeLink === "/stocks" ? cl.link__active : cl.link
               }`}
               to='/stocks'
            >
               Акции
            </Link>
            <Link
               className={`${
                  activeLink === "/pizza" ? cl.link__active : cl.link
               }`}
               to='/pizza'
            >
               Пицца
            </Link>
            <Link
               className={`${
                  activeLink === "/snacks" ? cl.link__active : cl.link
               }`}
               to='/snacks'
            >
               Закуски
            </Link>
            <Link
               className={`${
                  activeLink === "/deserts" ? cl.link__active : cl.link
               }`}
               to='/deserts'
            >
               Десерты
            </Link>
            <Link
               className={`${
                  activeLink === "/beverages" ? cl.link__active : cl.link
               }`}
               to='/beverages'
            >
               Напитки
            </Link>
            <Link
               className={`${
                  activeLink === "/sauces" ? cl.link__active : cl.link
               }`}
               to='/sauces'
            >
               Соусы
            </Link>
         </div>
         <div>
            <div
               ref={basketImgRef}
               onClick={
                  isClicked
                     ? () => setIsClicked(false)
                     : () => setIsClicked(true)
               }
               className={cl.navigation__basket}
            >
               <img height={50} width={50} src={basket} alt='' />
            </div>
            {isClicked ? (
               <div>
                  {context.buyList.length > 0 ? (
                     <div
                        ref={basketRef}
                        className={cl.navigation__basket_buyList}
                     >
                        <Basket deleteItem={deleteItem} />
                     </div>
                  ) : (
                     <div
                        ref={basketRef}
                        className={cl.navigation__basket_buyList}
                     >
                        <EmptyBasket />
                     </div>
                  )}
               </div>
            ) : (
               ""
            )}
         </div>
      </nav>
   );
};

export default Navigation;
