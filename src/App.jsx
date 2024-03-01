
import './App.css'
import RandomFrases from './componentes/randomfrases';
import frases from './utils/frases.json';
import RandomIndex from './services/RandomIndex';
import { useState } from 'react';
import FraseBoton from './componentes/FraseBoton';
import bgArray from './utils/bgArray.json';
function App() {
  
     const frase = RandomIndex(frases)
    
     const [Cuate, setCuate] = useState(frase)
     const  bgArreglado =  RandomIndex(bgArray)
    
     const [bgApp, setbgApp] = useState(bgArreglado);
     const bgEstilos = {backgroundImage: `url('../public/assets/fondo${bgApp}.jpg')`}


  return (
    <div className='app' style={bgEstilos}>
       <div className='container'>
        <h1>Galletas de la fortuna</h1>
        <FraseBoton
        Cambio = {setCuate}
         proImagen= {setbgApp}/>
        <RandomFrases
        Nombre={Cuate}/>
      
    </div>
    </div>
  )
}

export default App
