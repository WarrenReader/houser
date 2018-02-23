import React, {Component} from 'react';
import './addnewlisting.css';
import Header from '../dashboard_header/dashboard_header.js';
import Header2 from '../addnewlisting-header/addnewlisting-header.js';

export default class AddNewListing extends Component {

   render() {

      return(
         <div className="add-new-listing-container">
            <Header />
            <Header2 />
         </div>
      )

   }
}