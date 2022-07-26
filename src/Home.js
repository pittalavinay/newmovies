import React,{useState} from 'react'
import './App.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get } from './Cardreducer';
import { set } from './Cardreducer';
import { go } from './Cardreducer';
import Values from './Values';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const Home = () => {
  const[value,setvalue]=useState([])
  const[data,setdata]=useState([])
  const[ints,setint]=useState([])
  const dispatch=useDispatch();
  dispatch(get(data))
  dispatch(set(value))
  dispatch(go(ints))
  useEffect(()=>
{fetch('https://www.omdbapi.com/?s=batman&apikey=c78c8143').then(response=>response.json()).then(value=>setdata(value.Search))
 }
  ,[])
  useEffect(()=>
  {fetch('https://www.omdbapi.com/?s=shows&apikey=c78c8143').then(response=>response.json()).then(value=>setvalue(value.Search))
   }
    ,[])
    useEffect(()=>
    {fetch('https://www.omdbapi.com/?s=episode&apikey=c78c8143').then(response=>response.json()).then(value=>setint(value.Search))
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