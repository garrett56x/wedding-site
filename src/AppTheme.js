import { createMuiTheme } from "@material-ui/core/styles";

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#88AADD",
    },
  },
  typography: {
    fontFamily: [
        "'Raleway'", "sans-serif"
    ].join(','),
  },
});

export default appTheme;
