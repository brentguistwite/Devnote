import React from 'react';
import { connect } from 'react-redux';
import { editNote } from '../actions';

export function Note(props) {
  return (
    <div className="note-form">
      <textarea
        value={props.currentDraft}
        onChange={event => props.dispatch(editNote(event.target.value))}
      />
    </div>
  );
}
const mapStateToProps = state => ({
  currentDraft: state.currentDraft,
});
export default connect(mapStateToProps)(Note);
