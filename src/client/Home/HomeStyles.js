import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  sectionWrapper: {
    width: "100%"
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "45px"
    }
  },
  howWeMet: {
    display: "flex",
    textAlign: "left",
    padding: "40px",
    maxWidth: "1200px",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
      padding: "20px 0"
    }
  },
  hwmPhoto: {
    width: "600px",
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  hwmContent: {
    padding: "0 20px"
  },
  proposal: {
    display: "flex",
    textAlign: "right",
    padding: "40px",
    maxWidth: "1200px",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
      padding: 0,
      paddingTop: "20px"
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0
    }
  },
  proposalPhoto: {
    width: "400px",
    marginTop: "-140px",
    marginLeft: "auto",
    alignSelf: "flex-start",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto"
    },
    [theme.breakpoints.down("sm")]: {
      order: 0
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  proposalContent: {
    padding: "0 20px",
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      width: "unset",
      padding: "20px",
      order: 1
    }
  }
}));

export default useStyles;
