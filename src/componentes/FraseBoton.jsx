import React from 'react'
import RandomIndex from '../services/RandomIndex'
import frases from '../utils/frases.json';
import bgArray from '../utils/bgArray.json';

const FraseBoton = ({Cambio,proImagen }) => {
       
    const botonMano = () => {
      const bgImg = RandomIndex(bgArray);
        proImagen(bgImg);
        const oracion = RandomIndex(frases);
        Cambio(oracion);

    }

  return (
    <button onClick={botonMano}>probar mi suerte</button>

  )
}

export default FraseBoton