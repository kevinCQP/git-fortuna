

const RandomIndex = (arreglo) => {
 const indice = Math.floor (Math.random()*arreglo.length)
 return arreglo[indice]
}

export default RandomIndex