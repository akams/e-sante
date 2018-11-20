import { decodeJwt } from '../../../constants/jwt.utils';
export const SIGN_IN = 'SIGN_IN';

const initialState = {
  // auth: {},
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.warn('signin user from signIn: ', action.user);
      return {
        ...state,
        isAuthenticated: true,
        token: action.user.token,
        payload: decodeJwt(action.user.token),
      };
    default:
      return state;
  }
};
