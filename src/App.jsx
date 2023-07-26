import './App.css'
import Navbar from './components/navbar'
import { BrowserRouter } from 'react-router-dom'
import Routesindex from './routes'

function App () {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routesindex />
      </BrowserRouter>

    </>
  )
}

export default App
