import React from 'react';
import { connect } from 'react-redux';
import MarkdownRenderer from 'react-markdown-renderer';

export function FormattedNote(props) {
  return(
    <div className="markdown-note-container">
      <MarkdownRenderer markdown={props.currentDraft.content}/>
    </div>
  );
}

const mapStateToProps = state => ({
  currentDraft: state.currentDraft,
});

export default connect(mapStateToProps)(FormattedNote);
