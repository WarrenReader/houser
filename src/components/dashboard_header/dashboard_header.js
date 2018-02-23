import React, {Component} from 'react';
import './dashboard_header.css';
import SmallLogo from '../images/small-houser.png';

export default class DashboardHeader extends Component {

   render() {

      return(
         <div className='dashboard_header_wrapper'>
            <div className="dashboard-header-content-wrapper">
               <div className="header-container-left">
                  <img src={SmallLogo} alt="Houser Logo"/>
                  <span className="header-houser-text">Houser</span>
                  <span className="header-dashboard-text">Dashboard</span>
               </div>
               <div className="header-container-right">
                  <span className="header-logout">Logout</span>
               </div>
            </div>
         </div>
      )

   }
}