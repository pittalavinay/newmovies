import React from 'react'
import { AppBar,Toolbar } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router';
import './App.css'
import { useSelector } from 'react-redux';
const Moviecart = ({data}) => {
    const {imdbID}=useParams();
    const select=useSelector((state)=>state.Cardreducer.movies)
  return (
    <div>
        <div>
            <AppBar sx={{backgroundColor:'#0c111b'}}>
                <Toolbar>
               <Link to='/'><HomeIcon/></Link>
     <div className='icon'> <AccountCircleIcon /></div>
                </Toolbar>
            </AppBar>
      <div className='imb'></div>
    
        </div>
    </div>
  )
}

export default Moviecart