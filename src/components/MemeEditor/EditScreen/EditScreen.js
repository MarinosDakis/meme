import { Box } from "@mui/material";
import React from "react";
import TextComponent from "../TextComponent/TextComponent";

import useStyles from "./styles";

export default function EditScreen({ imgURl }) {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box
        component="img"
        sx={{
          height: 1000,
          width: 1000,
          maxHeight: { xs: 250, md: 500 },
          maxWidth: { xs: 300, md: 500 },
          top: 0,
        }}
        src={imgURl}
        id="memeImage"
        className={classes.root}
      />
      <Box
        sx={{
          height: 1000,
          width: 1000,
          maxHeight: { xs: 250, md: 500 },
          maxWidth: { xs: 300, md: 500 },
        }}
        className={classes.root}
      >
        <TextComponent />
      </Box>
    </Box>
  );
}
