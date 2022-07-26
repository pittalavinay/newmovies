import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
const Movie = ({data,datas}) => {
 
  return (
    <div>
      
      <div className='container'>
      <div className="ro">
       <Link to={`/Moviecart/${data.imdbID}`}>
             <div>
                     <div class="card" >
                        <img class="card-img-top" src={data.Poster} alt="Cardimage"/>
                           <div class="card-body">
                                  <h6 class="card-title">{data.Title}</h6>
                            </div>
                    </div>
                   
              </div> 
            
        </Link>
        </div>
          </div>
         
   </div>
  )
}

export default Movie