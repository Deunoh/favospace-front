import axios from 'axios';
import {
  FETCH_MARKS,
  FETCH_SPACES,
  saveMarks,
  saveSpaces,
} from '../actions/markActions';
// import { mockSpaceList, mockFavoritesList } from '../data/testData';

const url = 'http://localhost:8000/api/';

const favMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // case FETCH_SPACES:
    //   store.dispatch(saveSpaces(mockSpaceList));
    //   break;
    // case FETCH_MARKS:
    //   store.dispatch(saveMarks(mockFavoritesList));
    //   break;
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
          console.log('MARKS', response);

          store.dispatch(saveMarks(response.data.marks));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
  }
  next(action);
};

export default favMiddleware;
