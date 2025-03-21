import axios from 'axios';
import * as jwtDecode from 'jwt-decode';
import {
  DELETE_USER_ACCOUNT,
  handleSuccessfulLogin,
  handleSuccessfulRegister,
  setErrorLogin,
  setErrorsRegister,
  setLoadingLogin,
  setLoadingRegister,
  setUpdateErrors,
  SUBMIT_GOOGLE_LOGIN,
  SUBMIT_LOGIN,
  SUBMIT_NEW_PASSWORD,
  SUBMIT_REGISTER,
  SUBMIT_RESET_PASSWORD,
  submitLogout,
  UPDATE_USER_ACCOUNT,
  VERIFY_USER,
} from '../actions/authActions';
import { showToast, toggleModifyAccountModal } from '../actions/markActions';

// const url = 'http://localhost:8000/api/';
const url = 'https://api.favospace.fr/api/';

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
          .catch((error) => {
            // Token invalide ou expiré
            // localStorage.removeItem('token_jwt');
            store.dispatch(submitLogout());
            console.log(error);
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
    case SUBMIT_RESET_PASSWORD:
      axios
        .post(`${url}forgot-password`, { email: action.email })
        .then(() => {
          store.dispatch(
            showToast(
              'Email de réinitialisation du mot de passe envoyé, verifiez vos spams !'
            )
          );
        })
        .catch(() => {
          store.dispatch(
            showToast('Une erreur est survenue. Vérifiez votre email.', 'error')
          );
        });
      break;
    case SUBMIT_NEW_PASSWORD:
      axios
        .post(`${url}reset-password`, {
          token: action.token,
          password: action.password,
        })
        .then(() => {
          store.dispatch(showToast('Mot de passe réinitialisé avec succès.'));
        })
        .catch(() => {
          store.dispatch(
            showToast('Une erreur est survenue, veuillez réessayer', 'error')
          );
        });
      break;
    case UPDATE_USER_ACCOUNT:
      axios
        .put(`${url}modify-user`, action.userInfos, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          store.dispatch(
            handleSuccessfulLogin(
              response.data.user.id,
              response.data.user.name,
              response.data.user.email
            )
          );
          store.dispatch(showToast('Informations mises à jour avec succès'));
          store.dispatch(toggleModifyAccountModal());
        })
        .catch((error) => {
          store.dispatch(
            showToast('Une erreur est survenue lors de la mise à jour', 'error')
          );
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            console.log(error.response.data.errors);

            store.dispatch(setUpdateErrors(error.response.data.errors));
          }
        });
      break;
    case SUBMIT_GOOGLE_LOGIN: {
      store.dispatch(setLoadingLogin(true));

      // const decoded = jwt_decode(action.googleCredential);
      const decoded = (jwtDecode.default || jwtDecode.jwtDecode)(
        action.googleCredential
      );

      const { email, name } = decoded;

      axios
        .post(`${url}auth/google`, { email, name })
        .then((response) => {
          const { token } = response.data;
          console.log('googletoken', token);

          localStorage.setItem('token_jwt', token);
          store.dispatch(handleSuccessfulLogin(null, name, email));
        })
        .catch((error) => {
          console.error('Erreur Google login', error);
          store.dispatch(
            setErrorLogin({
              message: ['Échec de la connexion via Google.'],
            })
          );
        })
        .finally(() => {
          store.dispatch(setLoadingLogin(false));
        });

      break;
    }

    default:
  }
  next(action);
};

export default authMiddleware;
