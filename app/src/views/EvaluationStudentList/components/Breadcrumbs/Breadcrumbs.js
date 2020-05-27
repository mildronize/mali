import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Link,
  Breadcrumbs,
  Typography
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const MyBreadcrumbs = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <Breadcrumbs 
      className={clsx(classes.root, className)}
      aria-label="breadcrumb"
      separator={<NavigateNextIcon/>}
    >
      <Link variant="subtitle1" color="inherit" href="/">
        Evaluation
     </Link>
      <Typography variant="subtitle1" color="textPrimary">DM 1</Typography>
      <Typography variant="subtitle1" color="textPrimary">Progress 1</Typography>
    </Breadcrumbs>
  );
}


export default MyBreadcrumbs;
