import React, { useState } from 'react';
import { useForm } from 'react-hooks-form'
import config from '../../config/config'
import axios from 'axios';
import { navigate } from 'hookrouter';
import styles from './DeleteProducts.module.css';
import { TextField, Button } from '@material-ui/core';

const DeleteProducts: React.FC = () => {

  let [divMessage, setDivMessage] = useState('');
  const { register } = useForm();

  const submitForm = async (e) => {
    //supress the form submission
    e.preventDefault();
    let id = e.currentTarget.id.value;
    setDivMessage("Loading...");
    //make delete call to remove an existing product 
    await axios.delete(config.products.api_endpoint + "/" + id)
      .then(data => {
        navigate("/allproducts");
      })
      .catch(err => {
        setDivMessage(err.message)
      });

  };

  return (
    <div>
      <h2>Delete Product By ID</h2>
      <form onSubmit={submitForm}>
        <TextField id="id" name="id" label="Enter product ID" inputRef={register} /><br /><br />
        <Button type="submit" variant="contained" color="primary">Delete</Button>
      </form>
      <div>{divMessage}</div>
    </div>
  );
};

export default DeleteProducts;
