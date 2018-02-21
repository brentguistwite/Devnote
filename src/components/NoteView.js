import React from 'react';
import { connect } from 'react-redux';
import FormattedNote from './FormattedNote';
import { 
  editNote,
  updateNewNoteTitle,
  updateNewNoteContent,
  updateNewNoteTags, 
} from '../actions';

export function NoteView(props) {
  if (props.creatingNote) {
    return (
      <div className="new-note-form">
        <form 
          onSubmit={event => event.preventDefault()}
        >
          <div className="title-container">
            <label htmlFor="title">Title:</label>
            <input 
              autoComplete="false"
              id="title" 
              type="text" 
              onChange={event => props.dispatch(updateNewNoteTitle(event.target.value))}
            />
          </div>
          <div className="note-container">  
            <label htmlFor="note-field">Notes:</label>
            <textarea 
              autoComplete="false"
              id="note-field"
              onChange={event => props.dispatch(updateNewNoteContent(event.target.value))}
            />
          </div>
          <div className="tag-container">
            <label htmlFor="tag">Tags</label>
            <input id="tags" type="text" />
          </div>
        </form>  
      </div>
    );
  } if (props.markdownView) {
    return (
      <div className="note-form">
        <FormattedNote />
      </div>  
    );
  } else {
    return (
      <div className="note-form">
        <form
          onSubmit={event => event.preventDefault()}
        >
          <h1 
            className={props.hideNoteList ? 'fullscreen' : 'note-title'}
          >
            {props.currentDraft.title}
          </h1>
          <textarea
            autoComplete="false"
            data={props.currentDraft}
            value={props.currentDraft.content}
            onChange={event => props.dispatch(editNote(event.target.value))}
          />
        </form>
      </div>
    );
  } 
}
const mapStateToProps = state => ({
  currentDraft: state.currentDraft,
  creatingNote: state.creatingNote,
  newNote: state.newNote,
  markdownView: state.markdownView,
});
export default connect(mapStateToProps)(NoteView);
