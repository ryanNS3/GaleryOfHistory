import React, { useContext, useRef, useState } from "react";
import "../navBar/style.css"
import logo from "../../assets/logo.svg"
import { GlobalMovimentos } from "../../context/globalMovi";


import { Link, useNavigate } from "react-router-dom";
import { GlobalObras } from "../../context/globalObras";

function NavBar(){
    const dados = useContext(GlobalMovimentos);
    const obras = useContext(GlobalObras)
    const contentLink = useRef()
    const navigate = useNavigate()

    function handleClick(event){
        console.log(event.target.innerText)
        console.log(obras.item)
        obras.setItem(event.target.innerText)
      
        
    }


    

    
if (dados.dados !== null){
    console.log(dados.dados)


    return(
    <nav>

        <div className="logotipo">
            <div className="imagem">
                <img src={logo} alt="" />

            </div>
            <div>
                <span>Gallery of history</span>
                
            </div>
        </div>
        
        <ul className="box-lista" arai-aria-label="navegação primária">
            {dados.dados.map((item,index) =>{
                return(
                    <li className="box-botton" key={item.nomeMovimento}>
                        <Link to={"/"} className="link-menu" key={index}>{item.nomeMovimento}</Link>
                        <div className="seta"></div>

                        <ul className="drop-Menu">
                            {item.obras.map((obras) =>{
                                return(
                                    <li >
                                        <Link onClick={handleClick} to={"obra"} key={item.nomeObra}  >{obras.nomeObra}</Link>
                                    </li>

                                )
                            })}
                        </ul>

                    </li>

                )
            })}

        </ul>
    </nav>

    

    )
}
   

}


export default NavBar;