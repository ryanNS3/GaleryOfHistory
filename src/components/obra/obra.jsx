import React from "react";
import { GlobalObras } from "../../context/globalObras";
const Obra = () =>{
    const dados = React.useContext(GlobalObras);
    console.log(dados.item)
    console.log(dados.dados)
    return(
        <div className="animacaoEsquerda">
            <p>obra: {dados.item}</p>
        </div>
    )
}

export default Obra;