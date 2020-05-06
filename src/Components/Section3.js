import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Switch, Paper, Tabs, Tab } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  container: {
    marginTop: "80vh",
    [theme.breakpoints.up("md")]: {
      marginTop: "65vh"
    }
  }
}));

const data = {
  monthly: {
    for25: {
      lollipop: 25,
      icecandey: 50
    },
    for50: {
      lollipop: 50,
      icecandey: 100
    },
    for100: {
      lollipop: 100,
      icecandey: 200
    },
    for200: {
      lollipop: 200,
      icecandey: 400
    }
  },
  yearly: {
    for25: {
      lollipop: 12.5,
      icecandey: 25
    },
    for50: {
      lollipop: 25,
      icecandey: 50
    },
    for100: {
      lollipop: 50,
      icecandey: 100
    },
    for200: {
      lollipop: 100,
      icecandey: 200
    }
  }
};

export default function Section3() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedB: true
  });
  const [value, setValue] = React.useState(0);
  const [filteredData, setFilteredData] = React.useState({
    lollipop: 25,
    icecandey: 50,
    saving: 25
  });

  const changeData = () => {
    if (state.checkedB === false && value === 0) {
      setFilteredData({
        lollipop: data.yearly.for25.lollipop,
        icecandey: data.yearly.for25.icecandey,
        saving: data.yearly.for25.lollipop - data.yearly.for25.icecandey
      });
      return;
    }
    if (state.checkedB === false && value === 1) {
      setFilteredData({
        lollipop: data.yearly.for50.lollipop,
        icecandey: data.yearly.for50.icecandey,
        saving: data.yearly.for50.lollipop - data.yearly.for50.icecandey
      });
      return;
    }
    if (state.checkedB === false && value === 2) {
      setFilteredData({
        lollipop: data.yearly.for100.lollipop,
        icecandey: data.yearly.for100.icecandey,
        saving: data.yearly.for100.lollipop - data.yearly.for100.icecandey
      });
      return;
    }
    if (state.checkedB === false && value === 3) {
      setFilteredData({
        lollipop: data.yearly.for200.lollipop,
        icecandey: data.yearly.for200.icecandey,
        saving: data.yearly.for200.lollipop - data.yearly.for200.icecandey
      });
      return;
    }

    if (state.checkedB === true && value === 0) {
      setFilteredData({
        lollipop: data.monthly.for25.lollipop,
        icecandey: data.monthly.for25.icecandey,
        saving: data.monthly.for25.lollipop - data.monthly.for25.icecandey
      });
      return;
    }
    if (state.checkedB === true && value === 1) {
      setFilteredData({
        lollipop: data.monthly.for50.lollipop,
        icecandey: data.monthly.for50.icecandey,
        saving: data.monthly.for50.lollipop - data.monthly.for50.icecandey
      });
      return;
    }
    if (state.checkedB === true && value === 2) {
      setFilteredData({
        lollipop: data.monthly.for100.lollipop,
        icecandey: data.monthly.for100.icecandey,
        saving: data.monthly.for100.lollipop - data.monthly.for100.icecandey
      });
      return;
    }
    if (state.checkedB === true && value === 3) {
      setFilteredData({
        lollipop: data.monthly.for200.lollipop,
        icecandey: data.monthly.for200.icecandey,
        saving: data.monthly.for200.lollipop - data.monthly.for200.icecandey
      });
      return;
    }
  };

  useEffect(() => {
    changeData();
  }, [value, state]);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const checkNumberOfServing = () => {
    if (value == 0) {
      return 25;
    }
    if (value == 1) {
      return 50;
    }
    if (value == 2) {
      return 100;
    }
    if (value == 3) {
      return 200;
    }
    // return 100;
  };

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
    changeData();
  };
  return (
    <div className={classes.container}>
      <Grid container justify="center">
        <Grid item xs={11}>
          <Typography align="center" variant="h4" gutterBottom>
            Compare pricing today!
          </Typography>
          <Typography align="center" variant="subtitle1" gutterBottom>
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </Typography>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: 40 }} container justify="center">
        <Grid data-aos="fade-left" container spacing={1} justify="center">
          <Typography variant="h6" gutterBottom>
            Annual
          </Typography>
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <Typography variant="h6" gutterBottom>
            Monthly
          </Typography>
        </Grid>
        <Grid style={{ marginTop: 40 }} item xs={11} md={8}>
          <Grid container justify="center">
            <Paper data-aos="fade-right" elevation={1}>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="disabled tabs example"
              >
                <Tab label="25 Servin" />
                <Tab label="50 Servin" />
                <Tab label="100 Servin" />
                <Tab label="200 Servin" />
              </Tabs>
            </Paper>
            <Grid style={{ marginTop: 80 }} item xs={12}>
              <Grid container spacing={3} justify="center">
                <Grid
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  elevation={2}
                  item
                  xs={11}
                  md={4}
                >
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography
                        style={{ marginBottom: 70 }}
                        gutterBottom
                        component="h3"
                        variant="h4"
                      >
                        Lollipop
                      </Typography>
                      <Grid container>
                        <Typography variant="h5" component="p">
                          {filteredData.lollipop}$
                        </Typography>
                        <Typography
                          style={{ marginTop: 10, marginLeft: 10 }}
                          variant="caption"
                          component="p"
                        >
                          Per Month
                        </Typography>
                      </Grid>
                      <Typography variant="body2" component="p">
                        For {checkNumberOfServing()} Serving
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  item
                  xs={11}
                  md={4}
                >
                  <Card elevation={2} className={classes.root}>
                    <CardContent>
                      <Typography
                        style={{ marginBottom: 70 }}
                        gutterBottom
                        component="h3"
                        variant="h4"
                      >
                        Ice Candey
                      </Typography>
                      <Grid container>
                        <Typography variant="h5" component="p">
                          {filteredData.icecandey}$
                        </Typography>
                        <Typography
                          style={{ marginTop: 10, marginLeft: 10 }}
                          variant="caption"
                          component="p"
                        >
                          Per Month
                        </Typography>
                      </Grid>
                      <Typography variant="body2" component="p">
                        For {checkNumberOfServing()} Serving
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  item
                  xs={11}
                  md={4}
                >
                  <Card elevation={2} className={classes.root}>
                    <CardContent>
                      <Typography
                        style={{ marginBottom: 30 }}
                        gutterBottom
                        component="h3"
                        variant="h4"
                      >
                        Your Saving on lollipop
                      </Typography>
                      <Grid container>
                        <Typography variant="h5" component="p">
                          {Math.abs(filteredData.saving)}$
                        </Typography>
                        <Typography
                          style={{ marginTop: 10, marginLeft: 10 }}
                          variant="caption"
                          component="p"
                        >
                          Per Month
                        </Typography>
                      </Grid>
                      <Typography variant="body2" component="p">
                        For {checkNumberOfServing()} Serving
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
