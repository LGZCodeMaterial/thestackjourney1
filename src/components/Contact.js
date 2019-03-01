import React from "react";
import { CssBaseline } from "@material-ui/core";
import TopBar from "./TopBar";
import CustomFooter from "./Footer";

const Contact = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar currentPath="/contact" />
            <div>contact</div>
            <CustomFooter />
        </React.Fragment>
    );
};

export default Contact;
