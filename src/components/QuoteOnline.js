import React from "react";
import { CssBaseline } from "@material-ui/core";
import TopBar from "./TopBar";
import CustomFooter from "./Footer";

const QuoteOnline = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar currentPath="/quotes" />
            <div>Quote Online</div>
            <CustomFooter />
        </React.Fragment>
    );
};

export default QuoteOnline;
