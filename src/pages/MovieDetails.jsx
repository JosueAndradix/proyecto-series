import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MovieDetails = () => {
  const { id } = useParams()
  const [serie, setSerie] = useState(null)
  const [episodes, setEpisodes] = useState([])
  const [cast, setCast] = useState([])

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(data => setSerie(data))
      .catch(err => console.error(err))

    fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
      .then(res => res.json())
      .then(data => setEpisodes(data))
      .catch(err => console.error(err))

    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then(res => res.json())
      .then(data => setCast(data))
      .catch(err => console.error(err))
  }, [id])

  if (!serie) {
    return <div>Not found 505  uwu</div>
  }

  return (
    <div className='bg-dark text-white min-vh-100 py-5'>
      <div className='container'>
        <h1 className='mb-4'>{serie.name}</h1>
        <div className='row mb-4'>
          <div className='col-md-4'>
            <img
              src={serie.image?.medium || '/placeholder-image.png'}
              alt={serie.name}
              className='img-fluid rounded'
            />
          </div>
          <div className='col-md-8'>
            <p
              className='card-text '
              style={{ textAlign: 'justify' }}
              dangerouslySetInnerHTML={{ __html: serie.summary }}
            />

          </div>
        </div>

        <div className='mb-4'>
          <h2>Episodios</h2>
          <ul className='list-group'>
            {episodes.map(episode => (
              <li key={episode.id} className='list-group-item'>
                {episode.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Elenco</h2>
          <ul className='list-group'>
            {cast.map(actor => (
              <li key={actor.person.id} className='list-group-item'>
                {actor.person.name} - {actor.character.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
