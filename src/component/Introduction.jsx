import { Typography, Box, Button, Link } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import styled, {css, keyframes } from 'styled-components';


const bounce=keyframes`
0% {
    transform : translateY(0);
}
100%{
    transform : translateY(-10px);
}
`
const BouncingIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  fontSize:'3rem';
  color:'#87bceb';
  animation: ${bounce} 2s infinite alternate;
`;
// const Arrow=styled(Box)({
//     '& > svg':{
//         fontSize:'3rem',
//         color:'#87bceb',
//         animation:`${bounce} 2s infinite alternate`,
//     }
// })
const Introduction = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mt: "30px",
      }}
    >
      <Typography
        sx={{
          fontSize: "50px",
          fontWeight: "700",
          color: "#a0a0b5",
          "@media (max-width: 780px)": {
            fontSize: "30px",
          },
        }}
      >
        Hi,I'm Dolly Mamgai
      </Typography>
      <Typography
        variant="h5"
        sx={{ fontWeight: "700", color: "#a0a0b5", mt: "20px",  mb:'30px'}}
      >
        FrontEnd Developer
      </Typography>
      <Box
        sx={{
          mt: "20px",
          display: "flex",
          justifyContent: "space-between",
          mb: "40px",
        }}
      >
        <Button
          sx={{
            border: "1px solid rgb(145, 161, 209)",
            backgroundColor: "none",
            borderRadius: "20px",
            color: "rgb(255 255 255 / 72%)",
            fontWeight: "600",
            mr: "10px",
          }}
        >
          Download cv
        </Button>
        <Button
          sx={{
            border: "1px solid rgb(145, 161, 209)",
            background:
              "linear-gradient(to right, rgb(135, 188, 235), rgb(99, 124, 201))",
            borderRadius: "20px",
            color: "rgb(255 255 255 / 72%)",
            fontWeight: "600",
          }}
        >
          Contact Info
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: "10rem",
          gap: "2.5rem",
          alignItems: "center",
          zIndex: 10,
          fontSize: "2rem",
          color: "rgb(182 206 227)",
          "@media (max-width: 780px)": {
            fontSize: "1rem",
          },
        }}
      >
        <a href="">
          <FacebookIcon
            sx={{
              zIndex: 10,
              fontSize: "3rem",
              color: "rgb(182 206 227)",
              "@media (max-width: 780px)": {
                fontSize: "2rem",
              },
            }}
          />
        </a>
        <a href='https://www.linkedin.com/in/dolly-mamgai-2bb831230/'>
          <LinkedInIcon
            sx={{
              zIndex: 10,
              fontSize: "3rem",
              color: "rgb(182 206 227)",
              "@media (max-width: 780px)": {
                fontSize: "2rem",
              },
            }}
          />
        </a>
        <a href="">
          <InstagramIcon
            sx={{
              zIndex: 10,
              fontSize: "3rem",
              color: "rgb(182 206 227)",
              "@media (max-width: 780px)": {
                fontSize: "2rem",
              },
            }}
          />
        </a>
        <a href='https://github.com/Dollymm'>
          <GitHubIcon
            sx={{
              zIndex: 10,
              fontSize: "3rem",
              color: "rgb(182 206 227)",
              "@media (max-width: 780px)": {
                fontSize: "2rem",
              },
            }}
          />
        </a>
      </Box>
      <Box> <BouncingIcon>
      <KeyboardDoubleArrowDownIcon />
      </BouncingIcon>
     
      

        <Typography sx={{fontSize:'30px',fontWeight:'600',color: "#a0a0b5"}}>Scroll To Know More</Typography>
      </Box>
    </Box>
  );
};

export default Introduction;
