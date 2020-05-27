import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Typography
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const EvaluationForm = props => {
  const { className, products, setSelectedUser, ...rest } = props;

  const classes = useStyles();

  const handleSave = () => {
    setSelectedUser("");
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Evaluation Form"
      />

      <Divider />
      <CardContent className={classes.content}>
        Hello
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          size="small"
          variant="text"
          onClick={() => handleSave()}
        >
          Cancell
        </Button>
        <Button
          color="primary"
          size="small"
          variant="contained"
          onClick={() => handleSave()}
        >
          Save
        </Button>

      </CardActions>
    </Card>
  );
};

EvaluationForm.propTypes = {
  className: PropTypes.string
};

export default EvaluationForm;
