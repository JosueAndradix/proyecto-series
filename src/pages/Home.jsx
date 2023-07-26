import { useState, useEffect } from 'react'
import InputSearch from '../components/InputSearch'
import { Link } from 'react-router-dom'

const Home = () => {
  const [series, setSeries] = useState([])
  const sendSearch = (search) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then(res => res.json())
      .then(data => setSeries(data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=popular')
      .then(res => res.json())
      .then(data => setSeries(data))
      .catch(error => console.error(error))
  },
  [])

  return (
    <>
      <InputSearch handleSearch={sendSearch} />
      <div className='container'>
        <h1 className='mb-4'>Series</h1>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {series.map((seriesItem) => (
            <div className='col' key={seriesItem.show.id}>
              <div className='card h-100'>
                <img
                  src={seriesItem.show.image?.medium || '/placeholder-image.png'}
                  alt={seriesItem.show.name}
                  className='card-img-top'
                />
                <div className='card-body'>
                  <Link
                    className='card-title'
                    to={`/MovieDetails/${seriesItem.show.id}`}
                  >{seriesItem.show.name}
                  </Link>
                  <p className='card-text'>{seriesItem.show.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>

  )
}

export default Home
