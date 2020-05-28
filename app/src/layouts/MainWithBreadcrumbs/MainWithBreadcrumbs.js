import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Typography, Card, CardContent, InputLabel, MenuItem, Hidden, Box, useMediaQuery } from '@material-ui/core';

import MainLayout from '../Main';

import {
  Breadcrumbs
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4)
  },
  title: {
    paddingBottom: theme.spacing(2),
  }
}));

const MainWithBreadcrumbs = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <MainLayout>
      <Grid container className={classes.container} >
        <Grid item xs={12} >
          <Typography variant="h1" className={classes.title}>Evaluation</Typography>
        </Grid>
        <Grid
          item lg={12} xs={12}
        >
          <Breadcrumbs
          />
        </Grid>
      </Grid>
      {children}

    </MainLayout>
  );
};

MainWithBreadcrumbs.propTypes = {
  children: PropTypes.node
};

export default MainWithBreadcrumbs;
