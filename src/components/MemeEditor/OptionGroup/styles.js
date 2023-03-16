import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  button: {
    "&.MuiButton-root": {
      color: "white",
      background: "black",
      border: "none",
      fontFamily: "Impact, Arial",
      cursor: "pointer",
      width: 100,
      "&:hover": {
        background: "black",
      },
    },
  },
  grid: {},
}));
