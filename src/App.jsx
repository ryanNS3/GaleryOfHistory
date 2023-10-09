import React, { useEffect, useState } from "react"
import NavBar from "./components/navBar/navBar"
import Header from "./components/header/Header"
import { MovimentosProvider } from "./context/globalMovi"
import { ObrasProvider } from "./context/globalObras"
import Personalidades from "./components/section-personalidades/Personalidades"





function App() {

    return (
      <>
    
      <MovimentosProvider>
        <NavBar />

      </MovimentosProvider>
      
      
        <ObrasProvider>
          <Header />
      
        </ObrasProvider>
       
        <personProvider>
          <Personalidades/>
        
        </personProvider>

  
      </>
    )
   }
  


export default App
