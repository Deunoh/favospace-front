export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_NAME_VALUE = 'CHANGE_NAME_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const SUBMIT_SIGNIN = 'SUBMIT_SIGNIN';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
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
export const submitSignin = () => ({
  type: SUBMIT_SIGNIN,
});
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});
