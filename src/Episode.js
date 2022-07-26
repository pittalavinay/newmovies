import React from 'react'
import { Link } from 'react-router-dom'
const Episode = ({data}) => {
  return (
    <div>
          <Link to={`/Episodecart/${data.imdbID}`}>
         <div class="card" >
                        <img class="card-img-top" src={data.Poster} alt="Cardimage"/>
                           <div class="card-body">
                                  <h6 class="card-title">{data.Title}</h6>
                            </div>
                            </div>
                            </Link>
    </div>
  )
}

export default Episode