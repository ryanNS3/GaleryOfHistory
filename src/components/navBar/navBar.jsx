import React from "react";
import "../navBar/style.css"
import logo from "../../assets/logo.svg"

function NavBar(){

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
        
        <ul className="box-lista">
            <li className="box-botton">
                <a href="#" className="link-menu">Romantismo</a>
                <div className="seta"></div>

                <ul className="drop-Menu">
                    <li><a href="/">aaaa</a></li>
                    <li><a href="/">aaaa</a></li>
                    <li><a href="/">aaaa</a></li>
                </ul>

            </li>

            <li className="box-botton">
                <a href="#" className="link-menu">Modernismo</a>
                <div className="seta"></div>
                <ul className="drop-Menu">
                    <li><a href="/">aaaa</a></li>
                    <li><a href="/">aaaa</a></li>
                    <li><a href="/">aaaa</a></li>
                </ul>
            </li>

            <li className="box-botton">
                <a href="#" className="link-menu">Pós impressionismo</a>
                <div className="seta"></div>
                <ul className="drop-Menu">
                    <li><a href="/">aaaa</a></li>
                    <li><a href="/">aaaa</a></li>
                    <li><a href="/">aaaa</a></li>
                </ul>
            </li>

            <li className="box-botton">
                <a href="#" className="link-menu">Arte contemporânea</a>
                <div className="seta"></div>
                <ul className="drop-Menu">
                    <li><a href="/">aaaa</a></li>
                    <li><a href="/">aaaa</a></li>
                    <li><a href="/">aaaa</a></li>
                </ul>
            </li>

            <li className="box-botton">
                <a href="#" className="link-menu">Surrealismo</a>
                <div className="seta"></div>
                <ul className="drop-Menu">
                    <li><a href="/">aaaa</a></li>
                    <li><a href="/">aaaa</a></li>
                    <li><a href="/">aaaa</a></li>
                </ul>
                
            </li>
            
        </ul>
    </nav>

    

    )
   

}


export default NavBar;