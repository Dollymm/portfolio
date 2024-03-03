import React from 'react'
import { Container,Box, Typography ,Card, Grid} from '@mui/material'
import Frontend from '../constant/Frontend'
import Others from '../constant/Others'

export const Skills = ({skills}) => {
  return (
    <Container ref={skills}
     sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column', color:'#a0a0b5',mt:'30px'}}>
<Box sx={{fontSize:'30px', fontWeight:'600'}}>Skills</Box>
<Box sx={{fontSize:'17px', mb:'20px'}}>Here are some of my skills on which i have been working on for the past 1 year</Box>

<Card sx={{width:'300px', display:'flex',justifyContent:'center', color:'#a0a0b5', background:'none',boxShadow:'rgba(23,92,230,0.15) 0px 4px 24px',border: "rgb(53, 53, 53) 0.1rem solid",borderRadius:'15px',mb:'20px'}}>
<Box >
<Typography sx={{fontSize:'20px', fontWeight:'600', display:'flex',justifyContent:'center'}}>Frontend</Typography>
  <Grid container spacing={2}>
  
   
{
  Frontend.map(data=>(
    
    <Grid item xs={6}>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row', border:'1px solid #91a1d1',borderRadius:'12px',padding:'6px 12px',gap:'6px'}}>
      <img src={data.image} style={{ height: '1.5rem' }}/>
      <Typography> {data.name}</Typography>
    </Box>
    </Grid>
  ))
}
   
  </Grid>
</Box>

        
    </Card>

    <Card sx={{width:'300px',height:'15rem', display:'flex',justifyContent:'center', color:'#a0a0b5', background:'none',boxShadow:'rgba(23,92,230,0.15) 0px 4px 24px',border: "rgb(53, 53, 53) 0.1rem solid",borderRadius:'15px'}}>
<Box >
<Typography sx={{fontSize:'25px', fontWeight:'600', display:'flex',justifyContent:'center'}}>Others</Typography>
  <Grid container spacing={2}>
  
   
{
  Others.map(data=>(
    
    <Grid item xs={6}>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row', border:'1px solid #91a1d1',borderRadius:'12px',padding:'6px 12px',gap:'6px'}}>
      <img src={data.icon} style={{ height: '1.5rem' }}/>
      <Typography> {data.name}</Typography>
    </Box>
    </Grid>
  ))
}
   
  </Grid>
</Box>

        
    </Card>
   
    </Container>
  )
}
