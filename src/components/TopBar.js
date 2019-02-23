import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { IconButton, SwipeableDrawer, List, ListItem, ListItemText, Tabs, Tab } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "./Menu";

const TopBar = props => {
    const [value, setValue] = useState(0);
    const [menuDrawer, setMenuDrawer] = useState(false);

    const { classes } = props;

    const mobileMenuClose = () => {
        setMenuDrawer(false);
    }
    const mobileMenuOpen = () => {
        setMenuDrawer(true);
    }

    const handleChange = (e, value) => {
        setValue(value);
    }

    const currentTab = () => {
        switch (props.currentPath) {
            case '/':
                return 0;
            case '/notebook':
                return 1;
            case '/quotes':
                return 2;
            case '/faq':
                return 3;
            case '/about':
                return 4;
            case '/contact':
                return 5;
            default:
                break;
        }
    }

    const tabsProps = {
        value: currentTab() || value,
        indicatorColor: "primary",
        textColor: "primary",
        onChange: handleChange,
    }

    const drawerProps = {
        anchor: "right",
        open: menuDrawer,
        onOpen: mobileMenuOpen, 
        onClose: mobileMenuClose,
    }

    // console.log(props);
    return (
        <AppBar position="absolute" color="default" className={classes.appBar} >
            <Toolbar>
                <Grid container spacing={24} alignItems="baseline">
                    <Grid item xs={12} className={classes.flex}>
                        <div className={classes.productLogo}>
                            <Typography variant="h6" color="inherit" noWrap>
                                <Link to="/" className={classes.link}>
                                    <span className={classes.tagline}>IVY</span>
                                </Link>
                            </Typography>
                        </div>
                        <div className={classes.flexSpan}></div>
                        {!props.noTabs && (
                            <React.Fragment>
                                <div className={classes.iconContainer}>
                                    <IconButton onClick={mobileMenuOpen} className={classes.IconButton} color="inherit" aria-label="Menu">
                                        <MenuIcon />
                                    </IconButton>
                                </div>
                                <div className={classes.tabContainer}>
                                    <SwipeableDrawer {...drawerProps}>
                                        <List className={classes.drawer}>
                                            {Menu.map((item, index) => (
                                                <ListItem component={Link} to={{pathname: item.pathname, search: props.location.search}} button key={index}>
                                                    <ListItemText primary={item.label} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </SwipeableDrawer>
                                    <Tabs {...tabsProps}>
                                        {Menu.map((item, index) => (
                                            <Tab 
                                                key={index} 
                                                component={Link} 
                                                onClick={mobileMenuClose}
                                                to={{pathname: item.pathname, search: props.location.search}} 
                                                classes={{root: classes.tabItem}} 
                                                label={item.label} />
                                        ))}
                                    </Tabs>
                                </div>
                            </React.Fragment>
                        )}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

const styles = theme => ({
    appBar: {
        position: "relative",
        backgroundColor: "transparent"
    },
    flex: {
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    productLogo: {
        display: 'inline-block',
        marginLeft: 32,
        paddingLeft: 24
    },
    tagline: {
        display: 'inline-block',
        marginLeft: 10
    },
    flexSpan: {
        flexGrow: 1
    },
    iconContainer: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    IconButton: {
        float: 'right'
    },
    tabContainer: {
        marginLeft: 32,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    tabItem: {
        paddingTop: 20,
        paddingBottom: 20,
        minWidth: 'auto'
    },
    drawer: {
        width: 250
    }
});

export default withRouter(withStyles(styles)(TopBar));
