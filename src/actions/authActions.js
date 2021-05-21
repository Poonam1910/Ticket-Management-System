
import {
  SIGN_IN_ADMIN,
  SIGN_IN_USER,
  SIGN_OUT,
  TOGGLE_ROLE,
  TOGGLE_USER
} from './types';

export const signInAdmin = () => {
  return {
    type: SIGN_IN_ADMIN
  };
};

export const signInUser = (userId) => {
  return {
    type: SIGN_IN_USER,
    payload: userId,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const toggleRole = (role) => (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_ROLE,
      payload: role,
    });
  } catch (err) {
    console.error(err);
  }
};


export const toggleUser = (user) => (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_USER,
      payload: user,
    });
  } catch (err) {
    console.error(err);
  }
};
