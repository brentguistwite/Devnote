import {
  FETCH_NOTES_ERROR,
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  ADD_NOTE,
  EDIT_NOTE,
  CHANGE_NOTE_VIEW,
  SAVE_SUCCESS,
  UPDATE_NEW_NOTE_TITLE,
  UPDATE_NEW_NOTE_CONTENT,
  UPDATE_NEW_NOTE_TAGS,
} from '../actions';

const initialState = {
  loading: false,
  error: null,
  saved: false,
  notes: [''],
  sortedBy: '',
  newNote: {
    title: '',
    content: '',
    tags: [''],
  },
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
  console.log('hello from fetch notes req');
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
  console.log(action);
    return {
      ...state,
      loading: false,
      saved: true,
      notes: [ 
        ...state.notes,
        action.notes,
      ],
      creatingNote: false
    };
  case UPDATE_NEW_NOTE_TITLE:
    return {
      ...state,
      newNote: {
        ...state.newNote,
        title: action.title,
      }
    };
  case UPDATE_NEW_NOTE_CONTENT:
    return {
      ...state,
      newNote: {
        ...state.newNote,
        content: action.content,
      }
    };

  case UPDATE_NEW_NOTE_TAGS:
    return {
      ...state,
      newNote: {
        ...state.newNote,
        tags: action.tags,
      }
    };

  default:
    return state;
  }
};

export default reducer;

