import React from 'react';
import { connect } from 'react-redux';
import addButton from './../addButton.png';

export function Navbar(props) {

  return(
    <nav>
      <img className="new-note-button" src={addButton} />
      <input onChange={(e) => console.log(e.target.value)} type="text" placeholder="Search notes"/>
    </nav> 
  )
}

export default connect()(Navbar);
