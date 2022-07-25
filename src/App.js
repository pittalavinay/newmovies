import React from 'react'
import Home from './Home'
import Moviecart from './Moviecart'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Moviecart/:id' element={<Moviecart/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App