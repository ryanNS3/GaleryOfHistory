import React, { useContext } from "react";
import "../navBar/style.css"
import logo from "../../assets/logo.svg"
import { GlobalMovimentos } from "../../context/globalMovi";
function NavBar(){

 const dados = useContext(GlobalMovimentos);

    console.log(dados.dados)

 if (dados.dados !== null){
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
            {dados.dados.map((item) =>{
                return(
                    <li className="box-botton" key={item.nomeMovimento}>
                        <a href="#" className="link-menu">{item.nomeMovimento}</a>
                        <div className="seta"></div>

                        <ul className="drop-Menu">
                            {item.obras.map((obras) =>{
                                return(
                                    <li><a href="#">{obras.nomeObra}</a></li>

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