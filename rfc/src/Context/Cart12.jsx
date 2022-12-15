import { createContext, useState } from "react";

export const CartContext=createContext()


export default function  CartContextProvider({children}){

   const [data,setData]= useState([])

   const [amount,setAmount]=useState(0)
   const [total,setTotal]=useState(data.length)




    return (
        <CartContext.Provider value={{setData,data,amount,setAmount,total}}>
            {children}
        </CartContext.Provider>
    )
}