import apiUrl from '../config';

export const EDIT_NOTE = 'EDIT_NOTE';
export const editNote = newDraft => ({
  type: EDIT_NOTE,
  newDraft,
});

export const HIDE_NOTE_LIST = 'HIDE_NOTE_LIST';
export const hideNoteList = () => ({
  type: HIDE_NOTE_LIST,
});

export const TOGGLE_MARKDOWN_VIEW = 'TOGGLE_MARKDOWN_VIEW';
export const toggleMarkdownView = () => ({
  type: TOGGLE_MARKDOWN_VIEW,
});

export const CHANGE_NOTE_VIEW = 'CHANGE_NOTE_VIEW';
export const changeNoteView = note => ({
  type: CHANGE_NOTE_VIEW,
  note,
});

export const FETCH_NOTES_REQUEST = 'FETCH_NOTES_REQUEST';
export const fetchNotesRequest = () => ({
  type: FETCH_NOTES_REQUEST,
});

export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const fetchNotesSuccess = notes => ({
  type: FETCH_NOTES_SUCCESS,
  notes,
});

export const FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR';
export const fetchNotesError = error => ({
  type: FETCH_NOTES_ERROR,
  error,
});

export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const saveSuccess = notes => ({
  type: SAVE_SUCCESS,
  notes,
});

export const ADD_NOTE = 'ADD_NOTE';
export const addNote = () => ({
  type: ADD_NOTE,
});

export const UPDATE_NEW_NOTE_TITLE = 'UPDATE_NEW_NOTE_TITLE';
export const updateNewNoteTitle = title => ({
  type: UPDATE_NEW_NOTE_TITLE,
  title,
});

export const UPDATE_NEW_NOTE_CONTENT = 'UPDATE_NEW_NOTE_CONTENT';
export const updateNewNoteContent = content => ({
  type: UPDATE_NEW_NOTE_CONTENT,
  content,
});

export const UPDATE_NEW_NOTE_TAGS = 'UPDATE_NEW_NOTE_TAGS';
export const updateNewNoteTags = tags => ({
  type: UPDATE_NEW_NOTE_TAGS,
  tags,
});


export const postNote = (note) => (dispatch) => {
  dispatch(fetchNotesRequest());
  return fetch(`${apiUrl}/notes`, {
    method: 'POST',
    body: JSON.stringify(note),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((note) => {
      dispatch(saveSuccess(note));
    })
    .catch((err) => {
      dispatch(fetchNotesError(err));
    });
};

export const fetchNotes = () => (dispatch) => {
  dispatch(fetchNotesRequest());
  return fetch(`${apiUrl}/notes`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((notes) => {
      dispatch(fetchNotesSuccess(notes));
    })
    .catch((err) => {
      dispatch(fetchNotesError(err));
    });
};

export const updateNoteInDb = (note) => (dispatch) => {
  dispatch(fetchNotesRequest());
  return fetch(`${apiUrl}/notes/${note.id}`, {
    method: 'PUT',
    body: JSON.stringify(note),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(() => dispatch(fetchNotes()))
    .catch((err) => {
      dispatch(fetchNotesError(err));
    });
};
