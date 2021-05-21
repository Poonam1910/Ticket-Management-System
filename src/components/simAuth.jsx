import React from 'react';
import { connect } from 'react-redux';
import { signInAdmin,signInUser, signOut } from '../actions/authActions';
import { Fragment } from 'react';

class SimAuth extends React.Component {
  handleAuthStatus = () => {
    if (this.props.isSignedIn) {
      this.props.signInAdmin();
    } else {
      this.props.signOut();
    }
  };

  handleSignInAdmin = () => {
    this.props.signInAdmin();
  };
  handleSignInUser = () => {
    this.props.signInUser();
  };

  handleSignOut = () => {
    this.props.signOut();
  };

  renderAuthButton() {
   if (this.props.isSignedIn === null) {
      return null;
    } 
    else if (this.props.isSignedIn) {
      return (
        <button className="ui yellow button" id="#SignOut" onClick={this.handleSignOut}>
          Sign Out
        </button>
      );
    } else {
      return (
        <Fragment >
         <div className="four wide column">
         <button className="ui brown button" id="SignInAdmin" onClick={this.handleSignInAdmin}>
          Sign in (Admin)</button>
         </div> 
         <div>  
        <button className="ui brown button" id="SignInUser" onClick={this.handleSignInUser}>
        Sign in (User)
        </button></div>  
        </Fragment>
      );
    }
  }

  render() {
    return <Fragment>{this.renderAuthButton()}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  return { 
    isSignedIn: state.auth.isSignedIn 
  };
};

export default connect(mapStateToProps, { signInAdmin,signInUser, signOut })(SimAuth)