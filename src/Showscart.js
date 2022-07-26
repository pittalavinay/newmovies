import React from 'react'
import { AppBar,Toolbar } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router';
import './App.css'
import { useSelector } from 'react-redux';
const Showscart = () => {
    const {ids}=useParams();
    const select=useSelector((state)=>state.Cardreducer.shows)
    const vinay=select.find(item=>item.imdbID===ids)
   return (
    <div>
        <div>
            <AppBar sx={{backgroundColor:'#0c111b'}}>
                <Toolbar>
               <Link to='/'><HomeIcon/></Link>
     <div className='icon'> <AccountCircleIcon /></div>
                </Toolbar>
            </AppBar>
      <div className='imb'>{<div class="ca">
  <img class="car" src={vinay.Poster} alt="Card image"/>
  <div class="card-body">
    <h4 class="cartitle">{vinay.Title}</h4>
    <p class="cart">{vinay.Type}</p>
    <p class="cart">{vinay.Year}</p>
    
  </div>
</div>}</div>
        </div>
    </div>
  )
}

export default Showscart