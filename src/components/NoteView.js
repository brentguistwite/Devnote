import React from 'react';
import { connect } from 'react-redux';
import { editNote, saveNoteToDb } from '../actions';

export function NoteView(props) {
  if (props.creatingNote) {
    console.log(props);
    return (
      <div className="note-form">
        <form>
          <div className="title-container">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" />
          </div>
          <div className="note-container">  
            <label htmlFor="note-field">Notes</label>
            <textarea 
              id="note-field"
              onChange={event => props.dispatch(editNote(event.target.value))}
            />
          </div>
          <div className="tag-container">
            <label htmlFor="tag">Tags</label>
            <input id="tags" type="text" />
          </div>
          <button onClick={props.dispatch(saveNoteToDb(props.currentDraft))}>
            Save
          </button>
        </form>  
      </div>
    );
  } else {
    return (
      <div className="note-form">
        <h1>
          {props.currentDraft.title}
        </h1>
        <textarea
          data={props.currentDraft}
          value={props.currentDraft.content}
          onChange={event => props.dispatch(editNote(event.target.value))}
        />
        <button>
        Save
        </button>
      </div>
    );
  } 
}
const mapStateToProps = state => ({
  currentDraft: state.currentDraft,
  creatingNote: state.creatingNote,
});
export default connect(mapStateToProps)(NoteView);
