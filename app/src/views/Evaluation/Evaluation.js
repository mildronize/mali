import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Select, FormControl, InputLabel, MenuItem, FormHelperText, Box } from '@material-ui/core';

import {
  CriteriaList,
  Breadcrumbs
} from './components';

import mockDataDM1 from './data-dm1';
import mockDataDM2 from './data-dm2';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
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

  const [productsDm1] = useState(mockDataDM1);
  const [productsDm2] = useState(mockDataDM2);

  return (
    <div className={classes.root}>
      <Grid container spacing={4} >
        <Grid item lg={6} md={6} xl={6} xs={12} >
          <Typography variant="h1">Evaluation</Typography>
        </Grid>
        <Grid item lg={6} md={6} xl={6} xs={12} >
          <Typography variant="h6"  style={{display: 'inline-block', marginRight: '1em', paddingTop: '0.5em'}}>Academic Year</Typography>
          <Selector />
        </Grid>
        <Grid
          item xs={12}
          >
          <Typography variant="subtitle1">Available courses:</Typography>
          </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <CriteriaList products={productsDm1} />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <CriteriaList products={productsDm2} />
        </Grid>

      </Grid>
    </div>
  );
};

export default Dashboard;
