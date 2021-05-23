import {
  LOGIN, LOGOUT
  } from '../actions/types';
  
  const authenticateReducers= (state = {}, action) => {
    switch (action.type) {
      case LOGIN:         
        return {
          ...state,
          userSignedIn: true,
          userName:action.data.userName,
          userRole:action.data.userRole,
          isAdmin:action.data.isAdmin
        };
      case LOGOUT:
        return {
          ...state,
          userSignedIn: false,
          userName:'',
          role:'',
          isAdmin:''
        };
      
      default:
        return state;
    }
  };
  
  export default authenticateReducers;