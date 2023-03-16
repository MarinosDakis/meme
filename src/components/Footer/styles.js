import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  footer: {
    width: "100%",
    height: 15,
    marginTop: 10,
    paddingTop: "1rem",
    paddingBottom: "1rem",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    overflow: "hidden",
  },
}));
