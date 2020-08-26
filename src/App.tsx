import React from 'react'
import { useRoutes, useRedirect } from "hookrouter";
import './App.css';
import { Grid, List, ListItem, ListItemText, Avatar, ListItemAvatar } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
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
  //redirect all rool level request to /allproducts route
  useRedirect('/', '/allproducts');
  const routeResult = useRoutes(routes);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid>
          <List>
            <ListItem component="a" href="/allproducts">
              <ListItemAvatar>
                <Avatar>
                  <AllInclusiveIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="All products" />
            </ListItem>
          </List>
          <List>
            <ListItem component="a" href="/add">
              <ListItemAvatar>
                <Avatar>
                  <AddCircleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Add" />
            </ListItem>
          </List>
          <List>
            <ListItem component="a" href="/delete">
              <ListItemAvatar>
                <Avatar>
                  <DeleteIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
          </List>
          <List>
            <ListItem component="a" href="/update">
              <ListItemAvatar>
                <Avatar>
                  <UpdateIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Update" />
            </ListItem>
          </List>
        </Grid>
        <Grid>
          {routeResult}
        </Grid>
      </Grid>
    </div>);
}

export default App;
