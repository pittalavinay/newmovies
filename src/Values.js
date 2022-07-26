import React from 'react'
import { useSelector } from 'react-redux'
import Movie from './Movie'
import Movies from './Movies'
import Episode from './Episode'
import Slider from 'react-slick'
const Values = () => {
  
  const selector =useSelector((state)=>state.Cardreducer.movies)
  const select =useSelector((state)=>state.Cardreducer.shows)
  const selecter =useSelector((state)=>state.Cardreducer.episode)
  console.log(selector)
  return (
    <div >
      <h4 className='king'>Movies</h4>
    <div className='vinay'>
    {selector.map((item)=><Movie data={item}/>)}
    </div>
    <h4 className='king'>shows</h4>
    <div className='show'>
    { select.map((item)=><Movies data={item}/>)}
    </div>
    <h4 className='king'>Episodes</h4>
    <div className='show'>
    { selecter.map((item)=><Episode data={item}/>)}
    </div>
    </div>
  )
}

export default Values