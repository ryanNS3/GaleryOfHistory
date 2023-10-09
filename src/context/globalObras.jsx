import React, { useEffect } from "react";
import useAxios from "../customHooks/useAxios";



export const GlobalObras = React.createContext();

export const ObrasProvider = ({children}) =>{
    // utlizando a custom hook
    const {dados, loading, erro, requesicao} = useAxios();
    const [obras,setObras] = React.useState([]);
    
useEffect(()=>{
    requesicao('https://hungry-coveralls-dog.cyclic.app/obra/todos')
}, [])

    dados ? setObras[dados] : setObras[null]
    
   return(
    
    <GlobalObras.Provider value={{dados,loading,erro}}>
        {children}
    </GlobalObras.Provider>
   )
    
   
   
}