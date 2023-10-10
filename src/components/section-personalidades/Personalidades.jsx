import React from "react";
import "../section-personalidades/style.css"
import fotoVanGogh from "../../assets/vangogh.png"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';

// import {  Navigation } from "swiper/modules";



function Personalidades(){

    return(

        <section className="box-personalidades">
            <article className="titulo-perso">
                 <h2>Personalidades</h2>
            </article>

            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={false}

            //  pagination={{
            //   clickable: true,
            //  }}
            modules={[]}
            className="mySwiper"
            >
                
                <SwiperSlide>
                <article className="artistas">
                    <div className="box-img-perso">
                        <img src={fotoVanGogh} alt="fotovangogh" />
                        <span className="decorador-perso"></span>
                        <p>Van gogh</p>
                    </div>

                </article>

                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>

            </Swiper>
    </section>
    )
}


export default Personalidades;