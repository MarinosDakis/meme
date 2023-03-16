import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    "&.MuiImageList-root": {
      "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
      "scrollbar-width": "none" /* Firefox */,
      width: "auto",
      height: "auto",
      margin: 10,
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
}));
