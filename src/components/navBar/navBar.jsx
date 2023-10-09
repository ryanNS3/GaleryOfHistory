import React, { useContext } from "react";
import "../navBar/style.css"
import logo from "../../assets/logo.svg"
import { GlobalMovimentos } from "../../context/globalMovi";
function NavBar(){

    const dados = useContext(GlobalMovimentos);



 if (dados.dados !== null){
    return(
    <nav>

        <div className="logotipo">
            <div className="imagem">
                <img src={logo} alt="" />

            </div>
            <div>
                <span>Gallery of hisitory</span>
                
            </div>
        </div>
        
        <ul className="box-lista" arai-aria-label="navegação primária">
            {dados.dados.map((item) =>{
                return(
                    <li className="box-botton" key={item.nomeMovimento}>
                        <a href="#" className="link-menu">{item.nomeMovimento}</a>
                        <div className="seta"></div>

                        <ul className="drop-Menu">
                            <li><a href="/">aaaa</a></li>
                            <li><a href="/">aaaa</a></li>
                            <li><a href="/">aaaa</a></li>
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