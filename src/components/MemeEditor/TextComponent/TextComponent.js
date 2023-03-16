import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Draggable from "react-draggable";

export default function TextComponent() {
  const [textData, setTextData] = useState({ memeText: "" });
  const [inputList, setInputList] = useState([]);

  const handleChange = (e) => {
    setTextData({ ...textData, [e.target.name]: e.target.value });
  };

  function createText() {
    setInputList(
      inputList.concat(<DraggableComponent key={inputList.length} />)
    );
    setTextData({ memeText: "" });
  }

  function clearText() {
    setInputList([]);
  }

  function DraggableComponent() {
    return (
      <Draggable>
        <Typography fontFamily="Impact, Arial" variant="h3">
          {textData.memeText}
        </Typography>
      </Draggable>
    );
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-around">
        <TextField
          size="small"
          id="outlined-basic"
          label="Add Text"
          variant="outlined"
          onChange={handleChange}
          name="memeText"
          value={textData.memeText}
        />
        <Button
          size="large"
          variant="outlined"
          disabled={textData.memeText ? false : true}
          onClick={createText}
          sx={{ marginLeft: "5px" }}
        >
          Add
        </Button>
        <Button
          size="large"
          variant="outlined"
          onClick={clearText}
          sx={{ marginLeft: "5px" }}
        >
          Clear
        </Button>
      </Box>
      <>{inputList}</>
    </Box>
  );
}
