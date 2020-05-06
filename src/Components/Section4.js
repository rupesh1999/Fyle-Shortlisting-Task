import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Grid, Typography, Avatar, Box } from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "100px"
  },
  large: {
    height: "200px",
    width: "200px"
  },
  btnBack: {
    backgroundColor: "rgb(0, 153, 255)",
    color: "white",
    height: "30px",
    width: "100px",
    border: "none",
    marginRight: "30px"
  },
  btnNext: {
    backgroundColor: "white",
    border: "1px solid rgb(0, 153, 255)",
    color: "rgb(0, 153, 255)",
    height: "30px",
    width: "100px"
  }
});

export default function Section4() {
  const handelResize = () => {
    setWidth(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener("resize" , handelResize);
  });
  const [width , setWidth] = React.useState(window.innerWidth);
  const classes = useStyles();
  return (
    <div data-aos="slide-up" data-aos-duration="1000">
      <Grid className={classes.root} container justify="center">
        <Grid item xs={12}>
          <Typography
            style={{ marginTop: "8vh", marginBottom: "8vh" }}
            align="center"
            variant="h4"
            gutterBottom
          >
            Here’s what our customers have to say
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={width < 780 ? 200 : 30}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>
                <Grid justify="center" alignItems="center" container>
                  <Grid item xs={11} md={4}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPpe962cZoefyxRyJJGPMc-aoDOLyfARNpfk9h9bhXO5cSm_ql&usqp=CAU"
                      className={classes.large}
                    />
                  </Grid>
                  <Grid item xs={11} md={8}>
                    <Typography
                      style={{ color: "#8B8E91" }}
                      variant="h6"
                      component="p"
                    >
                      <Box fontStyle="italic" m={1} lineHeight={1.3}>
                        <FormatQuoteIcon style={{ color: "#0099FF" }} />
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </Box>
                    </Typography>
                    <Typography variant="h4" component="h5">
                      <Box m={1} lineHeight={1.3}>
                        Raja Ram
                      </Box>
                    </Typography>
                    <Typography
                      style={{ color: "#31373D" }}
                      variant="h6"
                      component="h5"
                    >
                      <Box m={1} lineHeight={1.3}>
                        Tip World
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Slide>
              <Slide index={1}>
                <Grid justify="center" alignItems="center" container>
                  <Grid item xs={11} md={4}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPpe962cZoefyxRyJJGPMc-aoDOLyfARNpfk9h9bhXO5cSm_ql&usqp=CAU"
                      className={classes.large}
                    />
                  </Grid>
                  <Grid item xs={11} md={8}>
                    <Typography
                      style={{ color: "#8B8E91" }}
                      variant="h6"
                      component="p"
                    >
                      <Box fontStyle="italic" m={1} lineHeight={1.3}>
                        <FormatQuoteIcon style={{ color: "#0099FF" }} />
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </Box>
                    </Typography>
                    <Typography variant="h4" component="h5">
                      <Box m={1} lineHeight={1.3}>
                        Raja Ram
                      </Box>
                    </Typography>
                    <Typography
                      style={{ color: "#31373D" }}
                      variant="h6"
                      component="h5"
                    >
                      <Box m={1} lineHeight={1.3}>
                        Tip World
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Slide>
              <Slide index={2}>
                <Grid justify="center" alignItems="center" container>
                  <Grid item xs={11} md={4}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPpe962cZoefyxRyJJGPMc-aoDOLyfARNpfk9h9bhXO5cSm_ql&usqp=CAU"
                      className={classes.large}
                    />
                  </Grid>
                  <Grid item xs={11} md={8}>
                    <Typography
                      style={{ color: "#8B8E91" }}
                      variant="h6"
                      component="p"
                    >
                      <Box fontStyle="italic" m={1} lineHeight={1.3}>
                        <FormatQuoteIcon style={{ color: "#0099FF" }} />
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </Box>
                    </Typography>
                    <Typography variant="h4" component="h5">
                      <Box m={1} lineHeight={1.3}>
                        Raja Ram
                      </Box>
                    </Typography>
                    <Typography
                      style={{ color: "#31373D" }}
                      variant="h6"
                      component="h5"
                    >
                      <Box m={1} lineHeight={1.3}>
                        Tip World
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Slide>
            </Slider>
            <Grid
              style={{ marginTop: "20px", marginBottom: "60px" }}
              container
              justify="center"
            >
              <ButtonBack className={classes.btnBack}>Back</ButtonBack>
              <ButtonNext className={classes.btnNext}>Next</ButtonNext>
            </Grid>
          </CarouselProvider>
        </Grid>
      </Grid>
    </div>
  );
}
