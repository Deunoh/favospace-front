import {
  CHANGE_EMAIL_VALUE,
  CHANGE_NAME_VALUE,
  CHANGE_PASSWORD_VALUE,
} from '../actions/authActions';

export const initialState = {
  email: '',
  name: '',
  inputName: '',
  inputEmail: '',
  inputPassword: '',
  isConnected: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EMAIL_VALUE:
      return {
        ...state,
        inputEmail: action.inputEmail,
      };
    case CHANGE_NAME_VALUE:
      return {
        ...state,
        inputName: action.inputName,
      };
    case CHANGE_PASSWORD_VALUE:
      return {
        ...state,
        inputPassword: action.inputPassword,
      };
    default:
      return state;
  }
};

export default reducer;
