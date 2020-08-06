import React, { useState } from 'react';
import { Form, FormField } from 'react-hooks-form'
import config from '../../config/config'
import axios from 'axios';
import { navigate } from 'hookrouter';
import styles from './DeleteProducts.module.css';

const DeleteProducts: React.FC = () => {

  let [divMessage, setDivMessage] = useState('');

  const submitForm = async (values) => {
    let id = values.ID;

    setDivMessage("Loading...");
    //make delete call to remove an existing product 
    await axios.delete(config.products.api_endpoint + "/"+ id)
    .then(data => {
      navigate("/allproducts");
    })
      .catch(err => {
        setDivMessage(err.message)
      });

  };

return (
  <div className={styles.DeleteProducts}>
      <h1>Delete Product By ID</h1>
    <Form onSubmit={submitForm}>
        <label>
          ID:
        <FormField component="input" name="ID" type="text" /></label> <br />
        <br />
        <button type="submit">Delete Product by ID</button>
      </Form>
      <div>{divMessage}</div>
  </div>
);

};

export default DeleteProducts;
