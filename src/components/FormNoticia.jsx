import React, { useState } from 'react'

export function FormNoticia ({ fnAgregarNoticia }) {
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [imagen, setImagen] = useState('')

  const handleForm = (e) => {
    e.preventDefault()

    const newNoticia = {
      titulo,
      descripcion,
      imagen
    }

    fnAgregarNoticia(newNoticia)
  }

  return (

    <div>
      <form onSubmit={handleForm}>
        <label htmlFor='titulo'>Titulo</label>
        <input
          type='text'
          id='titulo'
          name='titulo'
          placeholder='Titulo de la noticia'
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
        />
        <label htmlFor='descripcion'>Descripcion</label>
        <input
          type='text'
          id='descripcion'
          name='descripcion'
          placeholder='Descripcion de la noticia'
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        />
        <label htmlFor='imagen'>Imagen</label>
        <input
          type='text'
          id='imagen'
          name='imagen'
          placeholder='Imagen de la noticia'
          onChange={(e) => setImagen(e.target.value)}
          value={imagen}
        />

        <button type='submit'>Agregar</button>
      </form>
    </div>
  )
}
