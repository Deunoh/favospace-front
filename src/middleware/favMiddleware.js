import axios from 'axios';
import {
  ADD_MARK,
  ADD_SPACE,
  DELETE_MARK,
  DELETE_SPACE,
  desactivateEditMode,
  FETCH_MARKS,
  FETCH_SPACES,
  fetchMarks,
  fetchSpaces,
  saveMarks,
  saveSpaces,
  showToast,
  UPDATE_MARK,
  UPDATE_SPACE,
} from '../actions/markActions';
import { setLoading } from '../actions/authActions';
// import { mockSpaceList, mockFavoritesList } from '../data/testData';

const url = 'http://localhost:8000/api/';

const favMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SPACES:
      axios
        .get(`${url}space/browse`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then((response) => {
          store.dispatch(saveSpaces(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_MARKS: {
      axios
        .get(`${url}space/${action.spaceId}/marks`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then((response) => {
          store.dispatch(saveMarks(response.data.marks));
          store.dispatch(setLoading(false));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setLoading(false));
        });
      break;
    }
    case ADD_MARK:
      axios
        .post(`${url}mark/add`, action.mark, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then((response) => {
          store.dispatch(fetchMarks(action.mark.spaceId));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            showToast("Erreur lors de l'ajout du favoris", 'error')
          );
        });
      break;
    case ADD_SPACE:
      axios
        .post(
          `${url}space/add`,
          { name: action.spaceName },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          store.dispatch(fetchSpaces());
          store.dispatch(showToast('Nouvel espace créé !'));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            showToast("Erreur lors de l'ajout de l'espace", 'error')
          );
        });
      break;
    case DELETE_SPACE:
      axios
        .delete(`${url}space/${action.spaceId}/delete`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then((response) => {
          store.dispatch(showToast('Espace supprimé avec succès'));
          store.dispatch(fetchSpaces());
          store.dispatch(desactivateEditMode());
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(
            showToast("Erreur lors de la suppression de l'espace", 'error')
          );
        });
      break;
    case DELETE_MARK:
      axios
        .delete(`${url}mark/${action.markId}/delete`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then((response) => {
          store.dispatch(fetchMarks(action.spaceId));
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(
            showToast('Erreur lors de la suppression du favoris', 'error')
          );
        });
      break;
    case UPDATE_SPACE:
      axios
        .patch(
          `${url}space/${action.spaceId}/edit`,
          { name: action.newName },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          store.dispatch(fetchSpaces());
          store.dispatch(desactivateEditMode());
          store.dispatch(showToast('Espace renommé !'));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            showToast("Erreur lors de la modification de l'espace", 'error')
          );
        });
      break;
    case UPDATE_MARK:
      axios
        .patch(
          `${url}mark/${action.markId}/edit`,
          { name: action.newName, url: action.newUrl },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          store.dispatch(fetchMarks(action.currentSpaceId));
          store.dispatch(desactivateEditMode());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            showToast("Erreur lors de la modification de l'espace", 'error')
          );
        });
      break;

    default:
  }
  next(action);
};

export default favMiddleware;
