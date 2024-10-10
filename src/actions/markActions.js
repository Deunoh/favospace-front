export const CHANGE_SPACE_SELECT = 'CHANGE_SPACE_SELECT';
export const FETCH_SPACES = 'FETCH_SPACES';
export const FETCH_MARKS = 'FETCH_MARKS';
export const SAVE_SPACES = 'SAVE_SPACES';
export const SAVE_MARKS = 'SAVE_MARKS';

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
