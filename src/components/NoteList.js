import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, changeNoteView } from './../actions';

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
        className={this.props.hideNoteList ? 'hidden' : 'notes-nav'}
      >
        <ul className="notes-list">{notes}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  hideNoteList: state.hideNoteList,
  notes: state.notes,
});
export default connect(mapStateToProps)(NoteList);
