import React from 'react';
import { connect } from 'react-redux';

export function Note(props) {
  return (
    <div className="note">
      <h2 className="note-title">{props.title}</h2>
      <div className="note-content">
        {props.content}
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  console.log();
  console.log(props);
};

export default connect(mapStateToProps)(Note);
