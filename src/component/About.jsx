import { Container, Typography, Box, Card } from "@mui/material";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SchoolIcon from "@mui/icons-material/School";
import React from "react";

const About = ({ about }) => {
  return (
    <Container
      ref={about}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        background:
          "linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)",
        mt: "20px",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "30px", color: "#a0a0b5" }}>
          About Me
        </Typography>
      </Box>
      <Box>
        <Card
          sx={{
            border: "rgb(53, 53, 53) 0.1rem solid",
            width: "26rem",
            height: "7rem",
            mb: "30px",
            borderRadius: "20px",
            borderColor: "rgb(163, 163, 163)",
            boxShadow: "rgba(23,92,230,0.15) 0px 4px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "none",
            color: "#a0a0b5",
            "@media (max-width: 600px)": {
              width: "19rem",
              height: "5rem",
            },
          }}
        >
          <PermContactCalendarIcon />
          <Typography>Learning</Typography>
          <Typography>1 Year Frontend Development</Typography>
        </Card>
        <Card
          sx={{
            border: "rgb(53, 53, 53) 0.1rem solid",
            borderColor: "rgb(163, 163, 163)",
            boxShadow: "rgba(23,92,230,0.15) 0px 4px 24px",
            width: "26rem",
            height: "7rem",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: "30px",
            background: "none",
            color: "#a0a0b5",
            "@media (max-width: 600px)": {
              width: "19rem",
              height: "5rem",
            },
          }}
        >
          <SchoolIcon />
          <Typography>Education</Typography>
          <Typography>B.Tech in Computer and Engineering</Typography>
        </Card>
      </Box>
      <Box
        sx={{
          textAlign: "justify",
          textJustify: "inter-character",
          lineHeight: "1.5",
          letterSpacing: "0.4em",
          maxWidth: "600px",
          margin: "0 auto",
          color: "#a0a0b5",
        }}
      >
        <Typography>
          I am Dolly Mamgai, a dedicated frontend developer. With a strong
          command of HTML, CSS, JavaScript, and React. I transform designs into
          seamless, interactive web experiences. I'm passionate about optimizing
          user interfaces for speed and responsiveness while maintaining a keen
          eye for design aesthetics.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
