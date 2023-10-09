import React from "react";
import obra from "../../assets/obra.svg"
import "../header/style.css"
import "aos"
import Aos from "aos";

function Header() {
    Aos.init()

    return(
        <header className="box-header "
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1500">
            <section  className="section-obra">
                <div className="box-obra">
                    <img src={obra} alt="obra " />
                    <div className="decoradorObra"></div>
                </div>

            </section>

            <section className="section-titulo">

                <div className="tema-site">
                    <p>Artes</p>
                </div>

                <h1>Mergulhe nas principais <span>obras</span> da história<span>.</span></h1>
                <div className="button-movimentos" aria-label="navegação secundária ">
                    {/* <button className="button-seta"></button> */}
                    <a href="/" className="link-movimentos">Ir a movimentos
                        <span className="decoradorx"></span>
                        <span className="decoradory"></span>
                    
                    
                    </a>
                </div>
            </section>

            
        </header>


























    )
    
}

export default Header;