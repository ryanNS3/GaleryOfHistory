import React from "react";

import { Link, useParams } from "react-router-dom";
import { GlobalObras } from "../../context/globalObras";
import { GlobalPerson } from "../../context/globalPerson";

// imports modal
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import sair from "../../assets/sair.svg"
import adicionarComent from "../../assets/adicionarComent.svg"
// importando imgs
import seta from "../../assets/seta.png"


import "../Obra/style.css"
const Obra = () => {

    // formulário
    const [nome,setNome] = React.useState("");
    const [nota,setNota] = React.useState("");
    const [comentario,setComentario] = React.useState("Digite sua opinião aqui");


    const [abrir, setAbrir] = React.useState(false);
    const handleOpen = () => setAbrir(true);
    const handleClose = () => setAbrir(false);
  


    const dados = React.useContext(GlobalObras);
    const persona = React.useContext(GlobalPerson);
    const parametros = useParams()
    console.log(parametros)
    dados.setItem(parametros.id)

    if ((dados.dados != null)) {

        let indice = '';
        dados.dados.map((item) => {
            if (item.nomeObra == dados.item) {
                indice = item;
            }
        })
        return (

            <main className='corpo w-max h-max lg:w-full mt-10 animacaoEsquerda'>
                <section className="grid grid-cols-3 mb-10 justify-between">
                    <Link to={"/"} aria-label="botão-voltar" className="button-home relative rounded-xl w-10 border-orange-300  justify-self-start self-center">
                        <img className=" rotate-180 w-10 " src={seta}  alt="seta"/>
                    </Link>
                    <h1 className='text-5xl pl-1 relative titulo-obra col-span-2'>{dados.item}</h1>

                </section>

                <div className='gap-4 lg:grid lg:grid-cols-2' >

                    <div className='Imagens md:grid'>
                        <div className='ml-4 relative w-68 h-[400px] mt-5 rounded md:w-full md:h-[600px] decorador-obra'>
                            <img id="obra" className="rounded w-3/6" src={indice.linkFoto} alt={indice.nomeObra} />
                        </div>
                    </div>

                    <div className='descricao pt-5 items-center md:m-0 md:pt-10 md:px-5'>

                        <div className='md:flex md:items-center gap-8	'>
                            <div className='w-12 h-12 rounded-full bg-gray-500 relative md:w-16 md:h-16'>
                                <img
                                    className='w-12 h-12 rounded-full justify-self-start absolute top-2 left-2 md:w-16 md:h-16'
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4PGyba3BR8tRfKdfHPoYo-2C6rPO8vWeTCMBo6TTfy02956e'
                                    alt=''
                                />
                            </div>
                            
                            <p className='text-md md:text-2xl'>{indice.fk_nomeArtista}</p>
                            <p className='border-2 border-orange-300 rounded-md p-2  md:text-2xl self-center justify-self-end'>{indice.fk_nomeMovimento}</p>
                            <p className= 'border-2 border-orange-300 rounded-md p-2 text-md md:text-2xl self-center justify-self-end'>{indice.ano}</p>
                        </div>
                        <div className='w-8 h-4 bg-orange-300 relative mt-10 md:w-16 md:h-6'>
                            <h2 className='text-lg md:text-3xl absolute bottom-[.5px]'>Descrição</h2>
                        </div>
                        <p className='text-xs mt-5 w-72 bg-orange-200 md:w-96 lg:w-full md:h-80 md:text-base xl:text-xl p-4 descricao-obra'>{indice.descricao}</p>
                        <button onClick={handleOpen} className="adicionarComentario"><img src={adicionarComent} alt="Adiconar comenário"/> <p>Comentário</p></button>
                        <Modal
                        open={abrir}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className="modal"

                    >
                        <Box className="inner-modal">

                            <article className="titulo-modal">
                                <Typography id="modal-modal-title" variant="h3" component="h2">
                                Adiconar comentário
                                </Typography>
                                <button onClick={handleClose}><img src={sair} alt="botão-sair-modal"/></button>

                            </article>


                            <form className="box-form">
                                <label className="labelForm" htmlFor="nome">Nome</label>
                                <input className="inputForm" type="text" id="nome" value={nome} onChange={(event) => setNome(event.target.value)}  />
                                
                                <label className="labelForm" htmlFor="avaliacao">Avalição</label>
                                <section aria-label="selecione uma das cinco opções" id="avaliacao">
                                    <button className="botao-avaliacao av1">1</button>
                                    <button className="botao-avaliacao av2">2</button>
                                    <button className="botao-avaliacao av3">3</button>
                                    <button className="botao-avaliacao av4">4</button>
                                    <button className="botao-avaliacao av5">5</button>
                                </section>

                                <label htmlFor="comentario"></label>
                                <input className="textForm" type="text" id="comentario" value={comentario} onChange={(event) => setComentario(event.target.value)} />

                            </form>

                        </Box>
                    </Modal>



                    </div>
                </div>

            </main>
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

export default Obra;
