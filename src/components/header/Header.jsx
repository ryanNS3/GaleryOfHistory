import React, { useContext } from "react";
import obra from "../../assets/obra.svg"
import "../header/style.css"
import { Link, animateScroll as scroll } from "react-scroll";

// importando a biblioteca de anumação aos
import "aos"
import Aos from "aos";

// importando a biblioteca de slides
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { GlobalObras } from "../../context/globalObras";
import Loading from "../loading/loading";
import Erro from "../error/error";

function Header() {
    Aos.init()
    const dados = useContext(GlobalObras)
    console.log(dados.dados)

    if (dados.dados != null){
        return(
            <header className="box-header "
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1500">
                 <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    // direction={'vertical'}
                    autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    }}
                    // pagination={{
                    // clickable: true,
                    // }}
                  
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <div className="decoradorObra"></div>
                    {dados.dados.map((item,index) =>{
                        return(
                            <SwiperSlide key={index}>
                                <img src={item.linkFoto} alt={`${item.nomeObra}`} />
                                <span className="nomeObra">{item.nomeObra}</span>
            
                            </SwiperSlide>

                        )

                    })}
                   
                </Swiper>
    
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


else if (dados.loading){
    return(
        <Loading/>

    )
}

else if (dados.erro){
    return(
        <Erro />
    )
}

}

export default Header;