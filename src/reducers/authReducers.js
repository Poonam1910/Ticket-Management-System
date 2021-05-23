import {
  SIGN_IN_ADMIN,
  SIGN_IN_USER,
  SIGN_OUT
} from '../actions/types';


//USed for Simulation- Admin
const authReducers= (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN_ADMIN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
        role: 'Administrator',
        email: 'Test@test.com',
        name: 'Admin User',
      };
    case SIGN_IN_USER:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
        role: 'user',
        email: 'Test@test.com',
        name: 'User',
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        role: '',
        department: '',
      };
    default:
      return state;
  }
};

export default authReducers;