import { CHANGE_SPACE_SELECT } from '../actions/markActions';

export const mockSpaceList = [
  {
    id: '1',
    name: 'Travail',
  },
  {
    id: '2',
    name: 'Personnel',
  },
  {
    id: '3',
    name: 'Projets',
  },
];

export const initialState = {
  markList: [],
  spaceList: mockSpaceList,
  spaceSelected: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SPACE_SELECT:
      return {
        ...state,
        spaceSelected: action.space,
      };
    default:
      return state;
  }
};

export default reducer;
