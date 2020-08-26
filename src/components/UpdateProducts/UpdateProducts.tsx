import React, { useState } from 'react';
import { useForm } from 'react-hooks-form';
import config from '../../config/config'
import axios from 'axios';
import { navigate } from 'hookrouter';
import styles from './UpdateProducts.module.css';
import { TextField, Button } from '@material-ui/core';
import IProduct from "../../interfaces/IProduct";

const UpdateProducts: React.FC = () => {

  let [divMessage, setDivMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();

  //create a product object out of interface  
  let product: IProduct = {
    ID: undefined,
    Name: '',
    Brand: ''
  };


  const submitForm = async (e) => {
    //supress the form submission
    e.preventDefault();
    //get the currenTarget dom elemnt 
    let curTarget = e.currentTarget;

    //initialize product object values...
    product.ID = curTarget.id.value;
    product.Name = curTarget.name.value;
    product.Brand = curTarget.brand.value;

    //format the values into an array 
    let formData = "[" + JSON.stringify(product) + "]";

    setDivMessage("Loading...");
    //send over single product in json format with the product id in the route
    await axios.put(config.products.api_endpoint + "/" + product.ID, formData, {
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
      <form onSubmit={submitForm}>
        <TextField id="id" name="id" label="Product ID" inputRef={register} /> <br />
        <TextField id="name" name="name" label="Model name" inputRef={register} /> <br />
        <TextField id="brand" name="brand" label="Brand Name" inputRef={register} /> <br /><br />
        <Button type="submit" variant="contained" color="primary">Update</Button>
      </form>
      <div>{divMessage}</div>
    </div>);
};

export default UpdateProducts;
