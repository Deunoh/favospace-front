import {
  CHANGE_SPACE_SELECT,
  SAVE_MARKS,
  SAVE_SPACES,
  ADD_SPACE,
  ADD_MARK,
  ACTIVATE_EDIT_MODE,
  DESACTIVATE_EDIT_MODE,
  TOGGLE_REMOVE_SPACE_MODAL,
  TOGGLE_REMOVE_ACCOUNT_MODAL,
  TOGGLE_ADD_MARK_MODAL,
  TOGGLE_EDIT_MARK_MODAL,
  TOGGLE_ADD_SPACE_MODAL,
  TOGGLE_EDIT_SPACE_MODAL,
  SHOW_TOAST,
} from '../actions/markActions';

export const initialState = {
  markList: [],
  spaceList: [],
  spaceSelected: null,
  isEditMode: false,
  isAddSpaceModalOpen: false,
  isEditSpaceModalOpen: false,
  isAddMarkModalOpen: false,
  isEditMarkModalOpen: false,
  currentMarkToEdit: null,
  isRemoveSpaceModalOpen: false,
  isRemoveAccountModalOpen: false,
  toastMessage: null,
  isToastVisible: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        toastMessage: action.message,
        isToastVisible: true,
      };
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
    case TOGGLE_ADD_MARK_MODAL:
      return {
        ...state,
        isAddMarkModalOpen: !state.isAddMarkModalOpen,
      };
    case TOGGLE_EDIT_MARK_MODAL:
      return {
        ...state,
        isEditMarkModalOpen: !state.isEditMarkModalOpen,
        currentMarkToEdit: action.mark,
      };
    case TOGGLE_ADD_SPACE_MODAL:
      return {
        ...state,
        isAddSpaceModalOpen: !state.isAddSpaceModalOpen,
      };
    case TOGGLE_EDIT_SPACE_MODAL:
      return {
        ...state,
        isEditSpaceModalOpen: !state.isEditSpaceModalOpen,
      };
    case ACTIVATE_EDIT_MODE:
      return {
        ...state,
        isEditMode: true,
      };
    case DESACTIVATE_EDIT_MODE:
      return {
        ...state,
        isEditMode: false,
      };
    case TOGGLE_REMOVE_SPACE_MODAL:
      return {
        ...state,
        isRemoveSpaceModalOpen: !state.isRemoveSpaceModalOpen,
      };
    case TOGGLE_REMOVE_ACCOUNT_MODAL:
      return {
        ...state,
        isRemoveAccountModalOpen: !state.isRemoveAccountModalOpen,
      };
    default:
      return state;
  }
};

export default reducer;
