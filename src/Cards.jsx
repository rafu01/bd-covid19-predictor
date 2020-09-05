import React from "react";
import {CardContent, Typography, Grid, Paper } from "@material-ui/core";
import "./Cards.css";
import CountUp from "react-countup";
const Cards = ({ data1: { confirmed, recovered, deaths, lastUpdate },data2}) => {
  let confirm =[], dead=[], recov=[];
  let con=0, dea=0, re=0;
  for (let k of Object.keys(data2)) {
      confirm.push(parseInt(data2[k].Confirmed));
      dead.push(parseInt(data2[k].Deaths));
      recov.push(parseInt(data2[k].Recovered));
  }
  con = confirm[confirm.length-1]-confirm[confirm.length-2];
  dea = dead[dead.length-1]-dead[dead.length-2];
  re = recov[recov.length-1]-recov[recov.length-2];
  if (!con) {
    return "Loading...";
  }
  return (
    <div className="container">
      <Paper className="paper" elevation={3}>
        <Grid container spacing={3} justify="center">
          {/* <Grid item component={Card} xs={12} md={3} className="card infected"> */}
          <Grid item>
            <CardContent>
              <Typography color="textPrimary" variant="h6" gutterBottom>
                Total Infected
              </Typography>
              <Typography variant="h5" className="infected-text">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of total cases of COVID-19
              </Typography>
            </CardContent>
          </Grid>
          {/* <Grid item component={Card} xs={12} md={3} className="card deaths"> */}
          <Grid item>
            <CardContent>
              <Typography color="textPrimary" variant="h6" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5" className="deaths-text">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Total deaths from COVID-19
              </Typography>
            </CardContent>
          </Grid>
          {/* <Grid item component={Card} xs={12} md={3} className="card recovered"> */}
          <Grid item>
            <CardContent>
              <Typography color="textPrimary" variant="h6" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5" className="recovered-text">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Total recovery from COVID-19
              </Typography>
            </CardContent>
          </Grid>
          {/* first row ends here */}
          <Grid item>
            <CardContent>
              <Typography color="textPrimary" variant="h6" gutterBottom>
                New cases
              </Typography>
              <Typography variant="h5" className="infected-text">
                +
                <CountUp
                  start={0}
                  end={con}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of active cases in 24 hours
              </Typography>
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent>
              <Typography color="textPrimary" variant="h6" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5" className="deaths-text">
                +
                <CountUp
                  start={0}
                  end={dea}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
             Total deaths in last 24 hours
              </Typography>
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent>
              <Typography color="textPrimary" variant="h6" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5" className="recovered-text">
                +
                <CountUp
                  start={0}
                  end={re}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
              Recovery in last 24 hours
              </Typography>
            </CardContent>
          </Grid>
          </Grid>
      </Paper>
    </div>
  );
};
export default Cards;
