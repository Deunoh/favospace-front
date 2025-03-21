import { SET_LOADING } from '../actions/authActions';
import {
  CHANGE_SPACE_SELECT,
  SAVE_MARKS,
  SAVE_SPACES,
  ACTIVATE_EDIT_MODE,
  DESACTIVATE_EDIT_MODE,
  TOGGLE_REMOVE_SPACE_MODAL,
  TOGGLE_REMOVE_ACCOUNT_MODAL,
  TOGGLE_ADD_MARK_MODAL,
  TOGGLE_EDIT_MARK_MODAL,
  TOGGLE_ADD_SPACE_MODAL,
  TOGGLE_EDIT_SPACE_MODAL,
  SHOW_TOAST,
  HIDE_TOAST,
  SET_MARK_LOADING,
  TOGGLE_MODIFY_REMOVE_ACCOUNT_MODAL,
  TOGGLE_EXPERT_MODE,
} from '../actions/markActions';

export const initialState = {
  isLoading: false,
  isMarksLoading: false,
  markList: [],
  spaceList: [],
  spaceSelected: null,
  isEditMode: false,
  isAddSpaceModalOpen: false,
  isEditSpaceModalOpen: false,
  isAddMarkModalOpen: false,
  isEditMarkModalOpen: false,
  isModifyAccountModalOpen: false,
  currentMarkToEdit: null,
  isRemoveSpaceModalOpen: false,
  isRemoveAccountModalOpen: false,
  isExpertMode: false,
  // Toast notification
  toastMessage: null,
  isToastVisible: false,
  typeMessage: 'info',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case SET_MARK_LOADING:
      return {
        ...state,
        isMarksLoading: action.isLoading,
      };
    case SHOW_TOAST:
      return {
        ...state,
        toastMessage: action.message,
        isToastVisible: true,
        typeMessage: action.typeMessage,
      };
    case HIDE_TOAST:
      return {
        ...state,
        toastMessage: null,
        isToastVisible: false,
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
    case TOGGLE_MODIFY_REMOVE_ACCOUNT_MODAL:
      return {
        ...state,
        isModifyAccountModalOpen: !state.isModifyAccountModalOpen,
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
    case TOGGLE_EXPERT_MODE:
      return {
        ...state,
        isExpertMode: !state.isExpertMode,
      };
    default:
      return state;
  }
};

export default reducer;
