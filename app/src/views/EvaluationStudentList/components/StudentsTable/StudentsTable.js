import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Divider,
  IconButton,
  TablePagination
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';

import { getInitials } from 'helpers';

import {
  Breadcrumbs,
} from '../../components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }

}));

const UsersTable = props => {
  const { className, users, selectedUser, setSelectedUser,  ...rest } = props;

  const classes = useStyles();

  // const [selectedUser, setSelectedUser] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const clickRow = (event, id) => {
    if(id === selectedUser)
      setSelectedUser("");
    else 
      setSelectedUser(id);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>

        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table >
              <TableHead>
                <TableRow>
              
                  <TableCell>Name</TableCell>
                  <TableCell>Student ID</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Latest Modified</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(0, rowsPerPage).map(user => (

                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={user.id}
                    selected={selectedUser === user.id }
                    onClick={event => clickRow(event, user.id)} 
                  >
                  
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={user.avatarUrl}
                        >
                          {getInitials(user.name)}
                        </Avatar>
                        <Typography variant="body1">{user.name}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.studentID}</TableCell>
                    <TableCell>{user.score}</TableCell>
                    <TableCell>
                      {moment(user.createdAt).format('DD/MM/YYYY')}
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={users.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default UsersTable;
