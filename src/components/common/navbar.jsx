import React, { Component,Fragment } from "react";
import { NavLink,Redirect,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SimAuth from '.././simAuth';

class Navbar extends Component {
  renderDemoBar() {    
 if (this.props.isSignedIn) {
      return (  
             
        <div id="logInUsrDetail" className="ui brown ribbon label">
            <label>SPARES CNX</label> <br/><br/>      
          <label><i className="user icon"></i>
          {this.props.user}</label>&nbsp;&nbsp;
          <label><i className="tags icon"></i>{this.props.role}</label>
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
                    
        </Fragment>
      );
   }
  }

  render() {
    return (
      <Fragment>
        <div className="ui menu">
          {this.renderDemoBar()}  
          {this.renderMenu()} 
          <div className="item" id="SimAuthBar" >
            <SimAuth />
          </div> 
          <div className="right menu">
          <Link to="/" className="item" >            
             <i className="home icon"></i> <h5>Home</h5>
            </Link>  
          <Link to="/contact" className="item">             
             <i className="phone icon"></i> <h5>Contact</h5>
            </Link>
           
        </div>
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