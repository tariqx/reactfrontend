import React, { useState } from 'react';
import styles from './AddProducts.module.css';
import { Form, FormField} from 'react-hooks-form'
import config from '../../config/config'
import axios from 'axios';
import { navigate } from 'hookrouter';


//functional component 
const AddProducts: React.FC = () => {

  //used for displaying any message on the UI 
  let [divMessage, setDivMessage] = useState('');

  //async function to handle the asyn post api call 
  //will be triggered upon form submission
  const submitForm = async (values) => {
    //format the values into an array 
    let formData = "[" + JSON.stringify(values) + "]";

    setDivMessage("Loading...");
    await axios.post(config.products.api_endpoint, formData, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(data => {
      //when successful redirect users to display component 
      navigate("/allproducts");
    })
      .catch(err => {
        //display any errors to user
        setDivMessage(err.message)
      });

  };

  //simple form to collect user's input for a new product
  return (
    <div className={styles.AddProducts}>
      <h1>Add Product</h1>
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
        <button type="submit">Add Product</button>
      </Form>
      <div>{divMessage}</div>
    </div>);

};

export default AddProducts;
