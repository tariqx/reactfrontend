import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/config'
import styles from './DisplayProducts.module.css';

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

  //setup table structure 
  const setupTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    )
  }

  //setup table rows based on the products array
  const renderRows = () => {
    return products.map((value, idx) => {
      return (
        <tr key={idx}>
          <td>{value.id.toString().trim()}</td>
          <td>{value.name}</td>
          <td>{value.brand}</td>
        </tr>
      )
    });
  }

  //render our data based on certain conditions
  const renderData = () => {
    if (error) {
      return (
        error
        );
    } else {
      //if no error, otherwise return regular content
      if (products.length > 0) {
        return (
          setupTable()
        );
      }
      else {
        return (
          <h2>No products!</h2>
        );
      }
    };
  }

  return (<div className="card">{renderData()}</div>);

};

export default DisplayProducts;