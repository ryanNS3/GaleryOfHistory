import React from "react";
import ilustracaoErro from "../../assets/erroImg.svg"

const Erro = () =>{
    return(
        <section className="box-error" aria-labelledby="titulo-erro">
            <h1 id="titulo-erro">Ocorreu algum erro com os nossos serviços, retornaremos em breve</h1>
            <img src={ilustracaoErro} alt="ilsutração de erro "/>

        </section>
    )
}


export default Erro;