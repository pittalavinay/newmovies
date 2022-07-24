import React from 'react'
import { useSelector } from 'react-redux'
import Movie from './Movie'
const Values = () => {
  const selector =useSelector((state)=>state.Cardreducer.movies)
  console.log(selector)
  return (
    <div>
     {selector.map(item=><Movie data={item} im={item.imdbID}/>)}
    </div>
  )
}

export default Values