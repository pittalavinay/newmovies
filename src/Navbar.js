import React from 'react'
import { AppBar,Toolbar } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div>
            <AppBar sx={{backgroundColor:'#0c111b'}}>
                <Toolbar>
               <Link to='/'><HomeIcon/></Link>
     <div className='icon'> <AccountCircleIcon /></div>
                </Toolbar>
            </AppBar>
        </div>
    </div>
  )
}

export default Navbar