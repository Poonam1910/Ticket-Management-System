import {
  FETCH_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../actions/types';

import { INITIAL_STATE_USERS } from '../seeders/usersInitialState';

const userReducers= (state=INITIAL_STATE_USERS , action) => {

  switch (action.type) {
    case FETCH_USERS:
      return {...state,
          users:[...action.data]
        };  
           
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_USER:
      return {
        state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case DELETE_USER:
      return {
        state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
export default userReducers;
