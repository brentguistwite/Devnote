import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from './../actions';
import './NoteList.css';

export class FolderList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNotes());
  }
  render() {
    console.log(this.props);
    const folders = this.props.folders.map((folder, index) => (
      <li className="folder-list-item" key={index}>
        {folder}
      </li>

    ));

    return (
      <div className="folder-nav">
        <h2>Notes</h2>
        <ul className="folder-list">{folders}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  folders: [state.folders],
});
export default connect(mapStateToProps)(FolderList);
