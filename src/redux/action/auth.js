import { SIGN_IN } from '../reducers/auth/auth';

function signInUser(user) {
  return {
    type: SIGN_IN,
    user,
  };
}

export function dispatchSignInUser(user) {
  return dispatch => {
    dispatch(signInUser(user));
  };
}
