import React from "react";
import useAxios from "../customHooks/useAxios";

export const GlobalMovimentos = React.createContext();

export const movimentosProvider = (children) => {
    const [movimentos,setMovimentos] = React.useState()
    const [dados,loading,erro,requesicao] = useAxios()

    React.useEffect(() =>{
        requesicao("https://hungry-coveralls-dog.cyclic.app/movimento/todos")
    }, [])

    dados ? setMovimentos(dados) : setMovimentos(null)

    return(
        <GlobalMovimentos.Provider value={{movimentos,loading,erro}}>
            {children}
        </GlobalMovimentos.Provider>
    )
}

