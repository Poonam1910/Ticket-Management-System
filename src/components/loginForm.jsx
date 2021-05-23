import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import {LogIn} from "../actions/authenticateActions";
import { connect } from 'react-redux';

class LoginForm extends Form {
  state = {
    data: { userName: "", password: "" },
    errors: {}
  };

  schema = {
    userName: Joi.string()
      .required(),
    password: Joi.string()
      .required()
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await this.props.LogIn(data.userName, data.password);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
   if(this.props.userSignedIn) return <Redirect to="/" />;
    return ( 
      <div style={{width: "50%",paddingLeft: "30%",paddingBottom: "30px"
    }}>  
        <h1 style={{textAlign:"center"}}>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("text","userName", "User Name","")}
          {this.renderInput("password","password", "Password", "")}<br/>
          {this.renderButton("Login")}
        </form>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    userSignedIn: state.authenticate?state.authenticate.userSignedIn:false,
    userRole: state.authenticate?state.authenticate.userRole:'',
    userName: state.authenticate?state.authenticate.userName:''
  };
};

export default connect(mapStateToProps, { LogIn })(LoginForm)

