import {
  CHANGE_EMAIL_VALUE,
  CHANGE_NAME_VALUE,
  CHANGE_PASSWORD_VALUE,
  HANDLE_SUCCESSFUL_REGISTER,
  HANDLE_SUCCESSUFUL_LOGIN,
  RESET_SUCCESS_REGISTER,
  SET_ERRORS_REGISTER,
  SET_LOADING_LOGIN,
  SET_LOADING_REGISTER,
} from '../actions/authActions';

export const initialState = {
  userEmail: '',
  userName: '',
  userId: '',
  inputName: '',
  inputEmail: '',
  inputPassword: '',
  isConnected: false,
  isSuccessfulRegister: false,
  isRegisterLoading: false,
  isLoginLoading: false,
  errorsRegister: {},
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
    case HANDLE_SUCCESSFUL_REGISTER:
      return {
        ...state,
        isSuccessfulRegister: true,
      };
    case RESET_SUCCESS_REGISTER:
      return {
        ...state,
        isSuccessfulRegister: false,
      };
    default:
      return state;
  }
};

export default reducer;
