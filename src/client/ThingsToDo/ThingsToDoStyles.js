import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
      maxWidth: "1200px",
      textAlign: "left",
      margin: "20px auto",
      marginTop: "10px",
      padding: "0 40px",
      [theme.breakpoints.down("xs")] : {
        padding: "0 20px",
      },
    },
    filters: {
      textAlign: "left",
      width: "100%",
      padding: "0 10px",
    },
    filterButton: {
      color: "#fff",
      background: "#88AADD",
      margin: "5px",
      opacity: 0.4,
      '&:hover': {
        background: "#88AADD",
        opacity: 0.5,
      }
    },
    filterButtonOn: {
      color: "#fff",
      background: "#88AADD",
      margin: "5px",
      opacity: 1,
     '&:hover': {
        background: "#88AADD",
        opacity: 0.9,
      }
    },
    items: {
      width: "100%",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-around",
    },
    favoriteButtonOn: {
      color: "#ff7f7f",
    },
    errorMessage: {
      textAlign: "center",
    }
  }));

export default useStyles;
