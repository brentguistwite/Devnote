import React from 'react';
import { connect } from 'react-redux';
import hljs from 'highlight.js';
import Remarkable from 'remarkable';



export function FormattedNote(props) {
  const md = new Remarkable('full', {
    html: true,        // Enable HTML tags in source
    xhtmlOut: true,        // Use '/' to close single tags (<br />)
    breaks: true,        // Convert '\n' in paragraphs into <br>
    langPrefix: 'language-',  // CSS language prefix for fenced blocks
    linkify: true,         // autoconvert URL-like texts to links
    linkTarget: '',           // set target to open link in

    // Enable some language-neutral replacements + quotes beautification
    typographer: true,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) {
          alert(err);
        }
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) { 
        alert(err);
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

