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
    tab: {
      fontFamily: "arial,sans-serif",
      textTransform: "none",
      fontWeight: "bold",
      fontSize: "1rem",
      color: '#001628'
    }
  }
});
