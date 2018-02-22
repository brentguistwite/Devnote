import React from 'react';
import { connect } from 'react-redux';
import hljs from 'highlight.js';
import Remarkable from 'remarkable';



export function FormattedNote(props) {
  const md = new Remarkable('full', {
    linkify: true,
    typographer: true,
    xhtmlOut: true,
  },
  {
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) { }
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) { }

      return ''; // use external default escaping
    }
  });
  const x = md.render(props.currentDraft.content);
  console.log(x[0]);
  x.replace(/\"/g, "");
  console.log(x[0], typeof x);
  // console.log(x.raw());
  return(
    x
  );
}


const mapStateToProps = state => ({
  currentDraft: state.currentDraft,
});

export default connect(mapStateToProps)(FormattedNote);

