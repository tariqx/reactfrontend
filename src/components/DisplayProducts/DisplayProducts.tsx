import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/config'
import styles from './DisplayProducts.module.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableRow, TableBody, TableCell, TableContainer, TableHead } from '@material-ui/core';

//add styles to table cells
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

//styles for table rows
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

//styles for over table 
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


function DisplayProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(config.products.api_endpoint)
      .then(response => {
        setProducts(response.data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []) //empty [] indicates to run this effect hook once and no need to keep re-running 

  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Brand</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                {row.id.toString().trim()}
              </StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.brand}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>);

};

export default DisplayProducts;