import {
  CHANGE_EMAIL_VALUE,
  CHANGE_NAME_VALUE,
  CHANGE_PASSWORD_VALUE,
  CLEAR_ERRORS,
  HANDLE_SUCCESSUFUL_LOGIN,
  HANDLE_SUCCESSUFUL_REGISTER,
  RESET_SUCCESS_REGISTER,
  SET_ERRORS_LOGIN,
  SET_ERRORS_REGISTER,
  SET_LOADING_LOGIN,
  SET_LOADING_REGISTER,
  SET_UPDATE_ERRORS,
  SUBMIT_LOGOUT,
} from '../actions/authActions';

export const initialState = {
  userEmail: '',
  userName: '',
  userId: '',
  inputName: '',
  inputEmail: '',
  inputPassword: '',
  isConnected: false,
  isRegisterLoading: false,
  isSuccessfulRegister: false,
  isLoginLoading: false,
  errorsRegister: {},
  errorsLogin: {},
  updateErrors: {},
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
    case HANDLE_SUCCESSUFUL_LOGIN:
      return {
        ...state,
        userId: action.id,
        userName: action.name,
        userEmail: action.email,
        isConnected: true,
      };
    case HANDLE_SUCCESSUFUL_REGISTER:
      return {
        ...state,
        isSuccessfulRegister: true,
      };
    case SET_LOADING_REGISTER:
      return {
        ...state,
        isRegisterLoading: action.isLoading,
      };
    case SET_LOADING_LOGIN:
      return {
        ...state,
        isLoginLoading: action.isLoading,
      };
    case SET_ERRORS_REGISTER:
      return {
        ...state,
        errorsRegister: action.errors,
      };
    case SET_ERRORS_LOGIN:
      return {
        ...state,
        errorsLogin: action.errors,
      };
    case RESET_SUCCESS_REGISTER:
      return {
        ...state,
        isSuccessfulRegister: false,
      };
    case SUBMIT_LOGOUT:
      return {
        ...state,
        isConnected: false,
        isSuccessfulRegister: false,
        userEmail: '',
        userName: '',
        userId: '',
        inputName: '',
        inputEmail: '',
        inputPassword: '',
      };
    case SET_UPDATE_ERRORS:
      return {
        ...state,
        updateErrors: action.errors,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errorsRegister: {},
        errorsLogin: {},
        updateErrors: {},
      };
    default:
      return state;
  }
};

export default reducer;
