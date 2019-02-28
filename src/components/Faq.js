import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import TopBar from "./TopBar";
import CustomFooter from "./Footer";
import { CssBaseline, Grid } from "@material-ui/core";
import backgroundShape from "../assets/images/shape.svg";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { faqsContent } from "../config/faqsContent";

const Faq = props => {

    const { classes } = props;

    useEffect(() => {
        document.title = "Faqs"
    })

    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar currentPath="/faq" />
            <div className={classes.root}>
                <Grid container justify="center" alignItems="center" className={classes.grid}>
                    <Grid item xs={10} md={8} >
                        {faqsContent.map((content, index) => (
                            <ExpansionPanel key={index}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>{index+1}. {content.question}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div className={classes.faqContent}>
                                        {content.answer}
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                    </Grid>
                </Grid>
            </div>
            <CustomFooter />
        </React.Fragment>
    );
};

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.grey["100"],
      overflow: "hidden",
      background: `url(${backgroundShape}) no-repeat`,
      backgroundSize: "cover",
      backgroundPosition: "0 400px",
      paddingBottom: 200
    },
    grid: {
      margin: 40,
      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% - 20px)',
        margin: 0,
      }
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: 600,
    },
  });

export default withStyles(styles)(Faq);
