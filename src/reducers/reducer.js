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
  DELETE_NOTE_SUCCESS
} from '../actions';
import CHEAT_SHEET from '../components/CHEAT_SHEET';

const initialState = {
  loading: false,
  error: null,
  saved: false,
  creatingNote: false,
  markdownView: false,
  hideNoteList: false,
  notes: [''],
  sortedBy: '',
  newNote: {
    title: '',
    content: '',
    tags: [''],
  },
  currentDraft: {
    title: '',
    content: 
      `<p hidden />
===========================>See the power of markdown by checking "Preview notes"<===========================

<h1 style="text-align:center; font-size: 50px;" />Devnote 
<h2 />A note-taking app for programmers with a focus on markdown and a simple, yet elegant design.
      
      
---
Writing code in your notes ==feelsgoodman.==
\n\`\`\` js
const devNote = "My favorite note taking app!";

function isDevnoteRightForMe(human) {
  if (human.questions === "Why should I use Devnote over my current note taking app? ") {
      return "Devnote is an open source note taking app made with developers in mind!";
  } else if (human.questions === "Im not a developer, is Devnote for me?") {
      return "Absolutely, anyone can make their notes better with an extremely minimal amount of markdown syntax. Heck, you could not use at all an your notes will still look better!";
    }
};
\`\`\`
![happy](https://media.giphy.com/media/bSqqbVjGFtQ2c/giphy.gif)`,
    tags: [''],
    id: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case DELETE_NOTE_SUCCESS:
    return {
      ...state,
      currentDraft: state.notes[0]
    };
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
    if (action.notes.length === 0) {
      return {
        ...state,
        loading: false,
        error: null,
        notes: [
          CHEAT_SHEET,
          ...action.notes,
        ],
      };
    } else {
      return {
        ...state,
        loading: false,
        error: null,
        notes: [
          ...action.notes,
        ],
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

