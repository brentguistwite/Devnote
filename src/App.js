import React from 'react';
import NoteList from './components/NoteList';
import NoteView from './components/NoteView';
import Navbar from './components/Navbar';

import './App.css';

export default function App() {
  return (
    <div className ="app-container">
      <Navbar />
      <NoteList />
      <NoteView />
    </div>
  );
}
