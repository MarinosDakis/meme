import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  searchbar: {
    "& .MuiFormLabel-root": {
      fontSize: 20,
      fontFamily: "Impact, Arial",
    },
    "& .MuiInput-underline:after": {
      border: "black",
    },
    "& .MuiInputBase-root": {
      marginBottom: 10,
    },
  },
}));
