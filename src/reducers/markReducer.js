import {
  CHANGE_SPACE_SELECT,
  SAVE_MARKS,
  SAVE_SPACES,
  ADD_SPACE,
} from '../actions/markActions';

export const initialState = {
  markList: [],
  spaceList: [],
  spaceSelected: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SPACE_SELECT:
      return {
        ...state,
        spaceSelected: action.space,
      };
    case SAVE_SPACES:
      return {
        ...state,
        spaceList: action.spaces,
      };
    case SAVE_MARKS:
      return {
        ...state,
        markList: action.marks,
      };
    case ADD_SPACE:
      return {
        ...state,
        spaceList: [
          ...state.spaceList,
          { id: Date.now().toString(), name: action.spaceName },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
