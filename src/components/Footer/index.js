import React from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core";

const CustomFooter = props => {

    const { classes } = props;

    return (
        <div className={classes.footerContainer}>
            <div>
                ©2019 by Ivy Liew Prudential Insurance Agent.
            </div>
        </div>
    );
};

export default withStyles(styles)(CustomFooter);
