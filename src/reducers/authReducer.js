import constants from '../constants/actionTypes';

const initialState = {
  loggedIn: Boolean(localStorage.getItem('token')),
  username: localStorage.getItem('username') || '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_LOGGEDIN:
      return {
        ...state,
        loggedIn: true,
        username: action.username,
      };
    case constants.USER_LOGOUT:
      return {
        ...state,
        loggedIn: false,
        username: '',
      };
    default:
      return state;
  }
};

export default authReducer;
