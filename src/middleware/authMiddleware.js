import axios from 'axios';
import {
  DELETE_USER_ACCOUNT,
  handleSuccessfulLogin,
  handleSuccessfulRegister,
  setErrorLogin,
  setErrorsRegister,
  setLoadingLogin,
  setLoadingRegister,
  SUBMIT_LOGIN,
  SUBMIT_REGISTER,
  submitLogout,
  VERIFY_USER,
} from '../actions/authActions';
import { showToast } from '../actions/markActions';

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
          store.dispatch(
            showToast('Inscription réussie, veuillez vous connecter')
          );
        })
        .catch((error) => {
          store.dispatch(setLoadingRegister(false));
          store.dispatch(
            showToast(
              "Erreur lors de l'inscription, veuillez réessayer",
              'error'
            )
          );
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
    case VERIFY_USER:
      if (action.token) {
        axios
          .get(`${url}verify-user`, {
            headers: {
              Authorization: `Bearer ${action.token}`,
            },
          })
          .then((response) => {
            const userId = response.data.user.id;
            const userName = response.data.user.name;
            const userEmail = response.data.user.email;
            store.dispatch(handleSuccessfulLogin(userId, userName, userEmail));
          })
          .catch(() => {
            // Token invalide ou expiré
            localStorage.removeItem('token_jwt');
            store.dispatch(submitLogout());
          });
      }
      break;
    case SUBMIT_LOGIN:
      store.dispatch(setLoadingLogin(true));
      axios
        .post(`${url}login_check`, {
          username: store.getState().user.inputEmail,
          password: store.getState().user.inputPassword,
        })
        .then((response) => {
          const userId = response.data.user.id;
          const userName = response.data.user.name;
          const userEmail = response.data.user.email;
          store.dispatch(handleSuccessfulLogin(userId, userName, userEmail));
          localStorage.setItem('token_jwt', response.data.token);
          store.dispatch(setLoadingLogin(false));
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
    case DELETE_USER_ACCOUNT:
      axios
        .delete(`${url}delete-account`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then(() => {
          store.dispatch(submitLogout());
          localStorage.removeItem('token_jwt');
          console.log('Compte supprimé !');
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            showToast('Erreur lors de la suppression du compte.', 'error')
          );
        });
      break;

    default:
  }
  next(action);
};

export default authMiddleware;
