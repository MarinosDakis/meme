import React, { useState, useEffect } from "react";
import { Paper, Box } from "@mui/material";
import SearchBar from "./SearchBar/SearchBar";
import ImageGrid from "./ImageGrid/ImageGrid";
import { memeList } from "../ImageGallery/ImageGrid/memelist";

import useStyles from "./styles";

export default function ImageGallery() {
  const classes = useStyles();

  const [memeData, setMemeData] = useState(memeList);
  const [filteredMemeData, setFilteredMemeData] = useState(memeList);
  const [searchbarData, setSearchbarData] = useState({ search: "" });

  const handleChange = (e) => {
    setSearchbarData({ ...searchbarData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (searchbarData.search === "") {
      setFilteredMemeData(memeList);
    } else {
      const filteredMemes = memeData.filter((meme) => {
        let memeTitle = meme.title.toLowerCase();
        let searchBarText = searchbarData.search.toLowerCase();
        return memeTitle.includes(searchBarText);
      });
      setFilteredMemeData(filteredMemes);
    }
  }, [searchbarData, memeData]);

  return (
    <Box className={classes.box}>
      <Paper className={classes.outline} variant="outlined" square>
        <SearchBar handleChange={handleChange} />
        <ImageGrid memeList={filteredMemeData} />
      </Paper>
    </Box>
  );
}
