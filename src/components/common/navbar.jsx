import React, { Component,Fragment } from "react";
import { NavLink,Redirect,Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import SimAuth from '.././simAuth';

class Navbar extends Component {
  renderDemoBar() {    
 if (this.props.userSignedIn) {
      return (               
        <div id="logInUsrDetail" className="ui brown ribbon label">
            <label>SPARES CNX</label> <br/><br/>      
          <label><i className="user icon"></i>
          {this.props.userName}</label>&nbsp;&nbsp;
          <label><i className="tags icon"></i>{this.props.userRole}</label>
        </div> 
        );
    } else {
      return (
        <div id="logInUsrDetail" className="ui brown ribbon label">
        <label>SPARES CNX</label> <br/><br/>  
        </div>
      );
    }
  }

  renderMenu() {  
   if (this.props.userSignedIn) {
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
            {/* <SimAuth /> */}
          </div> 
          <div className="right menu">
          <Link to="/" className="item" >            
             <i className="home icon"></i> <h5>Home</h5>
            </Link>  
          <Link to="/contact" className="item">             
             <i className="phone icon"></i> <h5>Contact</h5>
            </Link>
            {
              this.props.userSignedIn?
              <Link to="/logOut" className="item" id="logout">             
              <i className="sign out icon"></i> <h5>Log Out</h5>
             </Link>: 
             <Link to="/login" className="item"  id="login">             
             <i className="sign in icon"></i> <h5>Log In</h5>
            </Link>
            }           
        </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {      
    // isSignedIn: state.auth.isSignedIn,
    // role: state.auth.role,
    // user: state.auth.name,
    userSignedIn: state.authenticate?state.authenticate.userSignedIn:false,
    userRole: state.authenticate?state.authenticate.userRole:'',
    userName: state.authenticate?state.authenticate.userName:''

  };
};

export default connect(mapStateToProps)(Navbar);