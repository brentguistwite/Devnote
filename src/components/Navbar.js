import React from 'react';
import { connect } from 'react-redux';
import { addNote, updateNoteInDb, postNote, toggleMarkdownView } from './../actions';
import newNote from './../images/newNote.png';
import save from './../images/save.png';

export function Navbar(props) {
  return(
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li>
            <img 
              className="new-note-button" 
              src={newNote} 
              onClick={() => props.dispatch(addNote())}
            />
          </li>
          <li>
            <input 
              onChange={(e) => console.log(e.target.value)} 
              type="text" 
              placeholder="Search notes"/>
          </li>
          <li>
            <label htmlFor="preview">Preview notes</label>
            <input
              type="checkbox" 
              id="preview"
              onClick={() => props.dispatch(toggleMarkdownView())}
            />
          </li>
          <li>
            <span>Sort by:</span>
            <label htmlFor="recent">Recent</label>
            <input
              name="sorted-by"
              checked
              type="radio" 
              id="recent"/>
            <label htmlFor="alphabetic">Alphabetic</label>
            <input
              name="sorted-by"
              type="radio"
              id="alphabetic" 
            />
          </li>
          <li>
            <img 
              className="save-note-button" 
              src={save} 
              onClick={() => {
                props.creatingNote 
                  ? props.dispatch(postNote(props.newNote))
                  : props.dispatch(updateNoteInDb(props.currentDraft));
              }
              } 
            />
          </li>
        </ul>
      </nav> 
    </header>
  );
}

const mapStateToProps = state => ({
  currentDraft: state.currentDraft,
  creatingNote: state.creatingNote,
  newNote: state.newNote,
});

export default connect(mapStateToProps)(Navbar);
