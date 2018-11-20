import { decodeJwt } from '../../../constants/jwt.utils';
export const SIGN_IN = 'SIGN_IN';

const initialState = {
  // auth: {},
  isAuthenticating: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.warn('signin user from signIn: ', action.user);
      return {
        ...state,
        isAuthenticating: true,
        token: action.user.token,
        payload: decodeJwt(action.user.token),
      };
    default:
      return state;
  }
};
