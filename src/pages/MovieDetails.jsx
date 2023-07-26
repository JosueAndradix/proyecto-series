import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MovieDetails = () => {
  const { id } = useParams()
  const [serie, setSerie] = useState(null)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(data => setSerie(data))
      .catch(err => console.error(err))
  }, [id])

  if (!serie) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{serie.name}</h1>
      <img src={serie.image?.medium || '/placeholder-image.png'} alt={serie.name} />
      <p>{serie.summary}</p>
    </div>
  )
}

export default MovieDetails
