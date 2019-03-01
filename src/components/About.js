import React from "react";
import { CssBaseline } from "@material-ui/core";
import TopBar from "./TopBar";
import CustomFooter from "./Footer";

const About = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar currentPath="/about" />
            <div>about</div>
            <CustomFooter />
        </React.Fragment>
    );
};

export default About;
