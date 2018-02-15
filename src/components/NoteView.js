import React from 'react';
import { connect } from 'react-redux';
import { editNote, saveNoteToDb } from '../actions';

export function NoteView(props) {
  if (props.creatingNote) {
    console.log(props.currentDraft);
    return (
      <div className="note-form">
        <form 
          onSubmit={() => props.dispatch(saveNoteToDb(props.currentDraft))}
        >
          <div className="title-container">
            <label htmlFor="title">Title</label>
            <input
              id="title" 
              type="text" 
              onChange={event => props.dispatch(editNote(event.target.value))}
            />
          </div>
          <div className="note-container">  
            <label htmlFor="note-field">Notes</label>
            <textarea 
              id="note-field"
            />
          </div>
          <div className="tag-container">
            <label htmlFor="tag">Tags</label>
            <input id="tags" type="text" />
          </div>
          <button>
            Save
          </button>
        </form>  
      </div>
    );
  } else {
    console.log(props.currentDraft);
    return (
      <div className="note-form">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(event.currentTarget)
            props.dispatch(saveNoteToDb(props.currentDraft));
          }}
        >
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
        </form>
      </div>
    );
  } 
}
const mapStateToProps = state => ({
  currentDraft: state.currentDraft,
  creatingNote: state.creatingNote,
});
export default connect(mapStateToProps)(NoteView);
