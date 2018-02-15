import {
  FETCH_NOTES_ERROR,
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  ADD_NOTE,
  EDIT_NOTE,
  CHANGE_NOTE_VIEW,
} from '../actions';

const initialState = {
  error: null,
  loading: false,
  notes: [''],
  sortedBy: '',
  currentDraft: '',
  preview: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_NOTES_ERROR:
    return {
      ...state,
      error: action.error,
      loading: false,
      notes: [],
    };
  case FETCH_NOTES_REQUEST:
    console.log('req made');
    return {
      ...state,
      error: null,
      loading: true,
    };
  case FETCH_NOTES_SUCCESS:
    return {
      ...state,
      error: null,
      loading: false,
      notes: action.notes,
      currentDraft: action.notes[0],
    };
  case CHANGE_NOTE_VIEW:
    return {
      ...state,
      error: null,
      loading: false,
      currentDraft: action.note,
    };
  case ADD_NOTE:
    return {
      ...state,
      notes: action.notes,
    };
  case EDIT_NOTE:
    return {
      ...state,
      currentDraft: action.newDraft,
    };
  default:
    return state;
  }
};

export default reducer;

