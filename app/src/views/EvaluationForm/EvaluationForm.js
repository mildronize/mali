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
  Box,
  Radio
} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import {
  TextEditor
} from "components";

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
  tableContainer: {
    overflowX: "auto"
  },
  table: {
    width: "90%",
    border: "none"
  },
  tableCell: {
    textAlign: "center",  
    borderBottom: "1px solid #ddd",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  tableCellLeft: {
    textAlign: "left",
    borderBottom: "1px solid #ddd"
  },
  paragraphSpacing: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}));


const RadioTableRow = ({ row, radioScales }) => {
  const [selectedValue, setSelectedValue] = React.useState('');
  const classes = useStyles();
  const handleChange = event => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <tr key={row.name}>
      <td className={classes.tableCellLeft}> <Typography variant="subtitle1">
        {row.name}
      </Typography>
      </td>


      {radioScales.map(radioScale => (
        <td className={classes.tableCell}>
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
  const { className, match, history, ...rest } = props;
  const  { dmType, criteria }  = match.params;

  const classes = useStyles();

  const handleSave = () => {
    history.push(`/evaluation/${dmType}/${criteria}`);
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
              <Typography className={classes.paragraphSpacing} variant="subtitle1"><strong>Name:</strong> Ekaterina Tankova</Typography>
              <Typography className={classes.paragraphSpacing} variant="subtitle1"><strong>ID:</strong>58101200123</Typography>
              <Divider />
              <Typography className={classes.paragraphSpacing} variant="h5">Evaluation Table:</Typography>
              <Box my={4} className={classes.tableContainer} >
                
                <Box display="flex" justifyContent="center">
                  <table className={classes.table} cellspacing="0" cellpadding="0">
                    <tr>
                      <th className={classes.tableCellLeft}><Typography variant="h6">Criteria Title</Typography></th>
                      {radioScales.map(radioScale => (
                        <th className={classes.tableCell}><Typography variant="h6">{radioScale}</Typography></th>
                      ))}
                    </tr>

                    {rows.map(row => (
                      <RadioTableRow
                        radioScales={radioScales}
                        row={row}
                      />
                    ))}

                  </table>
                </Box>
              </Box>
              <Divider />
              <Typography className={classes.paragraphSpacing} variant="h5">Note:</Typography>
              <Typography variant="body2">Personal Note, the student don't see your note</Typography>
              <TextEditor placeholder="Type the remark ... " />
              <Typography className={classes.paragraphSpacing} variant="h5">Suggestion / Comment:</Typography>
              <Typography variant="body2">Sugesstion will be public for student</Typography>
              <TextEditor placeholder="Type the suggestion/comment ... " />
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
