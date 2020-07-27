import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';


const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent style={{ background: "#0000004f" }}>
            <Typography style={{ color: "white" }} gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2" style={{ color: "white" }}>
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography style={{ color: "white" }}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p" style={{ color: "white" }}>
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent style={{ background: "#ffffff82" }}>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent style={{ background: "#00000082" }}>
            <Typography style={{ color: "whitesmoke" }} gutterBottom>
              Deaths
            </Typography>
            <Typography style={{ color: "white" }} variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography style={{ color: "white" }}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography style={{ color: "whitesmoke" }} variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
