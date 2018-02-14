import {
  FETCH_NOTES_ERROR,
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  ADD_NOTE,
} from '../actions';

const initialState = {
  notes: [''],
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
    console.log('req success');
    return {
      ...state,
      error: null,
      loading: false,
      folders: action.notes,
    };
  case ADD_NOTE:
    return {
      ...state,
      notes: [...state.notes,
        action.notes],
    };
  default:
    return state;
  }
};

export default reducer;

