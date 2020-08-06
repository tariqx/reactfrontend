import React from 'react'
import { useRoutes, A } from "hookrouter";
import './App.css';
import DisplayProducs from "./components/DisplayProducts/DisplayProducts";
import AddProducts from "./components/AddProducts/AddProducts";
import DeleteProducts from "./components/DeleteProducts/DeleteProducts";
import UpdateProducts from "./components/UpdateProducts/UpdateProducts";


const routes = {
  "/allproducts": () => <DisplayProducs />,
  "/add": () => <AddProducts />,
  "/delete": () => <DeleteProducts />,
  "/update": () => <UpdateProducts />
};

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div>
      <div className="nav">
      <br />
        <A href="/allproducts">All products</A> <br />
        <A href="/add">Add product</A> <br />
        <A href="/delete">Delete product</A> <br />
        <A href="/update">Update product</A> <br />
      </div>
      <div className="body-content">
        {routeResult}
      </div>
    </div>);
}

export default App;
