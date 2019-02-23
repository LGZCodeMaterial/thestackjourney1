import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styles";
import TopBar from "../TopBar";

const CustomHeader = props => {

    const { classes } = props;

    return (
        <header className={classes.header}>
            <TopBar />
            
        </header>
    );
};

export default withStyles(styles)(CustomHeader);
