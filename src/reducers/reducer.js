import {
  FETCH_NOTES_ERROR,
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  ADD_NOTE,
  EDIT_NOTE,
  CHANGE_NOTE_VIEW,
  SAVE_SUCCESS,
} from '../actions';

const initialState = {
  loading: false,
  error: null,
  saved: false,
  notes: [''],
  sortedBy: '',
  currentDraft: '',
  creatingNote: false,
  preview: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_NOTES_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
      notes: [],
    };
  case FETCH_NOTES_REQUEST:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case FETCH_NOTES_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      notes: action.notes,
      currentDraft: action.notes[0],
    };
  case CHANGE_NOTE_VIEW:
    return {
      ...state,
      error: null,
      currentDraft: action.note,
      creatingNote: false
    };
  case ADD_NOTE:
    return {
      ...state,
      creatingNote: true,
    };
  case EDIT_NOTE:
    return {
      ...state,
      currentDraft: { 
        ...state.currentDraft,
        content: action.newDraft,
      }    
    };    
  case SAVE_SUCCESS:
    return {
      ...state,
      loading: false,
      saved: true,
      notes: action.notes,
      creatingNote: false
    };

  default:
    return state;
  }
};

export default reducer;

