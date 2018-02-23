import React, {Component} from 'react';
import './addnewlisting-header.css';

export default class NewListingHeader extends Component {

   render() {
      
      return(
         <div className="new-listing-header-container">
            <span className="new-listing-header-title">Add New Listing</span>
            <button className="cancel-button">Cancel</button>
         </div>
      )

   }
}