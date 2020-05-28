import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

import MainLayout from '../Main';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4)
  }
}));

const MainWithContainer = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainLayout>
        <Container maxWidth="md">{children}</Container>
      </MainLayout>
    </div>
  );
};

MainWithContainer.propTypes = {
  children: PropTypes.node
};

export default MainWithContainer;
