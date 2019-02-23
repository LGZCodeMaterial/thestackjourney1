import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { CssBaseline, Grid, Button, Typography } from "@material-ui/core";
import backgroundShape from "../assets/images/shape.svg";
import TopBar from "./TopBar";
import CustomFooter from "./Footer";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import { photos } from "../config/samplePhotos";

const mainBg = 'https://firebasestorage.googleapis.com/v0/b/ivyliewpru.appspot.com/o/static%2Fezgif.com-webp-to-jpg.jpg?alt=media&token=2fb3f218-4f7d-4401-80ab-d5ec585b0bcb';

const Main = props => {

    const [currentImg , setCurrentImg ] = useState(0);
    const [lightboxIsOpen, setLightBox ] = useState(false);

    const openLightBox = (event, obj) => {
      setCurrentImg(obj.index);
      setLightBox(true);
    }

    const closeLightBox = () => {
      setCurrentImg(0);
      setLightBox(false);
    }

    const goToPrevious = () => {
      const prevImgNo = currentImg - 1;
      setCurrentImg(prevImgNo);
    }

    const goToNext = () => {
      const nextImgNo = currentImg + 1;
      setCurrentImg(nextImgNo);
    }
  
    useEffect(() => {
        document.title = "Ivy Liew";
    });

    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar />
            <div className={classes.root}>
                <Grid container justify="center">
                    <Grid
                        spacing={24}
                        alignItems="center"
                        justify="center"
                        container
                        className={classes.grid}
                    >
                        <Grid item xs={12} md={6}>
                            <div className={classes.bannerImg} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={classes.bannerText}>
                              <div>"Life's Beautiful with personal finance"</div>
                              <div>Want a house?</div>
                              <div>Want to spend more time with family?</div>
                              <div>Want to travel whenever you want? </div>
                              <div>Read Ivy's Financial Notebook!</div>
                              <Button  color='primary' variant="contained" className={classes.actionButtom}>
                                click here!
                              </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid
                        spacing={24}
                        alignItems="center"
                        justify="center"
                        container
                        className={classes.grid}
                    >
                        <Grid item xs={12}>
                          <div className={classes.reviewTitle}>
                              <Typography variant="h3" color="inherit" noWrap>
                                <span className={classes.reviewText}>REVIEWS</span>
                              </Typography>
                          </div>
                            <div className={classes.reviewsContainer}>
                              <Gallery photos={photos} onClick={openLightBox}/>
                              <Lightbox images={photos}
                                onClose={closeLightBox}
                                onClickPrev={goToPrevious}
                                onClickNext={goToNext}
                                currentImage={currentImg}
                                isOpen={lightboxIsOpen}
                              />
                            </div>
                        </Grid>
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
  bannerImg: {
    height: "80vh",
    background: `url(${mainBg}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    [theme.breakpoints.down('sm')]: {
      height: "40vh",
      minWidth: 200,
    }
  },
  bannerText: {
    width: '80%',
    margin: '0 auto',
  },
  reviewTitle: {
    textAlign: 'center',
  },
  reviewText: {
    fontStyle: 'italic',
  }
});

export default withStyles(styles)(Main);

/**
 *     font-size: 30px;
    font-family: didot-w01-italic serif;
    font-style: italic;
    letter-spacing: 0.15em;
 */