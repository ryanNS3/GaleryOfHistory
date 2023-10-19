import React, { useEffect, useState } from "react";
import { GlobalObras } from "../../context/globalObras";
import { GlobalPerson } from "../../context/globalPerson";
import "../Obra/style.css"

const Obra = () => {
    const dados = React.useContext(GlobalObras);
    const persona = React.useContext(GlobalPerson);
    console.log(persona.dados);


    if ((dados.dados != null)) {

        let indice = '';
        dados.dados.map((item) => {
            if (item.nomeObra == dados.item) {
                indice = item;
            }
        })
        console.log(indice)
        return (

            <div className='corpo' class='w-max h-max m-auto my-10 lg:w-full lg:p-10'>
                <p class='text-4xl font-sans border-l border-orange-500 pl-1'>{dados.item}</p>
                <div class='gap-4 lg:grid lg:grid-cols-2' >
                    <div className='Imagens' class='md:grid'>
                        <div class='ml-4 relative w-72 h-[400px] mt-5 border-2 border-blue-900 rounded md:w-full md:h-[600px] md:border-4'>
                            <img id="obra" class='' src={indice.linkFoto} alt={indice.nomeObra} />
                        </div>
                    </div>
                    <div className='descricao' class='pt-5 items-center md:m-0 md:pt-10 md:px-5'>
                        <div class='md:flex md:items-center	md:justify-between'>
                            <div class='w-12 h-12 rounded-full bg-gray-500 relative md:w-16 md:h-16'>
                                <img
                                    class='w-12 h-12 rounded-full absolute top-2 left-2 md:w-16 md:h-16'
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4PGyba3BR8tRfKdfHPoYo-2C6rPO8vWeTCMBo6TTfy02956e'
                                    alt=''
                                />
                            </div>
                            <p class='text-md md:text-2xl'>{indice.fk_nomeArtista}</p>
                            <p class='border-2 border-orange-300 p-2 text-md md:text-2xl'>{indice.ano}</p>
                        </div>
                        <div class='w-8 h-4 bg-orange-300 relative mt-10 md:w-16 md:h-6'>
                            <h2 class='text-lg md:text-3xl absolute bottom-[.5px]'>Descrição</h2>
                        </div>
                        <p class='text-xs mt-5 w-72 bg-orange-200 md:w-96 lg:w-full md:h-80 md:text-base xl:text-xl'>{indice.descricao}</p>
                    </div>
                </div>
            </div>
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

    else if (dados === undefined){
        return(
            <div>
                <p>AAAAA</p>
            </div>

        )
    }
}

export default Obra;