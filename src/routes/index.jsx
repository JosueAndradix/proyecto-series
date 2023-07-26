import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'

const Routesindex = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/MovieDetails/:id' element={<MovieDetails />} />
    </Routes>
  )
}

export default Routesindex
