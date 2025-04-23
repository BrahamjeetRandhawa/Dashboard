import './App.css';
import React from 'react';

import Top from './Top'; // Import the Top component
import Sidebar from './Sidebar'; // Import the Sidebar component

function App() {
  return (
    <div className="App-container">
      <Top className="Topbar" />
      <Sidebar className="Sidebar" />
    </div>
  );
}

export default App;
