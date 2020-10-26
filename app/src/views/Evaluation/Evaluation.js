import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Select, FormControl, InputLabel, MenuItem, FormHelperText, Box } from '@material-ui/core';

import {
  CriteriaList,
  Breadcrumbs
} from './components';

import mockDataDM from './data-dm';

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(4)
  },
  breadcrumbs: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  }
}));

const Selector = () => {

  const [academicYear, setAcademicYear] = useState("2562/2");

  const handleChange = (event) => {
    setAcademicYear(event.target.value);
  };


  return (
    <FormControl >

      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={academicYear}
        onChange={handleChange}
      >
        <MenuItem value={"2562/2"}>2562/2</MenuItem>
        <MenuItem value={"2563/1"}>2563/1</MenuItem>
      </Select>

    </FormControl>
  );
}


const Dashboard = () => {
  const classes = useStyles();

  const [dataDm1] = useState(mockDataDM[0]);
  const [dataDm2] = useState(mockDataDM[1]);

  return (
    <div className={classes.root}>
      <Grid container spacing={4} >
        <Grid item lg={6} md={6} xl={6} xs={12} >
          <Typography variant="h1">Evaluation</Typography>
        </Grid>
        <Grid item lg={6} md={6} xl={6} xs={12} >
          <Typography variant="h6" style={{ display: 'inline-block', marginRight: '1em', paddingTop: '0.5em' }}>Academic Year</Typography>
          <Selector />
        </Grid>


        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
        >
          <CriteriaList data={dataDm1} />
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
        >
          <CriteriaList data={dataDm2} />
        </Grid>

      </Grid>
    </div>
  );
};

export default Dashboard;
