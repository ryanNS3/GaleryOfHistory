import { BrowserRouter,Routes, Route } from "react-router-dom";
import Obra from "../components/obra/obra";
import { ObrasProvider } from "../context/globalObras";
import { MovimentosProvider } from "../context/globalMovi";
import { PersonProvider } from "../context/globalPerson";
import NavBar from "../components/navBar/navBar";
import Header from "../components/header/Header";
import Personalidades from "../components/section-personalidades/Personalidades";
import Erro from "../components/error/error";
import { AnimatePresence } from "framer-motion";


const Rota = () =>{
    return(
    
        <BrowserRouter>
            <Routes>

                <Route path="obra" element={
                    <MovimentosProvider>
                    <ObrasProvider>
                        <Obra />
                    </ObrasProvider>
                </MovimentosProvider>
                
                }/>

            

            <Route path="/" element={
                <>
                  <MovimentosProvider>
                    <ObrasProvider>
                        <NavBar/>
                    </ObrasProvider>
                  </MovimentosProvider>

                  <ObrasProvider>
                    <Header />
                  </ObrasProvider>

                  <PersonProvider>
                    <Personalidades />
                  </PersonProvider>
                
                </>
            }
                />
            <Route path="*" element={<Erro/>}/>

        </Routes>
    </BrowserRouter>
            

        
       

    )
   
}

export default Rota;
