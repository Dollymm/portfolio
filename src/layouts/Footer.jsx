import { Box, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Footer = () => {
  return (
   <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column' ,alignItems:'center',color:'#a0a0b5'}}>
    <Typography sx={{fontSize:'25px',fontWeight:'400'}}>Get In Touch</Typography>
    <Typography sx={{fontSize:'37px', fontWeight:'700',mb:'20px'}}>Contact Me</Typography>
    <Box sx={{width:'300px', height:'70px',background:'none', borderRadius:'12px', boxShadow: "rgba(23,92,230,0.15) 0px 4px 24px",border: "0.1px solid rgb(48,110,232)", borderColor: "rgb(163, 163, 163)"}}>
      <Box sx={{display:'flex', justifyContent:'center'}}>
      <EmailIcon/>
        <Typography>dollymamgai12@gmail.com</Typography>
        
      </Box>
      <Box sx={{display:'flex',justifyContent:'center'}}>
      <CallIcon/>
        <Typography>9058288350</Typography>
      </Box>
   
    </Box>
    <Typography sx={{fontSize:'20px', fontWeight:'600', mt:'20px'}}>Designed By Me 💖</Typography>
   </Box>
  )
}

export default Footer