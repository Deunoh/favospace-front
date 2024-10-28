import axios from 'axios';
import { SUBMIT_LOGIN, SUBMIT_SIGNIN } from '../actions/authActions';

const url = 'http://localhost:8000/api/';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_SIGNIN:
      axios
        .post(`${url}register`, {
          name: store.getState().user.inputName,
          email: store.getState().user.inputEmail,
          password: store.getState().user.inputPassword,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
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
          console.log(response);
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
