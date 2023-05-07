import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import useSettings from '../../hooks/useSettings'


function GeneralApp() {

  const {onToggleMode}= useSettings();
  return (
    
    <Box sx={{ height:'100%' ,marginLeft:'2rem', marginRight:'2rem'}} >

    <Typography variant='h4'>
      DashBoard
    </Typography>

    </Box>
    
  )
}

export default GeneralApp