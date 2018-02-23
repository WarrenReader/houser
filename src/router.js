import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';

import Homepage from './components/homepage/homepage.js';

export default (

   <HashRouter>
      <div>
         <Route exact path='/' component={Homepage}/>
      </div>
   </HashRouter>

)