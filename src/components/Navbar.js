import React from 'react';
import { connect } from 'react-redux';
import { addNote, updateNoteInDb } from './../actions';
import newNote from './../images/newNote.png';
import hideList from './../images/hideList.png';

export function Navbar(props) {
  return(
    <nav className="top-nav">
      <img 
        className="new-note-button" 
        src={newNote} 
        onClick={() => props.dispatch(addNote())} />
      <input 
        onChange={(e) => console.log(e.target.value)} 
        type="text" 
        placeholder="Search notes"/>
      <label htmlFor="preview">Preview notes</label>
      <input
        className="orange" 
        type="checkbox" 
        id="preview"
      />
      <span>Sort by:</span>
      <label htmlFor="recent">Recent</label>
      <input
        className="orange" 
        checked="checked"
        type="checkbox" 
        id="recent"/>
      <label htmlFor="alphabetic">Alphabetic</label>
      <input
        className="orange"
        type="checkbox"
        id="alphabetic" />
      <img 
        className="save-note-button" 
        src={hideList} 
        onClick={() => props.dispatch(updateNoteInDb(props.currentDraft))} />
    </nav> 
  )
}

export default connect()(Navbar);
