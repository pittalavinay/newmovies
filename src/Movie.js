import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import Moviecart from './Moviecart'
const Movie = ({data,im}) => {
  return (
    <div>
    <Link to={`/Moviecart/${data.imdbID}`}> <div className='row'>
       <div className='col md-12'>
      <div class="card" >
  <img class="card-img-top" src={data.Poster} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">{data.Title}</h4>
  </div>
</div>
       </div>
    </div></Link>
    <Moviecart im={im}/>
   </div>
  )
}

export default Movie