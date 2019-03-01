import React from "react";
import { CssBaseline } from "@material-ui/core";
import TopBar from "./TopBar";
import CustomFooter from "./Footer";

const Notebook = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar currentPath="/notebook" />
            <div>notebook</div>
            <CustomFooter />
        </React.Fragment>
    );
};

export default Notebook;
