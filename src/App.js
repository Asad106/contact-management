import React from 'react';
import{BrowserRouter as Router , Route, Switch, Link } from 'react-router-dom'
import {Provider} from 'react-redux';
import Contact from './components/Contact';
import store from './redux/store';
import AddContact from "./components/addContact";
import EditContact from "./components/EditComponent";
import ViewContact from "./components/ViewComponent";

import Button from '@material-ui/core/Button';

import './App.css';


function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className="App">
                  <div style={{margin:50}}>
                      <Switch>
                          <Route exact path="/" component={Contact}/>
                          <Route  path="/addContact" component={AddContact}/>
                          <Route  path="/editContact/:id" component={EditContact}/>
                          <Route  path="/viewContact/:id" component={ViewContact}/>
                      </Switch>
                  </div>
              </div>
          </Router>

      </Provider>

  );
}

export default App;
