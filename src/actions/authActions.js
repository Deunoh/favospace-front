export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_NAME_VALUE = 'CHANGE_NAME_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGOUT = 'SUBMIT_LOGOUT';
export const HANDLE_SUCCESSUFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
export const HANDLE_SUCCESSFUL_REGISTER = 'HANDLE_SUCCESSFUL_REGISTER';
export const SET_LOADING_REGISTER = 'SET_LOADING_REGISTER';
export const SET_LOADING_LOGIN = 'SET_LOADING_LOGIN';
export const SET_ERRORS_REGISTER = 'SET_REGISTER_ERRORS';
export const SET_ERRORS_LOGIN = 'SET_ERRORS_LOGIN';
export const RESET_SUCCESS_REGISTER = 'RESET_SUCCESS_REGISTER';
export const DELETE_USER_ACCOUNT = 'DELETE_USER_ACCOUNT';
export const VERIFY_USER = 'VERIFY_USER';
export const changeEmailValue = (inputEmail) => ({
  type: CHANGE_EMAIL_VALUE,
  inputEmail,
});

export const changeNameValue = (inputName) => ({
  type: CHANGE_NAME_VALUE,
  inputName,
});

export const changePasswordValue = (inputPassword) => ({
  type: CHANGE_PASSWORD_VALUE,
  inputPassword,
});
export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});
export const submitLogout = () => ({
  type: SUBMIT_LOGOUT,
});
export const handleSuccessfulLogin = (id, name, email) => ({
  type: HANDLE_SUCCESSUFUL_LOGIN,
  id,
  name,
  email,
});
export const handleSuccessfulRegister = () => ({
  type: HANDLE_SUCCESSFUL_REGISTER,
});
export const setLoadingRegister = (isLoading) => ({
  type: SET_LOADING_REGISTER,
  isLoading,
});
export const setLoadingLogin = (isLoading) => ({
  type: SET_LOADING_LOGIN,
  isLoading,
});
export const setErrorsRegister = (errors) => ({
  type: SET_ERRORS_REGISTER,
  errors,
});
export const setErrorLogin = (errors) => ({
  type: SET_ERRORS_LOGIN,
  errors,
});
export const resetSuccessRegister = () => ({
  type: RESET_SUCCESS_REGISTER,
});
export const deleteAccountUser = () => ({
  type: DELETE_USER_ACCOUNT,
});
export const verifyUser = (token) => ({
  type: VERIFY_USER,
  token,
});
