import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import Routes from "./routes";
import { lightBlue, grey } from "@material-ui/core/colors";
import SpeedDailBtn from "./components/Button/SpeedDailBtn";

const theme = createMuiTheme({
    palatte: {
        secondary: {
            main: lightBlue[900]
        },
        primary: {
            main: grey[50]
        }
    },
    typography: {
        fontFamily: ['"Lato"', "sans-serif"].join(","),
        useNextVariants: true,
    }
});

const App = () => {
    return (
        <div>
            <MuiThemeProvider theme={theme}>
                <Routes />
                <SpeedDailBtn />
            </MuiThemeProvider>
        </div>
    );
};

export default App;
