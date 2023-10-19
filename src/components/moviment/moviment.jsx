import React, { useContext, useState, useEffect } from "react";
import './style.css';
import seta from "../../assets/seta.png"
import informacao from "../../assets/informacoes.png"

import "../header/style.css"
import { Link, animateScroll as scroll } from "react-scroll";

// importando a biblioteca de anumação aos
import "aos"
import Aos from "aos";

// importando a biblioteca de slides
import { GlobalMovimentos } from "../../context/globalMovi";
import Loading from "../loading/loading";
import Erro from "../error/error";


export default function Moviment() {
    Aos.init()
    const dados = useContext(GlobalMovimentos);

    if (dados.dados != null) {
        const [indice, setIndice] = useState(0);
        const [quadrado, setQuadrado] = useState([]);
        function pass(op) {
            if (op === '+') {
                if ((indice < (carrosel.length - 1)) && (indice < 5)) {
                    setIndice(indice + 1);
                }
                else {
                    setIndice(0)
                }
            } else {
                if (indice !== 0) {
                    setIndice(indice - 1)
                }
                else {
                    setIndice(4)
                }
            }
        }

        useEffect(() => {
            let cont = 0;
            var animacao = [];
            let div = '';
            while (cont !== 5) {
                if (cont === indice) {
                    div = 'w-6 h-4 bg-orange-200 border border-orange-300 rounded-md md:w-12 md:h-8';
                    animacao.push(div);
                }
                else {
                    div = 'w-4 h-4 border border-orange-300 rounded-md md:w-12 md:h-8 md:w-8'
                    animacao.push(div)
                }
                cont++;
            }
            setQuadrado(animacao);
        }, [indice])
        
        useEffect(() => {
            const interval = setInterval(() => {
                pass('+');
            }, 5000);

            return () => clearInterval(interval);
        }, [indice]);
        return (
            <article className='body' class='w-max h-max m-auto my-10 lg:w-full lg:p-10'>
                <div class='gap-0.8 lg:grid lg:grid-cols-2'>


                    <div className='Imagens' class='md:grid'>
                        <h3 className='text-4xl font-sans pl-1 titulo-movimento'>{dados.dados[indice].nomeMovimento}</h3>
                        <div class='ml-2 relative w-72 h-[400px] mt-5 rounded md:w-full md:h-[600px] inner-imgs'>
                            <img
                                className='w-full h-full absolute  bottom-2 rounded img-movimento'
                                src={dados.dados[indice].obras[0].linkFoto}
                                alt=''
                            />
                            <img
                                className='w-6 h-6 absolute right-4 bottom-4 hover:border-2 hover:border-orange-200 hover:rounded-full' onClick={() => alert('Esse botão irá se auto destruir.')}
                                src={informacao}
                                alt=''
                            />
                        </div>
                    </div>

                    <div className='Informacoes' class='mt-10 md:mt-6 '>
                        <div class='hidden gap-1 justify-end md:flex' id='blocos'>
                            {quadrado.map((item, index) => <div key={index} class={item}></div>)}
                        </div>
                        <div className='body-informação' class='lg:grid'>
                            <div className='flex gap-4 items-center md:mt-6  md:justify-between md:gap-0 md:p-5'>
                                <div className='w-12 h-12 rounded-full bg-gray-500 relative md:w-16 md:h-16'>
                                    <img
                                        className='w-12 h-12 rounded-full absolute top-2 left-2 md:w-16 md:h-16 '
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4PGyba3BR8tRfKdfHPoYo-2C6rPO8vWeTCMBo6TTfy02956e'
                                        alt=''
                                    />
                                </div>
                                <p className='text-md md:text-2xl '>Esse é mais 3 artista.</p>
                                <p className='border-2 border-orange-300 p-2 text-md md:text-2xl rounded-lg data'>{dados.dados[indice].dataTermino}</p>
                            </div>
                            <div className='descricao pt-5 items-center md:m-0  md:pt-10 md:px-5' >
                                <div className='w-8 h-4 bg-orange-300 relative md:w-16 md:h-6'>
                                    <h3 className='text-lg md:text-3xl absolute bottom-[.5px]'>Descrição</h3>
                                </div>
                                <p className='text-xs mt-5 w-72 bg-orange-200 md:w-96 lg:w-full md:h-80 md:text-base xl:text-xl pl-6 pr-6 pt-3 pb-3'>{dados.dados[indice].descricaoMovimento}</p>
                            </div>
                            <div className='btns flex justify-between'>
                                <div className='w-12 h-5 my-6 border-2 ml-2 border-orange-300 rounded hover:bg-orange-100 md:w-20 md:h-12'>
                                    <button className="w-12 h-5 ml-1 mt-1 bg-white border-2 border-orange-300 rounded align-middle hover:bg-orange-100 md:w-20 md:h-12" onClick={() => pass('-')} type="button">
                                        <img
                                            className='w-3 m-auto rotate-180'
                                            src={seta}
                                            alt=''
                                        />
                                    </button>
                                </div>
                                <div className='w-12 h-5 my-6 border-2 mr-3 border-orange-300 rounded  hover:bg-orange-100 md:w-20 md:h-12'>
                                    <button className="w-12 h-5 ml-1 mt-1 bg-white border-2 border-orange-300 rounded align-middle hover:bg-orange-100 md:w-20 md:h-12" onClick={() => pass('+')} type="button">
                                        <img
                                            className='w-3 m-auto'
                                            src={seta}
                                            alt=''
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

        )

    }


    else if (dados.loading) {
        return (
            <Loading />

        )
    }

    else if (dados.erro) {
        return (
            <Erro />
        )
    }

}