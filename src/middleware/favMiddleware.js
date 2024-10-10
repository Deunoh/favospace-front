import {
  FETCH_MARKS,
  FETCH_SPACES,
  saveMarks,
  saveSpaces,
} from '../actions/markActions';
import { mockSpaceList, mockFavoritesList } from '../data/testData';

const favMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SPACES:
      store.dispatch(saveSpaces(mockSpaceList));
      break;
    case FETCH_MARKS:
      store.dispatch(saveMarks(mockFavoritesList));
      break;
    default:
  }
  next(action);
};

export default favMiddleware;
