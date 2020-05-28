import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { 
  Container,
  Typography
} from '@material-ui/core';

import MainWithContainerLayout from '../MainWithContainer';

import {
  Breadcrumbs
} from './components';


const useStyles = makeStyles(theme => ({
  root: {
    // marginTop: theme.spacing(4)
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}));

const MainWithBreadcrumbs = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <MainWithContainerLayout>
      <div className={classes.root} >
       
          <Typography variant="h1" className={classes.title}>Evaluation</Typography>
       
          <Breadcrumbs
          />
      {children}
      </div>
    </MainWithContainerLayout>
  );
};

MainWithBreadcrumbs.propTypes = {
  children: PropTypes.node
};

export default MainWithBreadcrumbs;
