import React, {Component} from 'react';
import axios from 'axios';
import './homepage.css';
import Logo from '../images/houser.png';
import {connect} from 'react-redux';
import {updateUsername, updatePassword, login} from '../../ducks/reducer.js';

class Homepage extends Component {
constructor() {
   super();
   this.register = this.register.bind(this);
   this.login = this.login.bind(this);
}

   login() {
      const {username, password, login, history} = this.props
      login({username, password}, history);
   }

   register( ) {
      axios.post('http://localhost:7777/api/register', {username: this.props.username, password: this.props.password}).then((res) => console.log(res));
   }


   render() {
      const {username, updateUsername, updatePassword} = this.props;

      return (
         <div className="homepage-container white_bg">
            <img src={Logo} alt='Houser Logo' className='houser-logo'/>
            <span className="input-titles">Username</span>
            <input className="homepage-input-fields green-border" onChange={(e) => updateUsername(e.target.value)}/>
            <span className="input-titles">Password</span>
            <input className="homepage-input-fields green-border" onChange={(e) => updatePassword(e.target.value)} />
            <div className="buttons-wrapper">
               <button className="homepage-buttons login" onClick={this.login}>Login</button>
               <button className=" homepage-buttons register" onClick={this.register}>Register</button>
            </div>
         </div>
      )

   }
}

function mapStateToProps(state) {
   const {username, password} = state;

   return {
      username,
      password
   }
}

export default connect(mapStateToProps, {updateUsername, updatePassword, login})(Homepage);