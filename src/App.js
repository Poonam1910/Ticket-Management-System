import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import React from 'react';
import {Route,Redirect, BrowserRouter as Router,Switch} from 'react-router-dom'
import Navbar from './components/common/navbar';
import ErrorBoundry from './components/errorBoundry'
import TicketList from "./components/ticketList";
import { ToastContainer } from "react-toastify";
import TicketForm from './components/ticketForm';
import NotFound from './components/notFound'
import ContactUs from './components/contactUs'
import HomePage from './components/homePage'
import UserList from './components/userList';
import Footer from './components/common/footer'
import LoginForm from './components/loginForm';
import LogOut from './components/logout'

const App = () => {

  return (   
    <Router>
      <div className="ui container" style={{ backgroundColor:'antiquewhite'}}>         
      <ToastContainer />
      <ErrorBoundry>    
      <Navbar/> 
      <Switch>
          
      <Route path="/ticket/:id" component={TicketForm} />
      <Route path="/tickets"  component={TicketList} />
      <Route path="/users"  component={UserList} />
      <Route path="/contact" component={ContactUs} />  
      <Route path="/not-found" component={NotFound} /> 
      <Route path="/home"  component={HomePage} /> 
      <Route path="/login" component={LoginForm}/>
      <Route path="/logOut" component={LogOut}/>   
      <Redirect from="/" exact to="/home" />
       <Redirect to="/not-found" />
       </Switch> 
       <Footer /> 
       </ErrorBoundry>  
      </div>
    </Router>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     role: state.auth.role,
//     department: state.auth.department,
//     user: state.auth.user,
//     ticketTypes:state.tickets.types,    
//     priorities:state.tickets.priorities  
//   };
// };
 
// //export default connect(mapStateToProps,{})(App);


export default App;
