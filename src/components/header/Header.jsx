import React from "react";
import obra from "../../assets/obra.svg"
import "../header/style.css"
import { Link, animateScroll as scroll } from "react-scroll";

// importando a biblioteca de anumação aos
import "aos"
import Aos from "aos";

// importando a biblioteca de slides
import { Swiper, SwiperSlide } from 'swiper/react';


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
                    <Link className="link-movimentos"
                    activeClass="active"
                    to="box-personalidades"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    
                    
                    >Ir a movimentos
                        <span className="decoradorx"></span>
                        <span className="decoradory"></span>
                    
                    
                    </Link>
                </div>
            </section>

            
        </header>


























    )
    
}

export default Header;