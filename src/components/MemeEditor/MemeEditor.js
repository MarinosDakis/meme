import React, { useState, useEffect } from "react";
import { Paper, Box } from "@mui/material";

import useStyles from "./styles";
import EditScreen from "./EditScreen/EditScreen";
import OptionGroup from "./OptionGroup/OptionGroup";

export default function MemeEditor() {
  const classes = useStyles();

  const defaultImage = "https://wallpapercave.com/wp/wp7632844.jpg";
  const [selectedImage, setSelectedImage] = useState(defaultImage);

  useEffect(() => {
    if (
      localStorage.getItem("memeURL") !== defaultImage &&
      localStorage.getItem("memeURL") !== null
    ) {
      setSelectedImage(localStorage.getItem("memeURL"));
    }
  }, [selectedImage]);

  return (
    <Box className={classes.box}>
      <Paper className={classes.outline} variant="outlined" square>
        <OptionGroup />
        <EditScreen imgURl={selectedImage} />
      </Paper>
    </Box>
  );
}
