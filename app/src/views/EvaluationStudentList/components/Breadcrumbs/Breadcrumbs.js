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


const MyBreadcrumbs = props => {
  const { className, ...rest } = props;
  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
      <Link color="inherit" href="/">
        Evaluation
     </Link>
      <Typography color="textPrimary">DM 1</Typography>
      <Typography color="textPrimary">Progress 1</Typography>
    </Breadcrumbs>
  );
}


export default MyBreadcrumbs;
