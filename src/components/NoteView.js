import React from 'react';
import { connect } from 'react-redux';
import MarkdownRenderer from 'react-markdown-renderer';
import { 
  editNote, 
  updateNoteInDb, 
  postNote,
  updateNewNoteTitle,
  updateNewNoteContent,
  updateNewNoteTags, 
} from '../actions';

export function NoteView(props) {
  if (props.creatingNote) {
    return (
      <div className="new-note-form">
        <form 
          onSubmit={(event) => {
            event.preventDefault();
            props.dispatch(postNote(props.newNote));
          }}
        >
          <div className="title-container">
            <label htmlFor="title">Title</label>
            <input
              id="title" 
              type="text" 
              onChange={event => props.dispatch(updateNewNoteTitle(event.target.value))}
            />
          </div>
          <div className="note-container">  
            <label htmlFor="note-field">Notes</label>
            <textarea 
              id="note-field"
              onChange={event => props.dispatch(updateNewNoteContent(event.target.value))}
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
    return (
      <div className="note-form">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.dispatch(updateNoteInDb(props.currentDraft));
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
        <MarkdownRenderer markdown={props.currentDraft.content} />
      </div>
    );
  } 
}
const mapStateToProps = state => ({
  currentDraft: state.currentDraft,
  creatingNote: state.creatingNote,
  newNote: state.newNote,
});
export default connect(mapStateToProps)(NoteView);
