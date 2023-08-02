import React, { createContext } from 'react'

interface Iinformation {
   buyList: any
}

const information = createContext<any>(null)


export default information