import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import image from "../Assets/globe.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  btn: {
    width: "200px",
    marginTop: "20px"
  },
  title: {
    fontSize: "30px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "50px",
      textAlign: "left"
    }
  },
  subTitle: {
    color: "#31373D",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      lineHeight: "25px",
      textAlign: "left"
    }
  },
  btnRight: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "40px"
    },
    marginLeft: "0px",
    width: "200px",
    marginTop: "20px"
  },
  root: {
    height: "130vh",
    [theme.breakpoints.up("md")]: {
      height: "100vh"
    }
  },
  img: {
    height: "200px",
    marginTop: "-150px",
    marginRight: "20px",
    [theme.breakpoints.up("md")]: {
      height: "unset",
      marginTop: "unset",
      marginRight: "unset"
    }
  },
  btnGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "unset",
      flexDirection: "unset",
      alignItems: "unset"
    }
  }
}));

const Section1 = () => {
  const classes = useStyles();
  return (
    <div data-aos="zoom-in" data-aos-duration="400">
      <Grid
        className={classes.root}
        justify="center"
        alignItems="center"
        container
      >
        <Grid item xs={10} md={6}>
          <Typography className={classes.title} variant="h3" gutterBottom>
            Looking for a lollipop alternative?
          </Typography>
          <Typography className={classes.subTitle} variant="subtitle1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
          <div className={classes.btnGroup}>
            <Button className={classes.btn} variant="contained" color="primary">
              Primary CTA
            </Button>
            <Button
              className={classes.btnRight}
              variant="outlined"
              color="primary"
            >
              Sesondary CTA
            </Button>
          </div>
        </Grid>
        <Grid item xs={10} md={3}>
          <Grid container justify="center">
            <img className={classes.img} src={image} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Section1;
