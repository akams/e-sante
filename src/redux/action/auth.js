import axios from 'axios';
import ENV from '../../constants/environment/environment';

import { SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE } from '../reducers/auth/auth';
const RESOURCE = '/users';

const requestSignIn = payload => axios.post(ENV.apiUrl + `${RESOURCE}/login`, payload);

function signInUser() {
  return {
    type: SIGNIN_USER,
  };
}

function signInUserSuccess(user) {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user,
  };
}

function signInUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error,
  };
}

export function dispatchSignInUser(values) {
  return (dispatch, getState) => {
    dispatch(signInUser());
    requestSignIn(values)
      .then(result => {
        //Store JWT Token to browser session storage
        //If you use localStorage instead of sessionStorage, then this w/ persisted across tabs and new windows.
        // sessionStorage = persisted only in current tab
        sessionStorage.setItem('jwtToken', result.data.token);
        //let other components know that everything is fine by updating the redux` state
        console.warn('state before: ', getState());
        dispatch(signInUserSuccess(result.data)); //ps: this is same as dispatching RESET_USER_FIELDS
        console.warn('state after: ', getState());
      })
      .catch(error => {
        console.warn({ error });
        console.warn('state before: ', getState());
        dispatch(signInUserFailure(error));
        console.warn('state after: ', getState());
      });
  };
}

export function dispatchMeFromToken() {}
