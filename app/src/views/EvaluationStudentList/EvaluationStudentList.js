import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Card, CardContent, InputLabel, MenuItem, Hidden, Box, useMediaQuery } from '@material-ui/core';

import {
  Breadcrumbs,
  StudentsTable,
  EvaluationForm
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
    // marginBottom: theme.spacing(3),
  }
}));



const EvaluationStudentList = () => {
  const theme = useTheme();
  const classes = useStyles();

  const [users] = useState(mockData);
  const [selectedName, setSelectedName] = useState("");
  const [selectedUser, _setSelectedUser] = useState("");
  const setSelectedUser = (userID) => {
    if (userID !== "") {
      const foundObject = users.find(({ id }) => id === userID);
      if (foundObject !== undefined)
        setSelectedName(foundObject.name);
    } else {
      setSelectedName("");
    }
    _setSelectedUser(userID);
  };


  return (
    <div className={classes.root}>
      <Grid container spacing={4} >
        <Grid item xs={12} >
          <Typography variant="h1">Evaluation</Typography>
        </Grid>
        <Grid
          item lg={12} xs={12}
        >
          <Breadcrumbs className={classes.breadcrumbs}
            selectedName={selectedName}
          />
        </Grid>
        {
          selectedUser === "" &&

          <Grid
            item lg={6} md={8} xl={6} xs={12}
          >
            {/* <Divider className={classes.divider} /> */}
            <div className={classes.content}>
              <StudentsTable
                users={users}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser} />
            </div>

          </Grid>
        }
        <Grid
          item lg={6} md={8} xl={6} xs={12}
        >
          {selectedUser !== "" && <EvaluationForm setSelectedUser={setSelectedUser}/>}
        </Grid>

      </Grid>
    </div>
  );
};

export default EvaluationStudentList;
