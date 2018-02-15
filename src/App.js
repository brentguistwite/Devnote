import React from 'react';
import NoteList from './components/NoteList';
import NoteView from './components/NoteView';

import './App.css';

export default function App() {
  return (
    <div>
      <NoteView />
      <NoteList />
    </div>
  );
}
