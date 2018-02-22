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
  TOGGLE_MARKDOWN_VIEW,
  HIDE_NOTE_LIST,
  UPDATE_SEARCH,
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
  currentDraft: {
    title: '',
    content: '',
    tags: [''],
    id: null,
  },
  creatingNote: false,
  markdownView: false,
  hideNoteList: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_SEARCH:
    return{
      ...state,
      sortedBy: action.searchParams,
    };
  case HIDE_NOTE_LIST:
    return {
      ...state,
      hideNoteList: !state.hideNoteList,
    };
  case TOGGLE_MARKDOWN_VIEW:
    return {
      ...state,
      loading: false,
      error: null,
      markdownView: !state.markdownView,
    };
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

  // fix conditional that says if no notes then ''
    if (!state.currentDraft.id) {
      return {
        ...state,
        loading: false,
        error: null,
        notes: action.notes,
        currentDraft: action.notes[0],
      };
    } else {
      return {
        ...state,
        loading: false,
        error: null,
        notes: action.notes,
      };
    }
    
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
      notes: [ 
        ...state.notes,
        action.notes,
      ],
      creatingNote: false,
      currentDraft: action.notes,
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

