import React from 'react';
import { connect } from 'react-redux';
import hljs from 'highlight.js';
import Remarkable from 'remarkable';



export function FormattedNote(props) {
  const md = new Remarkable('full', {
    html: true,
    linkify: true,
    typographer: true,
    xhtmlOut: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) {
          console.log('first block', err);
        }
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) {
        console.log('second block', err);
      }

      return ''; // use external default escaping
    }
  });
  const html = md.render(props.currentDraft.content);
  return(
    <div className="content" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
}


const mapStateToProps = state => ({
  currentDraft: state.currentDraft,
});

export default connect(mapStateToProps)(FormattedNote);

