import React, { useState } from 'react'

const InputSearch = ({ handleSearch }) => {
  const [search, setSearch] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSearch(search)
  }

  return (
    <form className='d-flex' role='search' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Búsqueda'
        className='form-control me-2'
        aria-label='Buscar'
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
      <button className='btn btn-outline-primary' type='submit'>
        Buscar
      </button>
    </form>
  )
}

export default InputSearch
