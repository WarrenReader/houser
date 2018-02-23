import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';

// COMPONENTS
import Homepage from './components/homepage/homepage.js';
import Dashboard from './components/dashboard/dashboard.js';
import AddNewListing from './components/addnewlisting/addnewlisting.js';

export default (

   <HashRouter>
      <Switch>
         <Route exact path='/' component={Homepage}/>
         <Route path='/dashboard' component={Dashboard} />
         <Route path='/wizard/1' component={AddNewListing} />
      </Switch>
   </HashRouter>

)