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
    <div className='bg-dark text-white min-vh-100 py-5'>

      <div className='container text-center'>
        <img src='src\img\ojos.png' alt='eyes' width='200' height='200' />

        <div className='d-flex justify-content-center'>
          <InputSearch handleSearch={sendSearch} />
        </div>
      </div>

      <div className='container mt-5'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {series.map((seriesItem) => (
            <div className='col' key={seriesItem.show.id}>
              <div className='card h-100 bg-dark text-white' style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
                <img
                  src={seriesItem.show.image?.medium || '/placeholder-image.png'}
                  alt={seriesItem.show.name}
                  className='card-img-top'
                />
                <div className='card-body'>
                  <Link
                    className='card-title text-white h5 mb-2'
                    to={`/MovieDetails/${seriesItem.show.id}`}
                  >{seriesItem.show.name}
                  </Link>
                  <p
                    className='card-text '
                    style={{ marginTop: '20px', textAlign: 'justify' }}
                    dangerouslySetInnerHTML={{ __html: seriesItem.show.summary }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
