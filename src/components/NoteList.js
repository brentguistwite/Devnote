import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from './../actions';
import Note from './Note';
import './NoteList.css';

export class NoteList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNotes());
  }
  render() {
    console.log(this.props);
    const notes = this.props.notes[0].map((note, index) => (
      <li className="notes-list-item" key={index}>
        <h1>{note.title}</h1>
        <span>{note.lastEdited}</span>
      </li>

    ));
    console.log(notes);
    return (
      <div className="notes-nav">
        <h2>Notes</h2>
        <Note notes={notes} />
        <ul className="notes-list">{notes}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  notes: [state.notes],
});
export default connect(mapStateToProps)(NoteList);
