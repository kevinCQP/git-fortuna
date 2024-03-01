import React from 'react'

const RandomFrases = ({Nombre}) => {
  const {phrase,  author} = Nombre;
  return (
    <div  className='fraseAutor'>
        <p>{phrase}</p>
        <p>{author}</p>
        </div>
  )
}

export default RandomFrases