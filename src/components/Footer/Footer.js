import React from "react";
import { Box, Grid, Link, Typography } from "@material-ui/core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import useStyles from "./styles";

export default function Footer() {
  const classes = useStyles(); // for styling

  function Copyright() {
    return (
      <Box sx={{ marginLeft: 10 }}>
        <Typography variant="body2" fontFamily="Impact, Arial">
          {"Copyright © Marinos Dakis "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    );
  }

  function Icons() {
    return (
      <Box
        display="flex"
        sx={{ justifyContent: { sm: "space-evenly", md: "flex-end" } }}
      >
        <Link href="https://www.linkedin.com/in/marinos-dakis/" target="_blank">
          <LinkedInIcon sx={{ color: "black", marginRight: "5px" }} />
        </Link>
        <Link href="https://github.com/MarinosDakis" target="_blank">
          <GitHubIcon sx={{ color: "black", margin: "0 10px 0 10px" }} />
        </Link>
      </Box>
    );
  }

  return (
    <Box
      className={classes.footer}
      sx={{ textAlign: { xs: "center", md: "left" } }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Copyright />
        </Grid>
        <Grid item xs={12} md={4}>
          <Icons />
        </Grid>
      </Grid>
    </Box>
  );
}
