import React from 'react';
import ShopDetails from './Components/ShopDetailsForm/ShopDetails'
import SD from './Components/ShopDetailsForm/SD'
import UserDetails from './Components/UserDetailsForm/UserDetails'
import AddProduct from './Components/AddProductForm/AddProduct'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className="App">
            <SD />
          </div>
        </Route>  
        <Route exact path='/UserDetails'>
          <div className="App">
            <UserDetails />
          </div>
        </Route> 
        <Route exact path='/AddProduct'>
          <div className="App">
            <AddProduct />
          </div>
        </Route> 
      </Switch>
    </Router>
  );
}

export default App;
