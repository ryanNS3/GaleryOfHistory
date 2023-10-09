import React, { useEffect, useState } from "react"
import NavBar from "./components/navBar/navBar"
import Header from "./components/header/Header"

import { ObrasProvider } from "./context/globalObras"
import { movimentosProvider } from "./context/globalMovi"




function App() {

    return (
      <>
    
        <movimentosProvider>
          <NavBar />
        </movimentosProvider>

      
        <ObrasProvider>
          <Header />
      
        </ObrasProvider>
       
        <personProvider>
        
        </personProvider>

  
      </>
    )
   }
  


export default App
