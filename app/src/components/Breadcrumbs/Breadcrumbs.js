import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Link,
  Breadcrumbs,
  Typography,
  IconButton,
  Button
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2)
  },
  link:{
    padding: theme.spacing(1)
  }
}));

const MyBreadcrumbs = props => {
  const { className, history, pages, setSelectedUser, ...rest } = props;
  const classes = useStyles();

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      className={clsx(classes.root, className)}
      separator={<NavigateNextIcon />}
    >
      {pages.map(page => (
        <>
          {page.isLink && (
            <Link
              color="primary"
              href={page.href}
              variant="button"
              className={classes.link}
            >
              {page.title}
            </Link>
          )}
          <>
            {!page.isLink && (
              <Typography
                color="textPrimary"
                variant="button"
              >
                {page.title}
              </Typography>
            )}
          </>
        </>
      ))}

    </Breadcrumbs>
  );
};

export default withRouter(MyBreadcrumbs);
