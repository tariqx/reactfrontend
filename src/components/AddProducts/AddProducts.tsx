import React, { useState } from 'react';
import styles from './AddProducts.module.css';
import { useForm } from 'react-hooks-form';
import config from '../../config/config'
import axios from 'axios';
import { navigate } from 'hookrouter';
import { TextField, Button } from '@material-ui/core';
import IProduct from "../../interfaces/IProduct"


//functional component 
const AddProducts: React.FC = () => {

  //used for displaying any message on the UI 
  let [divMessage, setDivMessage] = useState('');
  const { register, errors } = useForm();

  //create a product object out of interface  
  let product: IProduct = {
    Name: '',
    Brand: ''
  };

  //async function to handle the asyn post api call 
  //will be triggered upon form submission

  const submitForm = async (e) => {
    //suppress the form submission
    e.preventDefault();
    let curTarget = e.currentTarget;
    //initialize product object values...
    product.Name = curTarget.name.value;
    product.Brand = curTarget.brand.value;
    
    //format the values into an array 
    let formData = "[" + JSON.stringify(product) + "]";

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
      <form onSubmit={submitForm}>
          <TextField id="name" name="name" label="Model Name" inputRef = {register} /> <br />
          <TextField id="brand" name="brand" label="Brand Name" inputRef = {register} /> <br /><br />
          <Button type="submit" variant="contained" color="primary">Add</Button>
      </form>
      <div>{divMessage}</div>
    </div>);

};

export default AddProducts;
