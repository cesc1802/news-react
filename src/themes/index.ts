import { createTheme } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";

const appTheme = createTheme({
    breakpoints: {

    },
    palette: {
        primary: {
            main: "#0e70b9",
        },
        secondary: {
            main: green[500],
        }
    },
    typography: {
        fontFamily: "",
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontFamily: "",
            fontSize: 28
        },
    },
})

export default appTheme;