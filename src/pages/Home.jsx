import { useState, useEffect } from 'react'

const Home = () => {
  const [series, setSeries] = useState([])
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=popular')
      .then(res => res.json())
      .then(data => setSeries(data))
      .catch(error => console.error(error))
  },
  [])

  return (
    <>
      <div className='container'>
        <h1 className='mb-4'>Home</h1>
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
                  <h5 className='card-title'>{seriesItem.show.name}</h5>
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
