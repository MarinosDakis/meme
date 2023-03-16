import { Box, Grid, TextField } from "@mui/material";
import React from "react";

import useStyles from "./styles";

export default function SearchBar({ handleChange }) {
  const classes = useStyles();

  return (
    <Box sx={{ width: 800, height: 80 }}>
      <Grid container spacing={1} className={classes.root}>
        <Grid item>
          <TextField
            inputProps={{ style: { fontSize: 20, fontFamily: "Raleway" } }}
            label="Search"
            name="search"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            className={classes.searchbar}
            InputLabelProps={{ style: { color: "black" } }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
