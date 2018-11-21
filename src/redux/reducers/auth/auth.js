import { decodeJwt } from '../../../constants/jwt.utils';

// SignIn
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

//Get current user(me) from token in localStorage
export const ME_FROM_TOKEN = 'ME_FROM_TOKEN';
export const ME_FROM_TOKEN_SUCCESS = 'ME_FROM_TOKEN_SUCCESS';
export const ME_FROM_TOKEN_FAILURE = 'ME_FROM_TOKEN_FAILURE';

const initialState = {
  user: null,
  status: null,
  isAuthenticated: false,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  let error;
  switch (action.type) {
    case SIGNIN_USER:
      console.warn('signin user from signIn: ', { action });
      return { ...state, user: null, status: 'signin', error: null, loading: true };
    case SIGNIN_USER_SUCCESS:
      console.warn('signin user success: ', { action });
      return {
        ...state,
        accessToken: {
          jwt: action.payload.token,
        },
        user: decodeJwt(action.payload.token),
        status: 'authenticated',
        isAuthenticated: true,
        error: null,
        loading: false,
      };
    case SIGNIN_USER_FAILURE:
      console.warn('signin user failed: ', { action });
      error = action.payload.response.data || { message: action.payload.message };
      return {
        ...state,
        user: null,
        status: 'signin',
        error: error,
        loading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
