import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { 
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
  }
}));

const COMPONENT_NAME = props => {
  const { className, onChange, style, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Button variant="contained">Example Button</Button>
    </div>
  );
};

COMPONENT_NAME.propTypes = {
  className: PropTypes.string
};

export default COMPONENT_NAME;
