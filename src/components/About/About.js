import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import useStyles from "./styles";

import aboutMeme from "./about-page-meme.jpg";

export default function About() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Paper elevation={3} className={classes.about}>
        <Box
          className={classes.column}
          justifyContent="center"
          display="flex"
          alignItems="center"
        >
          <Typography align="center" variant="h3" fontFamily="Impact, Arial">
            About
          </Typography>
          <Box
            component="img"
            sx={{
              border: "1px solid black",
              height: { xs: 250, md: 350 },
              width: { xs: 300, md: "auto" },
            }}
            alt="The house from the offer."
            src={aboutMeme}
          />
          <Typography align="center" mt="10px" fontFamily="Impact, Arial">
            Created using HTML, JSS, JavaScript, and React Js.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
