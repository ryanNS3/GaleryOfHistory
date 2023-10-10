import React from "react";
import "../section-personalidades/style.css"
import fotoVanGogh from "../../assets/vangogh.png"
import {motion}  from 'framer-motion'

function Personalidades(){

    return(
        <section className="box-personalidades">

            <article className="titulo-perso">
                 <h2>Personalidades</h2>
            </article>

            <motion.article className="carroussel">
                <motion.article className="innerCarroussel">

                    <motion.section className="item">
                        <img  src={fotoVanGogh}/>
                    </motion.section>

                    <motion.section className="item">
                        <img  src={fotoVanGogh}/>
                    </motion.section>

                    <motion.section className="item">
                        <img  src={fotoVanGogh}/>
                    </motion.section>

                    <motion.section className="item">
                        <img  src={fotoVanGogh}/>
                    </motion.section>
                    
                    <motion.section className="item">
                        <img  src={fotoVanGogh}/>
                    </motion.section>


                </motion.article>
            </motion.article>


                
        </section>
      
    )
}


export default Personalidades;