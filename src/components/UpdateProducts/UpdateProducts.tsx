import React, { useState } from 'react';
import { Form, FormField } from 'react-hooks-form'
import config from '../../config/config'
import axios from 'axios';
import { navigate } from 'hookrouter';
import styles from './UpdateProducts.module.css';

const UpdateProducts: React.FC = () => {

  let [divMessage, setDivMessage] = useState('');

  const submitForm = async (values) => {
    let formData = JSON.stringify(values);

    setDivMessage("Loading...");
    //send over single product in json format with the product id in the route
    await axios.put(config.products.api_endpoint + "/" + values.ID, formData, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(data => {
      navigate("/allproducts");
    })
      .catch(err => {
        setDivMessage(err.message)
      });
  };


  return (
    <div className={styles.UpdateProducts}>
      <h1>Update Product</h1>
      <Form onSubmit={submitForm}>
        <label>
          ID:
        <FormField component="input" name="ID" type="text" /></label> <br />
        <label>
          Name:
        <FormField component="input" name="Name" type="text" /></label> <br />
        <label>
          Brand:
        <FormField component="input" name="Brand" type="text" /></label> <br /><br />
        <button type="submit">Update Product</button>
      </Form>
      <div>{divMessage}</div>
    </div>);
};

export default UpdateProducts;
