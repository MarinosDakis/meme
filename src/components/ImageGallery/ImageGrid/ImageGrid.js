import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

import useStyles from "./styles";

export default function ImageGallery({ memeList }) {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <ImageList className={classes.root} sx={{ width: 600, height: 500 }}>
      {memeList.map((meme) => (
        <ImageListItem key={meme.img} sx={{ cursor: "pointer" }}>
          <img
            src={`${meme.img}?w=500`}
            srcSet={`${meme.img}?w=500`}
            alt={meme.title}
            loading="lazy"
            onClick={() => {
              localStorage.setItem("memeURL", meme.img);
              navigate("/edit");
            }}
          />
          <ImageListItemBar
            sx={{ visibility: { xs: "hidden", md: "visible" } }}
            title={meme.title}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${meme.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
