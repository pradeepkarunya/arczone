import { createMuiTheme } from "@material-ui/core/styles";

const reactMaterialBlue = "#0B72B9";
const reactMaterialOrange = "#FFBA60";
const reactMaterialWhite = "#FFFFFF";

export default createMuiTheme({
  palette: {
    common: {
      reactMaterialBlue: reactMaterialBlue,
      reactMaterialOrange: reactMaterialOrange,
      reactMaterialWhite: reactMaterialWhite
    },
    primary: {
      main: reactMaterialWhite,
    },
    secondary: {
      main: reactMaterialOrange,
    },
  },
  typography: {
    h3: {
      fontWeight: 200,
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1:{
      fontFamily: "Segoe UI",
    },
    body2:{
      fontFamily: "Raleway",
    },
    tab: {
      fontFamily: "Segoe UI",
      textTransform: "none",
      fontWeight: "500",
      fontSize: "1rem",
      color: '#0B72B9'
    }
  }
});
