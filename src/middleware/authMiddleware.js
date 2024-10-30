import axios from 'axios';
import {
  handleSuccessfulLogin,
  handleSuccessfulRegister,
  setErrorLogin,
  setErrorsRegister,
  setLoadingLogin,
  setLoadingRegister,
  SUBMIT_LOGIN,
  SUBMIT_LOGOUT,
  SUBMIT_REGISTER,
} from '../actions/authActions';

const url = 'http://localhost:8000/api/';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_REGISTER:
      store.dispatch(setLoadingRegister(true));
      store.dispatch(setErrorsRegister({}));
      axios
        .post(`${url}register`, {
          name: store.getState().user.inputName,
          email: store.getState().user.inputEmail,
          password: store.getState().user.inputPassword,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(setLoadingRegister(false));
          store.dispatch(handleSuccessfulRegister());
        })
        .catch((error) => {
          store.dispatch(setLoadingRegister(false));
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            store.dispatch(setErrorsRegister(error.response.data.errors));
          }
          console.log(error);
        });
      // store.dispatch(handleSuccessfulSignin);
      break;
    case SUBMIT_LOGIN:
      store.dispatch(setLoadingLogin(true));
      axios
        .post(`${url}login_check`, {
          username: store.getState().user.inputEmail,
          password: store.getState().user.inputPassword,
        })
        .then((response) => {
          store.dispatch(setLoadingLogin(false));

          const userId = response.data.user.id;
          const userName = response.data.user.name;
          const userEmail = response.data.user.email;
          store.dispatch(handleSuccessfulLogin(userId, userName, userEmail));
          localStorage.setItem('token_jwt', response.data.token);
        })
        .catch((error) => {
          store.dispatch(setLoadingLogin(false));
          const invalidCredentials = error.response.status === 401;
          console.log(invalidCredentials);
          console.log(error);
          if (invalidCredentials) {
            store.dispatch(
              setErrorLogin({
                message: ['Email ou mot de passe incorrect'],
              })
            );
          } else {
            store.dispatch(
              setErrorLogin({
                message: ['Une erreur est survenue, veuillez réessayer'],
              })
            );
          }
        });
      break;
    default:
  }
  next(action);
};

export default authMiddleware;
