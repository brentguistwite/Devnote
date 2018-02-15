import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, changeNoteView } from './../actions';
import Note from './Note';
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
    console.log(this.props);
    const notes = this.props.notes.map((note, index) => {
      const noteData = JSON.stringify(note);
      console.log(noteData);
      return (
        <li onClick={this.handleClick.bind(this)} data-note={noteData} className="notes-list-item" key={index}>
          <h1>{note.title}</h1>
          <span>{note.lastEdited}</span>
        </li>);
    });
    console.log(notes);
    return (
      <div className="notes-nav">
        <h2>Notes</h2>
        <Note />
        <ul className="notes-list">{notes}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  notes: state.notes,
});
export default connect(mapStateToProps)(NoteList);
