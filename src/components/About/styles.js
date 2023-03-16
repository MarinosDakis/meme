import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  box: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  about: {
    width: 600,
    height: 500,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: 350,
      height: 400,
    },
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
}));
