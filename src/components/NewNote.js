import React from 'react';
import { connect } from 'react-redux';

export function NewNote(props) {
  return(
    <div>
      <form>
        <input type="text"/>
        <textarea/> 
        <button text="save note" value="send"/> 

      </form>  
    </div>
  );
}

export default connect()(NewNote);
