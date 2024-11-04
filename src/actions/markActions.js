export const CHANGE_SPACE_SELECT = 'CHANGE_SPACE_SELECT';
export const FETCH_SPACES = 'FETCH_SPACES';
export const FETCH_MARKS = 'FETCH_MARKS';
export const SAVE_SPACES = 'SAVE_SPACES';
export const SAVE_MARKS = 'SAVE_MARKS';
export const ADD_SPACE = 'ADD_SPACE';
export const ADD_MARK = 'ADD_MARK';
export const TOGGLE_ADD_MARK_MODAL = 'TOGGLE_ADD_MARK_MODAL';
export const TOGGLE_EDIT_MARK_MODAL = 'TOGGLE_EDIT_MARK_MODAL';
export const TOGGLE_ADD_SPACE_MODAL = 'TOGGLE_ADD_SPACE_MODAL';
export const TOGGLE_EDIT_SPACE_MODAL = 'TOGGLE_EDIT_SPACE_MODAL';
export const ACTIVATE_EDIT_MODE = 'ACTIVATE_EDIT_MODE';
export const DESACTIVATE_EDIT_MODE = 'DESACTIVATE_EDIT_MODE';
export const TOGGLE_REMOVE_SPACE_MODAL = 'TOGGLE_REMOVE_SPACE_MODAL';
export const TOGGLE_REMOVE_ACCOUNT_MODAL = 'TOGGLE_REMOVE_ACCOUNT_MODAL';

export const changeSpaceSelect = (space) => ({
  type: CHANGE_SPACE_SELECT,
  space,
});

export const fetchSpaces = () => ({
  type: FETCH_SPACES,
});

export const fetchMarks = () => ({
  type: FETCH_MARKS,
});

export const saveSpaces = (spaces) => ({
  type: SAVE_SPACES,
  spaces,
});

export const saveMarks = (marks) => ({
  type: SAVE_MARKS,
  marks,
});

export const addSpace = (spaceName) => ({
  type: ADD_SPACE,
  spaceName,
});
export const addMark = (mark) => ({
  type: ADD_MARK,
  mark,
});
export const toggleAddMarkModal = () => ({
  type: TOGGLE_ADD_MARK_MODAL,
});
export const toggleEditMarkModal = (mark = null) => ({
  type: 'TOGGLE_EDIT_MARK_MODAL',
  mark,
});
export const toggleAddSpaceModal = () => ({
  type: TOGGLE_ADD_SPACE_MODAL,
});
export const toggleEditSpaceModal = () => ({
  type: TOGGLE_EDIT_SPACE_MODAL,
});
export const activateEditMode = () => ({
  type: ACTIVATE_EDIT_MODE,
});
export const desactivateEditMode = () => ({
  type: DESACTIVATE_EDIT_MODE,
});
export const toggleRemoveSpaceModal = () => ({
  type: TOGGLE_REMOVE_SPACE_MODAL,
});
export const toggleRemoveAccountModal = () => ({
  type: TOGGLE_REMOVE_ACCOUNT_MODAL,
});
