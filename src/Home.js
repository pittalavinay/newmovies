import React,{useState} from 'react'
import './App.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get } from './Cardreducer';
import Values from './Values';
import Navbar from './Navbar';
const Home = () => {
  
  const[data,setdata]=useState([])
  const dispatch=useDispatch();
  dispatch(get(data))
  useEffect(()=>
{fetch('https://www.omdbapi.com/?s=harry&apikey=c78c8143').then(response=>response.json()).then(value=>setdata(value.Search))
 }
  ,[])
 
  return (
    <div>
<Values/>
<Navbar/>
    </div>
  )
}

export default Home