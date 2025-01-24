export const SET_LOADING = 'SET_LOADING';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_NAME_VALUE = 'CHANGE_NAME_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGOUT = 'SUBMIT_LOGOUT';
export const HANDLE_SUCCESSUFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
// Pour tourner la card si l'enregistrement est ok
export const HANDLE_SUCCESSUFUL_REGISTER = 'HANDLE_SUCCESSUFUL_REGISTER';
export const SET_LOADING_REGISTER = 'SET_LOADING_REGISTER';
export const SET_LOADING_LOGIN = 'SET_LOADING_LOGIN';
export const SET_ERRORS_REGISTER = 'SET_REGISTER_ERRORS';
export const SET_ERRORS_LOGIN = 'SET_ERRORS_LOGIN';
export const RESET_SUCCESS_REGISTER = 'RESET_SUCCESS_REGISTER';
export const DELETE_USER_ACCOUNT = 'DELETE_USER_ACCOUNT';
export const VERIFY_USER = 'VERIFY_USER';
export const SUBMIT_RESET_PASSWORD = 'SUBMIT_RESET_PASSWORD';
export const SUBMIT_NEW_PASSWORD = 'SUBMIT_NEW_PASSWORD';
export const UPDATE_USER_ACCOUNT = 'UPDATE_USER_ACCOUNT';
export const SET_UPDATE_ERRORS = 'SET_UPDATE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

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
  type: HANDLE_SUCCESSUFUL_REGISTER,
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
export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  isLoading,
});
export const submitResetPassword = (email) => ({
  type: SUBMIT_RESET_PASSWORD,
  email,
});
export const submitNewPassword = (token, password) => ({
  type: SUBMIT_NEW_PASSWORD,
  token,
  password,
});
export const updateUserAccount = (userInfos) => ({
  type: UPDATE_USER_ACCOUNT,
  userInfos,
});
export const setUpdateErrors = (errors) => ({
  type: SET_UPDATE_ERRORS,
  errors,
});
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
