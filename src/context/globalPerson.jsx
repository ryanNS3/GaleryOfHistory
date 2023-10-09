import React from "react";
import useAxios from "../customHooks/useAxios";

export const GlobalPerson = React.createContext();

export const personProvider = ({children}) =>{
    const {dados,loading,erro,requesicao} = useAxios()
    const[autores,setAutores] = React.useState([])
    
    React.useEffect(() =>{
        requesicao("https://hungry-coveralls-dog.cyclic.app/artista/todos")
    }, [])
    
    dados ? setAutores[dados] : setAutores[null]

    return(
        <GlobalPerson.Provider  value={{dados,loading,erro}}>
            {children}
        </GlobalPerson.Provider>

    )
}


