
import { FETCH_USERS, ADD_USER } from './types';
import axios from 'axios';


// GET users
export const fetchUsers = () => async (dispatch) => {
  try{
    await  axios.get('http://localhost:8082/users')
      .then(({ data }) => {
      dispatch( {
        type: FETCH_USERS,
        data
      });    
    }); 
  }catch (err) {
    console.error(err);
  }
};

// ADD user
export const addUser = (user) => async (dispatch) => {
  try {
   return axios.post('http://localhost:8082/users/create',user)
      .then(({ data }) => {
    dispatch({
      type: ADD_USER,
     data
    });
  });
  } catch (err) {
    console.error(err);
  }
};
