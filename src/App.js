import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import React from 'react';
import {Route,Redirect, BrowserRouter as Router,Switch} from 'react-router-dom'
import Navbar from './components/common/navbar';
//import history from './util/history';
import ErrorBoundry from './components/errorBoundry'
import TicketList from "./components/ticketList";
import { ToastContainer } from "react-toastify";
import TicketForm from './components/ticketForm';
import NotFound from './components/notFound'
import ContactUs from './components/contactUs'
import HomePage from './components/homePage'
import UserList from './components/userList';

const App = () => {
  return (   
    <Router>
      <div className="ui container">         
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
      <Redirect from="/" exact to="/home" />
       <Redirect to="/not-found" />
       </Switch>  
       </ErrorBoundry>  
      </div>
    </Router>
  );
};

export default App;
