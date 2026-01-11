import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Navsec from './Component/Navsec'
import Signup from './Component/Signup'
import Login from './Component/Login'
import WeatherCasting from './Pages/WeatherCasting'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Component/Signup' element={<Signup />} />
      <Route path='/Component/Login' element={<Login />} />
      <Route path='/Pages/WeatherCasting' element={<WeatherCasting />} />
    </Routes>
      

    </>
  )
}

export default App
