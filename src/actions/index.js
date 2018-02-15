import apiUrl from '../config';

export const EDIT_NOTE = 'EDIT_NOTE';
export const editNote = newDraft => ({
  type: EDIT_NOTE,
  newDraft,
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
export const addNote = note => ({
  type: ADD_NOTE,
});

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

export const saveNoteToDb = (notes) => (dispatch) => {
  dispatch(fetchNotesRequest());
  return fetch(`${apiUrl}/notes`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((notes) => {
      dispatch(saveSuccess(notes));
    })
    .catch((err) => {
      dispatch(fetchNotesError(err));
    });
};
