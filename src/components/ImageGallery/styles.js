import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  outline: {
    width: 1000,
    height: 700,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: 350,
      height: 400,
    },
  },
  box: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
