import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, changeNoteView, addNote } from './../actions';
import './NoteList.css';

export class NoteList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNotes());
  }
  handleClick(e) {
    const { note } = e.currentTarget.dataset;
    this.props.dispatch(changeNoteView(JSON.parse(note)));
  }
  render() {
    const notes = this.props.notes.map((note, index) => {
      const noteData = JSON.stringify(note);
      return (
        <li onClick={this.handleClick.bind(this)} data-note={noteData} className="notes-list-item" key={index}>
          <h1>{note.title}</h1>
          <span>{note.lastEdited}</span>
        </li>);
    });
    return (
      <div
        className="notes-nav">
        <h2>Notes</h2>
        <button
          className="new-note"
          onClick={() => this.props.dispatch(addNote())}
        >
          New Note
        </button>
        <ul className="notes-list">{notes}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  notes: state.notes,
});
export default connect(mapStateToProps)(NoteList);
