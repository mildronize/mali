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
import { CriteriaList } from '..';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestProducts = props => {
  const { className, data, ...rest } = props;

  const classes = useStyles();

  // const [products] = useState(mockData);

  const criteriaList = data.criteria;

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title={data.courseTitle}
        subheader="Criteria selection"
      />

      <Divider />
      <CardContent className={classes.content}>
        <List>
          {criteriaList.map((criteria, i) => (
          
            <ListItem
              button 
              divider={i < criteria.length - 1}
              key={criteria.id}
              component="a"
              href={`/evaluation/${data.courseTitleSlug}/${criteria.id}`}
            >
              <ListItemAvatar>
                { criteria.isDone && <CheckCircleIcon /> }
              </ListItemAvatar>
              <ListItemText
                primary={criteria.name}
                // secondary={`Updated ${criteria.updatedAt.fromNow()}`}
              />
              <Typography variant="subtitle1">{criteria.ratio}%</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      {/* <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions> */}
    </Card>
  );
};

LatestProducts.propTypes = {
  className: PropTypes.string
};

export default LatestProducts;
