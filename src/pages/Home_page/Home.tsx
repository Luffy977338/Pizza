import React from 'react'
import './Home.css'
import Stocks from '../Stocks_Page/Stocks'
import Pizza from '../Pizza_Page/Pizza'

const Home = () => {
   return (
      <main>
         <Stocks />
         <Pizza />
      </main>
   )
}

export default Home
