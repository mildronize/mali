import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
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
    // paddingLeft: theme.spacing(4)
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  },
  textArea: {
    
  },
  table: {
    width: "100%"
  }
}));


const RadioTableRow = ({ row, radioScales }) => {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = event => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <tr key={row.name}>
     <td> <Typography variant="subtitle1">
        {row.name}
        </Typography>
        </td>


      {radioScales.map(radioScale => (
        <td>
          <Radio
            checked={selectedValue === `${radioScale}`}
            inputProps={{ 'aria-label': `${radioScale}` }}
            name="radio-button"
            onChange={handleChange}
            value={radioScale}
          />
        </td>
      ))}
    </tr>
  );
};

const EvaluationForm = props => {
  const { className, products, history, ...rest } = props;

  const classes = useStyles();

  const handleSave = () => {
    history.push('/evaluation/student-list');
  };

  const radioScales = [5, 4, 3, 2, 1];

  function createData(name, description) {
    return { name, description };
  }

  const rows = [
    createData('Criteria 1', 'Frozen yoghurt'),
    createData('Criteria 2', 'Ice cream sandwich'),
    createData('Criteria 3', 'Eclair')
  ];

  return (
    <div className={clsx(classes.root, className)}>
      <Grid container>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <Card>
            <CardHeader title="Evaluation Form" />

            <Divider />

            <CardContent className={classes.content}>
              <Typography variant="subtitle1">Name: Ekaterina Tankova</Typography>
              <Typography variant="subtitle1">ID: Ekaterina Tankova</Typography>
              
                <table className={classes.table}>
                  <tr>
                    <th>Criteria Title</th>
                    <th>5</th>
                    <th>4</th>
                    <th>3</th>
                    <th>2</th>
                    <th>1</th>
                  </tr>
       
                  {rows.map(row => (
                    <RadioTableRow
                      radioScales={radioScales}
                      row={row}
                    />
                  ))}
             
              </table>

              <Typography variant="h5">Remark</Typography>
              <TextareaAutosize
                aria-label="minimum height"
                classname={classes.textArea}
                placeholder="Minimum 3 rows"
                rows={3}
              />
              <Typography variant="h5">Suggestion / Comment</Typography>
              <TextareaAutosize
                aria-label="minimum height"
                placeholder="Minimum 3 rows"
                rows={3}
              />
            </CardContent>
            <Divider />
            <CardActions className={classes.actions}>
              <Button
                onClick={() => handleSave()}
                size="small"
                variant="text"
              >
                Cancell
              </Button>
              <Button
                color="primary"
                onClick={() => handleSave()}
                size="small"
                variant="contained"
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
