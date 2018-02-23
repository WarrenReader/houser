import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';

// COMPONENTS
import Homepage from './components/homepage/homepage.js';
import Dashboard from './components/dashboard/dashboard.js';

export default (

   <HashRouter>
      <div>
         <Route exact path='/' component={Homepage}/>
         <Route path='/dashboard' component={Dashboard} />
      </div>
   </HashRouter>

)