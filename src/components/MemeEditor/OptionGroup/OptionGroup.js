import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import useStyles from "./styles";

export default function OptionGroup() {
  const classes = useStyles();
  const navigate = useNavigate();

  function handleUpload(e) {
    //TBA
  }

  function handleDownload(e) {
    // TBA
    // save current changes to image
    const newURL = "";

    const image = document.getElementById("memeImage");
    let a = document.createElement("a");
    a.href = image.src;
    a.target = "_blank";
    a.setAttribute("download", "meme.png");
    a.click();
  }

  function handleBack() {
    navigate("/gallery");
  }

  return (
    <Grid
      container
      rowSpacing={1}
      className={`${classes.grid} ${classes.root}`}
    >
      <Grid item xs={4} md={4} justifyContent="center" display="flex">
        <Button
          type="file"
          size="large"
          variant="contained"
          component="label"
          className={classes.button}
        >
          <input hidden type="file" onChange={handleUpload} />
          Upload
        </Button>
      </Grid>
      <Grid item xs={4} md={4} justifyContent="center" display="flex">
        <Button
          size="large"
          variant="contained"
          className={classes.button}
          onClick={handleDownload}
        >
          Download
        </Button>
      </Grid>
      <Grid item xs={4} md={4} justifyContent="center" display="flex">
        <Button
          size="large"
          variant="contained"
          className={classes.button}
          onClick={handleBack}
        >
          Back
        </Button>
      </Grid>
    </Grid>
  );
}
