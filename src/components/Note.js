import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

export function Note(props) {
  return (
    <div className="note-form">
      <form>
        <input type="text" />
        <button value="save" />
      </form>
    </div>
  );
}


const mapStateToProps = state => ({
  notes: [state.notes],
});


export default connect(mapStateToProps)(Note);
