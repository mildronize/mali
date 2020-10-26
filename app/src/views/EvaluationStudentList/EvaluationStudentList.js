import React, { useState, useParams } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Card, CardContent, InputLabel, MenuItem, Hidden, Box, useMediaQuery } from '@material-ui/core';

import {
  StudentsTable
} from './components';

import {
  Breadcrumbs
} from 'components';

import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    // paddingLeft: theme.spacing(4)
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

const EvaluationStudentList = ({ match }) => {
  const theme = useTheme();
  const classes = useStyles();

  // console.log(match);

  // const breadcrumbsPagesGenerator = () => {
  //   const foundObject = users.find(({ id }) => id === userID);
  //     if (foundObject !== undefined)
  //       setSelectedName(foundObject.name);
  // }

  const breadcrumbsPages = [
    {
      title: 'Home',
      href: '/evaluation',
      isLink: true
    },
    {
      title: 'DM I',
      isLink: false
    },
    {
      title: 'PROGRESS 1',
      href: '/evaluation',
      isLink: true
    }
  ];

  const  { dmType, criteria }  = match.params;
  console.log(dmType, criteria);
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
      <Typography variant="h1">Evaluation</Typography>
      
      <Breadcrumbs 
        pages={breadcrumbsPages}
       />
      <div className={classes.content}>
        <StudentsTable
          users={users}
          dmType={dmType}
          criteria={criteria}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser} />
      </div>

    </div>
  );
};

export default EvaluationStudentList;
