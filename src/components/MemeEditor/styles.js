import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  outline: {
    width: 1000,
    height: 650,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: 350,
      height: 500,
      overflow: "auto",
    },
  },
  box: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
