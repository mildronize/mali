import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Card, CardContent, InputLabel, MenuItem, Divider, Box } from '@material-ui/core';

import {
  Breadcrumbs,
  StudentsTable
} from './components';

import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    // marginTop: theme.spacing(2),
    padding: 0
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  breadcrumbs: {
    marginLeft: theme.spacing(1),
    // marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  }
}));



const EvaluationStudentList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <Grid container spacing={4} >
        <Grid item xs={12} >
          <Typography variant="h1">Evaluation</Typography>
        </Grid>

        <Grid
          item lg={6} xs={12}
        >
<Breadcrumbs className={classes.breadcrumbs}/>
        {/* <Divider className={classes.divider} /> */}
          <div className={classes.content}>
            <StudentsTable users={users} />
          </div>

        </Grid>


      </Grid>
    </div>
  );
};

export default EvaluationStudentList;
