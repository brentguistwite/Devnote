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
    console.log('hi');
    const { id, content } = e.currentTarget.dataset;
    console.log(content);
    this.props.dispatch(changeNoteView(id));
  }
  render() {
    console.log(this.props);
    const notes = this.props.notes.map((note, index) => (
      <li onClick={this.handleClick.bind(this)} data-content={note.content} data-id={note.id} className="notes-list-item" key={index}>
        <h1>{note.title}</h1>
        <span>{note.lastEdited}</span>
      </li>

    ));
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
