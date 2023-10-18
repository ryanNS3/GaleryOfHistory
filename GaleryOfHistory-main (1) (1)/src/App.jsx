import React, { useEffect, useState } from "react"
import NavBar from "./components/navBar/navBar"
import Header from "./components/header/Header"
import { MovimentosProvider } from "./context/globalMovi"
import { ObrasProvider } from "./context/globalObras"
import { PersonProvider } from "./context/globalPerson"
import Personalidades from "./components/section-personalidades/Personalidades"
import "./app.css"
import Rota from "./routes/route"






function App() {

    return (
      <>
    
       <Rota />
      </>
    )
   }
  


export default App
