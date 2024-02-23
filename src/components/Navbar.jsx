import React from 'react'
import {AppBar,Typography,Toolbar, Button} from '@mui/material'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'

const Navbar = () => {
  return (
    <div><Box sx={{flexGrow:1}}>
      <AppBar position='static'>
      <Toolbar> 
        <Typography variant="h6" align="left" component="div" sx={{ flexGrow: 1 }}>Student App</Typography>
        <Button><Link to={'/'} style={{color:'white'}}>addstudent</Link></Button>
        <Button><Link to={'/Viewstudent'} style={{color:'white'}}>Viewstudent</Link></Button>

        </Toolbar></AppBar>
        </Box>
        </div>
  )
}

export default Navbar