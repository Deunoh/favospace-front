import axios from 'axios';
import {
  handleSuccessfulLogin,
  handleSuccessfulRegister,
  setErrorsRegister,
  setLoadingRegister,
  SUBMIT_LOGIN,
  SUBMIT_SIGNIN,
} from '../actions/authActions';

const url = 'http://localhost:8000/api/';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_SIGNIN:
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
      axios
        .post(`${url}login_check`, {
          username: store.getState().user.inputEmail,
          password: store.getState().user.inputPassword,
        })
        .then((response) => {
          // console.log('LOGIN', response.data.data.firstname);
          // TODO enregistrer token dans cookie
          const userId = response.data.user.id;
          const userName = response.data.user.name;
          const userEmail = response.data.user.email;
          store.dispatch(handleSuccessfulLogin(userId, userName, userEmail));
        })
        .catch((error) => {
          console.log('error', error);
          console.log('error.response', error.response);
          console.log('error.response.status', error.response.status);
        });
      break;
    default:
  }
  next(action);
};

export default authMiddleware;
