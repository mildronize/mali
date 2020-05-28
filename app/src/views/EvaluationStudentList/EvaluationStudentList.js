import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Card, CardContent, InputLabel, MenuItem, Hidden, Box, useMediaQuery } from '@material-ui/core';

import {
  StudentsTable
} from './components';

import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(4)
  },
  content: {
    // marginTop: theme.spacing(2),
    padding: 0
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  breadcrumbs: {
    // marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
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
      <Grid container  >
        <Grid
          item lg={6} md={8} xl={6} xs={12}
        >
          <div className={classes.content}>
            <StudentsTable
              users={users}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser} />
          </div>

        </Grid>
      </Grid>
    </div>
  );
};

export default EvaluationStudentList;
