import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Link,
  Breadcrumbs,
  Typography,
  IconButton,
  Hidden
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const MyBreadcrumbs = props => {
  const { className, selectedName, setSelectedUser, ...rest } = props;
  const classes = useStyles();

  const handleClickCriteria = () => {
    setSelectedUser("");
  };

  return (
    <Breadcrumbs
      className={clsx(classes.root, className)}
      aria-label="breadcrumb"
      separator={<NavigateNextIcon />}
    >


      <IconButton href="/evaluation">
        <HomeIcon />
      </IconButton>
      <Typography variant="body1" color="textPrimary">DM 1</Typography>
      {selectedName === "" &&
        <Typography variant="body1" color="textPrimary">Progress 1</Typography>
      }
      {selectedName !== "" &&
        <Link variant="body1" color="primary" onClick={handleClickCriteria} href="#">
          Progress 1
        </Link>
      }
      {/* {selectedName !== "" && <Typography variant="body1" color="textPrimary">{selectedName}</Typography>} */}

    </Breadcrumbs>
  );
}


export default MyBreadcrumbs;
