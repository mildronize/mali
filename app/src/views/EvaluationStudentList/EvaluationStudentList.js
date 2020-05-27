import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Select, FormControl, InputLabel, MenuItem, FormHelperText, Box } from '@material-ui/core';

import {
  Breadcrumbs
} from './components';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));



const EvaluationStudentList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} >
        <Grid item xs={12} >
          <Typography variant="h1">Evaluation</Typography>
        </Grid>
        
        <Grid
          item xs={12}
          >
          <Breadcrumbs />
          </Grid>
   
      </Grid>
    </div>
  );
};

export default EvaluationStudentList;
