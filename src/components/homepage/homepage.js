import React, {Component} from 'react';
import './homepage.css';
import Logo from '../images/houser.png';

export default class Homepage extends Component {

   render() {

      return (
         <div className="homepage-container white_bg">
            <img src={Logo} alt='Houser Logo' className='houser-logo'/>
            <span className="input-titles">Username</span>
            <input className="homepage-input-fields green-border"/>
            <span className="input-titles">Password</span>
            <input className="homepage-input-fields green-border" />
            <div className="buttons-wrapper">
               <button className="homepage-buttons login">Login</button>
               <button className=" homepage-buttons register">Register</button>
            </div>
         </div>
      )

   }
}