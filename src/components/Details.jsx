import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CharacterDetails } from '../context/CharacterDetails'

export function Details() {
  const {character} = useContext(CharacterDetails)
  const {nombre} = useParams() 

  return (
    <section className='w-full h-screen text-white flex justify-center items-center'>
        <div className='w-[500px] text-center flex flex-col bg-green-900 p-5 rounded-xl max-[550px]:w-[90%]'>
          <h1 className='font-bold text-2xl'>{nombre}</h1>
          <p>Estatus: {character.status}</p>
          <p>Especie: {character.species}</p>
          <p className='mb-5'>Genero: {character.gender}</p>
          <img className='self-center' src={character.image} />
        </div>
    </section>
  )
}
