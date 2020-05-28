import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
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
  Grid,
  TableCell,
  TableBody,
  Table,
  TableHead,
  TableRow,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(4)

  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));



const RadioTableRow = ({ row, radioScales }) => {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <TableRow key={row.name}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>

      {radioScales.map((radioScale) => (
        <TableCell><Radio
          checked={selectedValue === `${radioScale}`}
          onChange={handleChange}
          value={radioScale}
          name="radio-button"
          inputProps={{ 'aria-label': `${radioScale}` }}
        /></TableCell>
      ))}
      
    </TableRow>
  );
}

const EvaluationForm = props => {
  const { className, products , history, ...rest } = props;

  const classes = useStyles();

  const handleSave = () => {
    history.push("/evaluation/student-list");
  }

  const radioScales = [5, 4, 3, 2, 1];

  function createData(name, description) {
    return { name, description };
  }

  const rows = [
    createData('Criteria 1', 'Frozen yoghurt'),
    createData('Criteria 2', 'Ice cream sandwich'),
    createData('Criteria 3', 'Eclair'),
  ];

  return (
    <div className={clsx(classes.root, className)} >
      <Grid container  >
        <Grid
          item lg={6} md={8} xl={6} xs={12}
        >
          <Card>
            <CardHeader
              title="Evaluation Form"
            />

            <Divider />
            <CardContent className={classes.content}>

              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Criteria Title</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <RadioTableRow row={row} radioScales={radioScales}/>
                  ))}
                </TableBody>
              </Table>

              <Typography variant="h5">Remark</Typography>
              <TextareaAutosize
                aria-label="minimum height"
                rows={3}
                placeholder="Minimum 3 rows"
              />
              <Typography variant="h5">Suggestion / Comment</Typography>
              <TextareaAutosize
                aria-label="minimum height"
                rows={3}
                placeholder="Minimum 3 rows"
              />
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
        </Grid>
      </Grid>
    </div>

  );
};

EvaluationForm.propTypes = {
  className: PropTypes.string
};

export default withRouter(EvaluationForm);
