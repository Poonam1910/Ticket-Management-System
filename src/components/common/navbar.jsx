import React, { Component,Fragment } from "react";
import { NavLink,Redirect,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SimAuth from '.././simAuth';

class Navbar extends Component {
  renderDemoBar() {    
 if (this.props.isSignedIn) {
      return (       
        <div id="logInUsrDetail" className="ui brown ribbon label">
          <p>SPARES CNX</p>
          <label>{this.props.user}</label><br/>
          <label>{this.props.role}</label>
        </div> 
        );
    } else {
      return (
        <></>   
      );
    }
  }

  renderMenu() {  
   if (this.props.isSignedIn) {
      return (
        <React.Fragment>                   
          <NavLink to="/tickets" className="item">
            <h3>Tickets</h3>
          </NavLink>
          <NavLink to="/users" className="item">
            <h3>Users</h3>
          </NavLink>
        </React.Fragment>
      );
    }
     else {
      return (
        <Fragment>
          <Redirect to="/" />
            <Link to="/" className="item">
              <h3>Home</h3>
            </Link>            
          </Fragment>
      );
   }
  }

  render() {
    return (
      <Fragment>
        <div className="ui container stackable menu">
          {this.renderDemoBar()}  
          {this.renderMenu()} 
          <div className="item"  id="SimAuthBar" style={{ paddingLeft: "500px",}}>
            <SimAuth />
          </div> 
          <Link to="/contact" className="right menu ">             
             <i className="phone icon"></i> <h4>Contact</h4>
            </Link>      
        </div>
      </Fragment>
       
     
    );
  }
}

const mapStateToProps = (state) => {
  return {      
    isSignedIn: state.auth.isSignedIn,
    role: state.auth.role,
    user: state.auth.name,
  };
};

export default connect(mapStateToProps)(Navbar);