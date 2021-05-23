import { Component } from "react";
import {LogOut} from "../actions/authenticateActions";
import { connect } from 'react-redux';

class Logout extends Component {
  componentDidMount() {
    this.props.LogOut();

    window.location = "/";
  }

  render() {
    return null;
  }
}
const mapStateToProps = (state) => {
  return { 
    userSignedIn: state.authenticate?state.authenticate.userSignedIn:false,
    userRole: state.authenticate?state.authenticate.userRole:'',
    userName: state.authenticate?state.authenticate.userName:''
  };
};

export default connect(mapStateToProps, { LogOut })(Logout)

//export default Logout;
