import React from 'react'
import Home from './Home'
import Moviecart from './Moviecart'
import Showscart from './Showscart'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Episodecart from './Episodecart'
const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Moviecart/:id' element={<Moviecart/>}/>
            <Route path='/Showscart/:ids' element={<Showscart/>}/>
            <Route path='/Episodecart/:ida' element={<Episodecart/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App