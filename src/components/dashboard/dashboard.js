import React, {Component} from 'react';
import './dashboard.css';
import DashboardHeader from '../dashboard_header/dashboard_header.js';

export default class Dashboard extends Component {

   render() {

      return (
         <div className="dashboard-container">
            <DashboardHeader />
            
            <button className="add-new-property">Add New Property</button>

            <div className="filer-container">
               <span className="filter-instructions">List properies with "desired rent" greater than: $</span>
               <input className="filter-input green-border" placeholder="0"/>
               <button className="dashboard-filter-button">Filter</button>
               <button className="dashboard-reset-button">Reset</button>
            </div>

            <div className="listings-title-container">
               <span className="listings-title">Home Listings</span>
            </div>

            <div className="results-container">
            </div>

         </div>
      )

   }
}