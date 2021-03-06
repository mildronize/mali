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
      <Link color="inherit" href="/getting-started/installation/" >
        Core
     </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
}


export default MyBreadcrumbs;
