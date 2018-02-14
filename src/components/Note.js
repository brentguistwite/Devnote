import React from 'react';
import { connect } from 'react-redux';
import { editNote } from '../actions';

export function Note(props) {
  console.log(props);
  return (
    <div className="note-form">
      <textarea
        data={props.currentDraft.id}
        value={props.currentDraft.content}
        onChange={event => props.dispatch(editNote(event.target.value))}
      />
    </div>
  );
}
const mapStateToProps = state => ({
  currentDraft: state.currentDraft,
});
export default connect(mapStateToProps)(Note);
