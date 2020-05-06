import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles(theme => ({
  root: {
    height: "80vh",
    backgroundImage: "linear-gradient(44.59deg, #D5E2E9 0%, #EAEEF1 100%)"
  },
  table: {
    marginTop: "-50px"
  },
  container: {
    marginTop: "12vh"
  }
}));

export default function Section2() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography
            style={{ marginTop: "8vh" }}
            align="center"
            variant="h4"
            gutterBottom
          >
            A Two Line Headline
            <br /> For This Section
          </Typography>
        </Grid>

        <Grid data-aos="flip-left" data-aos-duration="1000" className={classes.container} item xs={11} md={7}>
          <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">Lollipop</TableCell>
                  <TableCell align="right">Icecandey</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Lorem Ipsum
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Lorem Ipsum
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Lorem Ipsum
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Lorem Ipsum
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Lorem Ipsum
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Lorem Ipsum
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                  <TableCell align="right">
                    <ClearIcon style={{ color: "red" }} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Lorem Ipsum
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                  <TableCell align="right">
                    <ClearIcon style={{ color: "red" }} />{" "}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Lorem Ipsum
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                  <TableCell align="right">
                    <ClearIcon style={{ color: "red" }} />{" "}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Lorem Ipsum
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Lorem Ipsum
                  </TableCell>
                  <TableCell align="right">
                    <CheckIcon style={{ color: "#00d400" }} color="green" />
                  </TableCell>
                  <TableCell align="right">
                    <ClearIcon style={{ color: "red" }} />{" "}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
