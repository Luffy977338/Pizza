import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import './main.css'
import './reset.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { routes } from './router/routes';
import Navigation from './components/Header/Navigation';
import information from './context/information';
import { useSelector } from 'react-redux';

const App: React.FC = () => {

   let pathname = useLocation();
   useEffect(() => {
      window.scrollTo({ top: 0 });
   }, [pathname]);

   let homePage = useNavigate()
   useEffect(() => {
      homePage('/home')
   }, [])

   const [buyList, setBuyList] = React.useState<any>([]);

   const filterList = (newAdd: any) => {
      let list = [...buyList, newAdd]
      let filterList = list.filter((el: any, id: any) => list.indexOf(el) === id)
      setBuyList(filterList)
   };

   const deleteItem = (id: number) => {
      setBuyList(buyList.filter((el: any, index: number) =>
         (index + 1) !== id
      ))
   }



   return (
      <information.Provider value={{ buyList, filterList }}>
         <div className='wrapp'>
            <Header />
            <Navigation deleteItem={deleteItem} />
            <Routes>
               {routes.map((route, index) => (
                  <Route key={index} path={route.path} element={<route.component />} />
               ))}
            </Routes>
            <Footer />
         </div>
      </information.Provider>
   )
}

export default App;
