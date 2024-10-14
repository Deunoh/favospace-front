import {
  CHANGE_SPACE_SELECT,
  SAVE_MARKS,
  SAVE_SPACES,
  ADD_SPACE,
  ADD_MARK,
} from '../actions/markActions';

export const initialState = {
  markList: [],
  spaceList: [],
  spaceSelected: '',
  isSpaceModalOpen: false,
  isMarkModalOpen: false,
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
    case ADD_MARK:
      return {
        ...state,
        markList: [
          ...state.markList,
          {
            id: Date.now().toString(),
            name: action.mark.name,
            url: action.mark.url,
            spaceId: state.spaceSelected, // Associe le mark à l'espace actuellement sélectionné
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
